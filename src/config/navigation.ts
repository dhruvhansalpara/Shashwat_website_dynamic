/**
 * Main application navigation links
 */

export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours', href: '/tours' },
  { label: 'Car Rental', href: '/car-rental' },
  { label: 'Contact', href: '/contact' },
];
