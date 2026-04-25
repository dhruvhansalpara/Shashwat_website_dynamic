export type EnquiryType = 'tour' | 'car';

export type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice?: string;
  expectedDate?: string;
  adultCount?: string;
  onExpectedDateChange?: (value: string) => void;
  onAdultCountChange?: (value: string) => void;
  enquiryType?: EnquiryType;
  itemLabel?: string;
  dialogTitle?: string;
  submitLabel?: string;
};

export type EnquiryFormValues = {
  packageName: string;
  packagePrice: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  expectedDate: string;
  adultCount: string;
};

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFormValues, string>>;
