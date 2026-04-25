import type { Tour } from '../../../types';

/**
 * Builds a searchable text blob for a tour by concatenating key fields.
 */
function buildTourSearchBlob(tour: Tour): string {
  const parts = [
    tour.title,
    tour.location,
    tour.category,
    tour.description ?? '',
    tour.searchRegion ?? '',
    ...(tour.searchPlaces ?? []),
    ...(tour.highlights ?? []),
    ...(tour.itinerary?.flatMap((i) => [i.title, i.description]) ?? []),
  ];
  return parts.join(' ').toLowerCase();
}

/** 
 * Geography tokens need at least 3 characters (except full exact match) 
 * to prevent small words like "in" from matching "India".
 */
function matchesPlaceOrRegionToken(query: string, token: string): boolean {
  const q = query.trim().toLowerCase();
  const p = token.trim().toLowerCase();
  if (!q || !p) return false;
  if (p === q) return true;
  if (q.length < 3) return false;
  if (p.startsWith(q)) return true;
  if (p.includes(q)) return true;
  if (q.length >= 4 && p.length >= 4 && q.includes(p)) return true;
  return false;
}

function queryHitsTourGeography(query: string, tour: Tour): boolean {
  if (!tour.searchRegion) return false;
  if (matchesPlaceOrRegionToken(query, tour.searchRegion)) return true;
  for (const place of tour.searchPlaces ?? []) {
    if (matchesPlaceOrRegionToken(query, place)) return true;
  }
  return false;
}

/** 
 * Filters tours strictly by their searchRegion property.
 */
export function filterToursByExactRegion(tours: Tour[], rawRegion: string): Tour[] {
  const r = rawRegion.trim().toLowerCase();
  if (!r) return tours;
  return tours.filter((t) => (t.searchRegion || '').toLowerCase() === r);
}

/**
 * Advanced filter for tours based on an unstructured destination query string.
 */
export function filterToursByDestinationQuery(tours: Tour[], rawQuery: string): Tour[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return tours;

  const regionsToInclude = new Set<string>();
  for (const t of tours) {
    if (queryHitsTourGeography(q, t) && t.searchRegion) {
      regionsToInclude.add(t.searchRegion);
    }
  }

  return tours.filter((t) => {
    if (buildTourSearchBlob(t).includes(q)) return true;
    if (t.searchRegion && regionsToInclude.has(t.searchRegion)) return true;
    return false;
  });
}

/** 
 * Generates unique location and region suggestions based on available tours.
 */
export function getDestinationPickerSuggestions(tours: Tour[]): string[] {
  const set = new Set<string>();
  for (const t of tours) {
    set.add(t.location);
    const city = t.location.split(',')[0]?.trim();
    if (city) set.add(city);
    if (t.searchRegion) set.add(t.searchRegion);
    for (const p of t.searchPlaces ?? []) {
      if (p.trim()) set.add(p.trim());
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

/**
 * Filter a provided list of suggestions based on partial user input.
 */
export function filterDestinationSuggestions(
  suggestions: string[],
  input: string,
  maxResults = 80
): string[] {
  const q = input.trim().toLowerCase();
  if (!q) return suggestions.slice(0, maxResults);
  const hit = suggestions.filter((s) => s.toLowerCase().includes(q));
  return hit.slice(0, maxResults);
}
