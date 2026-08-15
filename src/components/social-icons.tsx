import React from "react";

/**
 * lucide-react doesn't ship brand/logo icons. These small inline marks
 * fill that gap for the footer's social links.
 */
type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.5C16.53 3.4 15.55 3.3 14.4 3.3c-2.68 0-4.5 1.64-4.5 4.64v2.4H7.1v3.3h2.8V22h3.6Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GoogleIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.9a5.04 5.04 0 0 1-2.19 3.31v2.75h3.54c2.08-1.92 3.25-4.74 3.25-8.09Z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.54-2.75c-.98.66-2.24 1.05-3.74 1.05-2.87 0-5.3-1.94-6.17-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path d="M5.83 14.11A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.44.35-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.65-2.84Z" />
      <path d="M12 5.36c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.65 2.84c.87-2.59 3.3-4.53 6.17-4.53Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12s0-3.3-.42-4.9a3 3 0 0 0-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.48.5a3 3 0 0 0-2.1 2.1C1 8.7 1 12 1 12s0 3.3.42 4.9a3 3 0 0 0 2.1 2.1c1.58.5 8.48.5 8.48.5s6.9 0 8.48-.5a3 3 0 0 0 2.1-2.1C23 15.3 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
      />
    </svg>
  );
}
