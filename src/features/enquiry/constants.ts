import { getTodayInputDate } from '../../utils/date';
import type { EnquiryFormValues } from './types';

export const WEBHOOK_URL = import.meta.env.VITE_ENQUIRY_WEBHOOK_URL as string | undefined;
export const TODAY_INPUT_DATE = getTodayInputDate();
export const ENQUIRY_DATE_STORAGE_KEY = 'shashwat-enquiry-expected-date';
export const ENQUIRY_ADULT_STORAGE_KEY = 'shashwat-enquiry-adult-count';

export const INITIAL_ENQUIRY_VALUES: EnquiryFormValues = {
  packageName: '',
  packagePrice: '',
  name: '',
  email: '',
  phone: '',
  message: '',
  expectedDate: '',
  adultCount: '',
};

export const ADULT_COUNT_OPTIONS = [
  '1 Adult',
  '2 Adults',
  '2 Adults, 1 Child',
  '2 Adults, 2 Children',
  '3 Adults',
  '3 Adults, 1 Child',
  '4 Adults',
  '4 Adults, 2 Children',
  '5+ Travelers',
];

export const ENQUIRY_STATUS_COPY = {
  genericError: 'Oops! Something went wrong while submitting your enquiry. Please try again later.',
  validationError: 'Please fill all required fields for sending enquiry.',
  success:
    'Thank you for reaching out! Your enquiry has been successfully submitted. Our team will get back to you shortly.',
};
