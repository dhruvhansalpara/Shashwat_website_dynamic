import React, { useState } from 'react';
import { cn } from '../../utils/cn';

const FALLBACK_SRC =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
      <rect fill="#e5e7eb" width="1200" height="800"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="system-ui,sans-serif" font-size="28">Image unavailable</text>
    </svg>`
  );

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Shown while loading / if src missing before error */
  fallbackClassName?: string;
  fallbackSrc?: string;
};

/**
 * Enhanced Image component with a neutral placeholder fallback on error.
 * Prevents UI layout shifts and broken image icons in cards and heroes.
 */
export default function SafeImage({ src, alt, className, fallbackClassName, fallbackSrc, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // If local image fails, or URL fails, we use the fallback
  const resolved = failed || !src ? fallbackSrc || FALLBACK_SRC : src;

  const handleError = () => {
    if (retryCount < 1) {
      setRetryCount(prev => prev + 1);
      // Optional: Logic to try a different URL variant could go here
      setFailed(true);
    } else {
      setFailed(true);
    }
  };

  return (
    <img
      src={resolved}
      alt={alt || 'Shashwat Holidays'}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={cn('bg-gray-100 object-cover', className)}
      onError={handleError}
      {...rest}
    />
  );
}
