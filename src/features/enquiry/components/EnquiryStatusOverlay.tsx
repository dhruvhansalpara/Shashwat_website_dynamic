import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

type EnquiryStatusOverlayProps = {
  mode: 'submitting' | 'success' | 'error';
  message?: string;
  onClose?: () => void;
};

export default function EnquiryStatusOverlay({
  mode,
  message,
  onClose,
}: EnquiryStatusOverlayProps) {
  const isSubmitting = mode === 'submitting';
  const isSuccess = mode === 'success';

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-950/45 p-5 backdrop-blur-sm sm:p-8">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/30 bg-white p-5 shadow-2xl sm:p-6">
        <div
          className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl ${
            isSubmitting || isSuccess ? 'bg-brand-primary/25' : 'bg-brand-secondary/20'
          }`}
        />
        <div className="relative z-10 text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-[1.15rem] shadow-lg ${
              isSubmitting || isSuccess
                ? 'bg-brand-primary/12 text-brand-primary shadow-brand-primary/15'
                : 'bg-brand-secondary/12 text-brand-secondary shadow-brand-secondary/15'
            }`}
          >
            {isSubmitting ? (
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-primary/20 border-t-brand-primary" />
            ) : isSuccess ? (
              <CheckCircle2 className="h-8 w-8" />
            ) : (
              <AlertCircle className="h-8 w-8" />
            )}
          </div>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
            {isSubmitting ? 'Submitting Enquiry' : isSuccess ? 'Enquiry Submitted' : 'Submission Failed'}
          </p>
          <h3 className="mt-2 text-xl font-black text-gray-900 sm:text-2xl">
            {isSubmitting ? 'Please Wait' : isSuccess ? 'Thank You' : 'Oops!'}
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-gray-500">
            {isSubmitting
              ? 'We are sending your enquiry details. This will close once we receive a success or error response.'
              : message}
          </p>
          {!isSubmitting && onClose && (
            <button
              type="button"
              onClick={onClose}
              className={`mt-5 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-xl transition hover:opacity-90 ${
                isSuccess
                  ? 'bg-brand-primary shadow-brand-primary/25'
                  : 'bg-brand-secondary shadow-brand-secondary/25'
              }`}
            >
              {isSuccess ? 'Done' : 'Try Again'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
