import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Mail, Phone, Send, User, X } from 'lucide-react';
import {
  ADULT_COUNT_OPTIONS,
  ENQUIRY_ADULT_STORAGE_KEY,
  ENQUIRY_DATE_STORAGE_KEY,
  ENQUIRY_STATUS_COPY,
  INITIAL_ENQUIRY_VALUES,
  TODAY_INPUT_DATE,
  WEBHOOK_URL,
} from '../constants';
import EnquiryStatusOverlay from './EnquiryStatusOverlay';
import { buildEnquiryPayload, submitEnquiry, validateEnquiry } from '../utils';
import type {
  EnquiryFieldErrors,
  EnquiryFormValues,
  EnquiryModalProps,
} from '../types';
import ModernDatePicker from '../../../components/shared/ModernDatePicker';

/**
 * Lead Generation and Booking Modal.
 * Captures user details and sends them to a webhook for processing.
 */
export default function EnquiryModal({
  isOpen,
  onClose,
  packageName,
  packagePrice,
  expectedDate,
  adultCount,
  onExpectedDateChange,
  onAdultCountChange,
  enquiryType = 'tour',
  itemLabel,
  dialogTitle,
  submitLabel,
}: EnquiryModalProps) {
  const [values, setValues] = useState<EnquiryFormValues>(INITIAL_ENQUIRY_VALUES);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [isMounted, setIsMounted] = useState(false);

  const showStatusDialog = statusType !== '' && statusMessage !== '';
  const isCarEnquiry = enquiryType === 'car';
  const itemNameLabel = itemLabel || (isCarEnquiry ? 'Car' : 'Package');
  const modalTitle = dialogTitle || (isCarEnquiry ? 'Car Booking' : 'Send Enquiry');
  const actionLabel = submitLabel || (isCarEnquiry ? 'Book Car' : 'Send Enquiry');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setValues(INITIAL_ENQUIRY_VALUES);
      setErrors({});
      setFormError('');
      setIsSubmitting(false);
      setStatusMessage('');
      setStatusType('');
      return;
    }

    const storedExpectedDate = window.localStorage.getItem(ENQUIRY_DATE_STORAGE_KEY) || '';
    const storedAdultCount = window.localStorage.getItem(ENQUIRY_ADULT_STORAGE_KEY) || '';

    setValues({
      ...INITIAL_ENQUIRY_VALUES,
      packageName: packageName || '',
      packagePrice: packagePrice || '',
      expectedDate: expectedDate || storedExpectedDate || TODAY_INPUT_DATE,
      adultCount: adultCount || storedAdultCount || '',
    });
  }, [isOpen, packageName, packagePrice, expectedDate, adultCount]);

  if (!isOpen || !isMounted) return null;

  const updateValue = (key: keyof EnquiryFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));

    if (key === 'expectedDate') {
      window.localStorage.setItem(ENQUIRY_DATE_STORAGE_KEY, value);
    }

    if (key === 'adultCount') {
      window.localStorage.setItem(ENQUIRY_ADULT_STORAGE_KEY, value);
    }

    setErrors((prev) => ({ ...prev, [key]: '' }));
    setFormError('');
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatusMessage('');
    setStatusType('');

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormError(ENQUIRY_STATUS_COPY.validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = buildEnquiryPayload(values, enquiryType, isCarEnquiry);
      const success = await submitEnquiry(WEBHOOK_URL, payload);
      if (success) {
        setStatusType('success');
        setStatusMessage(ENQUIRY_STATUS_COPY.success);
        setValues(INITIAL_ENQUIRY_VALUES);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
      setStatusType('error');
      setStatusMessage(ENQUIRY_STATUS_COPY.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeStatusDialog = () => {
    const wasSuccess = statusType === 'success';
    setStatusMessage('');
    setStatusType('');

    if (wasSuccess) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[150] flex min-h-dvh items-center justify-center overflow-hidden px-3 py-4 sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <button
        type="button"
        aria-label="Close enquiry popup"
        onClick={onClose}
        className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm"
      />

      <div className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl max-sm:max-w-[calc(100vw-1rem)] max-h-[calc(100dvh-2rem)] sm:max-h-[min(88dvh,900px)]">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-primary/20 blur-3xl" />

        <div className="relative z-10 border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Quick Enquiry</p>
              <h2 id="enquiry-modal-title" className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                {modalTitle}
              </h2>
              <p className="mt-2 text-sm font-medium text-gray-500">
                {itemNameLabel}: <span className="font-bold text-gray-700">{packageName}</span>
              </p>
              {isCarEnquiry && values.packagePrice && (
                <p className="mt-1 text-sm font-semibold text-gray-500">
                  Rate: <span className="font-black text-brand-primary">{values.packagePrice}</span>
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="relative z-10 flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          {formError && (
            <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {formError}
            </p>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {!isCarEnquiry && (
              <label className="space-y-2 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Package Price</span>
                <input
                  value={values.packagePrice}
                  onChange={(e) => updateValue('packagePrice', e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 outline-none transition focus:border-brand-primary"
                  placeholder="Package price"
                />
              </label>
            )}

            <label className={`space-y-2.5 ${!isCarEnquiry ? '' : 'sm:col-span-2'}`}>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Expected Date</span>
              <ModernDatePicker
                value={values.expectedDate}
                onChange={(value) => {
                  updateValue('expectedDate', value);
                  onExpectedDateChange?.(value);
                }}
                minDate={TODAY_INPUT_DATE}
                placeholder="Select expected date"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-base font-semibold text-gray-900 outline-none transition focus:border-brand-primary [color-scheme:light]"
              />
            </label>

            {!isCarEnquiry && (
              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Adult Count</span>
                <select
                  value={values.adultCount}
                  onChange={(e) => {
                    updateValue('adultCount', e.target.value);
                    onAdultCountChange?.(e.target.value);
                  }}
                  className="w-full cursor-pointer appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm font-semibold text-gray-900 outline-none transition focus:border-brand-primary"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.85rem center',
                    backgroundSize: '1rem 1rem',
                  }}
                >
                  <option value="" disabled>Select travelers</option>
                  {ADULT_COUNT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-2 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Name *</span>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-brand-primary">
                <User className="h-4 w-4 text-gray-400" />
                <input
                  value={values.name}
                  onChange={(e) => updateValue('name', e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
                  placeholder="Your full name"
                />
              </div>
              {errors.name && <p className="text-xs font-semibold text-red-500">{errors.name}</p>}
            </label>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</span>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-brand-primary">
                <Mail className="h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => updateValue('email', e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="text-xs font-semibold text-red-500">{errors.email}</p>}
            </label>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number *</span>
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus-within:border-brand-primary">
                <Phone className="h-4 w-4 text-gray-400" />
                <input
                  value={values.phone}
                  onChange={(e) => updateValue('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none"
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && <p className="text-xs font-semibold text-red-500">{errors.phone}</p>}
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</span>
            <textarea
              rows={4}
              value={values.message}
              onChange={(e) => updateValue('message', e.target.value)}
              placeholder={
                isCarEnquiry
                  ? 'Tell us pickup city, route, travel date, and any special requests.'
                  : 'Tell us your travel dates, guests, and any special requests.'
              }
              className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-brand-primary"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-brand-primary/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? 'Sending...' : actionLabel}
          </button>
        </form>

        {isSubmitting && <EnquiryStatusOverlay mode="submitting" />}
        {showStatusDialog && (
          <EnquiryStatusOverlay mode={statusType} message={statusMessage} onClose={closeStatusDialog} />
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
