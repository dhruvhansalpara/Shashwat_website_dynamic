
export async function fetchDestinations() {
  const response = await fetch('/api/destinations');
  if (!response.ok) throw new Error('Failed to fetch destinations');
  return response.json();
}

export async function saveDestination(destination: any) {
  const response = await fetch('/api/destinations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(destination)
  });
  if (!response.ok) throw new Error('Failed to save destination');
  return response.json();
}

export async function deleteDestination(id: string) {
  const response = await fetch(`/api/destinations/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete destination');
  return response.json();
}

export async function fetchPackages() {
  const response = await fetch('/api/packages');
  if (!response.ok) throw new Error('Failed to fetch packages');
  const data = await response.json();
  return data.map((pkg: any) => {
    const normalized = {
      ...pkg,
      title: pkg.title || pkg.name || 'Untitled Package',
      searchPlaces: typeof pkg.searchPlaces === 'string' ? JSON.parse(pkg.searchPlaces) : pkg.searchPlaces,
      highlights: typeof pkg.highlights === 'string' ? JSON.parse(pkg.highlights) : pkg.highlights,
      itinerary: typeof pkg.itinerary === 'string' ? JSON.parse(pkg.itinerary) : pkg.itinerary,
      inclusions: typeof pkg.inclusions === 'string' ? JSON.parse(pkg.inclusions) : pkg.inclusions,
      exclusions: typeof pkg.exclusions === 'string' ? JSON.parse(pkg.exclusions) : pkg.exclusions,
      gallery: typeof pkg.gallery === 'string' ? JSON.parse(pkg.gallery) : pkg.gallery,
      isPopular: !!pkg.isPopular
    };
    return normalized;
  });
}

export async function savePackage(pkg: any) {
  const response = await fetch('/api/packages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pkg)
  });
  if (!response.ok) throw new Error('Failed to save package');
  return response.json();
}

export async function deletePackage(id: string) {
  const response = await fetch(`/api/packages/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete package');
  return response.json();
}
