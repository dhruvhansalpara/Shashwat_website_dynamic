import {
  CONTACT_WHATSAPP_DIGITS,
} from '../../config/contact';
import type { Tour } from '../../types';

export function getFeaturedTours(tours: Tour[], limit = 9): Tour[] {
  const popular = tours.filter((tour) => tour.isPopular);
  const rest = tours.filter((tour) => !tour.isPopular);
  return [...popular, ...rest].slice(0, limit);
}

export function formatSearchDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function buildTourWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT_WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}
