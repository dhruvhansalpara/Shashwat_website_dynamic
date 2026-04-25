import type { EnquiryFieldErrors, EnquiryFormValues, EnquiryType } from './types';

export function validateEnquiry(values: EnquiryFormValues): EnquiryFieldErrors {
  const nextErrors: EnquiryFieldErrors = {};

  if (!values.name.trim()) nextErrors.name = 'Name is required.';

  if (!values.phone.trim()) {
    nextErrors.phone = 'Phone number is required.';
  } else {
    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      nextErrors.phone = 'Enter a valid 10-digit phone number.';
    }
  }

  if (values.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
  }

  return nextErrors;
}

export function buildEnquiryPayload(
  values: EnquiryFormValues,
  enquiryType: EnquiryType,
  isCarEnquiry: boolean
) {
  return {
    enquiryType,
    targetSheet: isCarEnquiry ? 'Shashwat Car booking' : 'Shashwat Holidays Enquiries',
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.replace(/\D/g, '').slice(0, 10),
    message: values.message.trim(),
    packageName: values.packageName.trim(),
    packagePrice: values.packagePrice.trim(),
    expectedDate: values.expectedDate,
    adultCount: values.adultCount.trim(),
  };
}

export async function submitEnquiry(webhookUrl: string, payload: ReturnType<typeof buildEnquiryPayload>) {
  let submitted = false;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    submitted = response.ok;
  } catch (primaryError) {
    console.warn('Primary webhook request failed, trying no-cors fallback.', primaryError);
  }

  if (!submitted) {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
  }
}
