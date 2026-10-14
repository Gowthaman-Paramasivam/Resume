import React from 'react';

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function UaeFlag({ className = "w-5 h-3.5 rounded-[2px] shadow-xs inline-block flex-shrink-0" }) {
  return (
    <svg viewBox="0 0 600 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="100" fill="#00732f" />
      <rect y="100" width="600" height="100" fill="#ffffff" />
      <rect y="200" width="600" height="100" fill="#000000" />
      <rect width="150" height="300" fill="#ff0000" />
    </svg>
  );
}

export function IndiaFlag({ className = "w-5 h-3.5 rounded-[2px] shadow-xs inline-block flex-shrink-0" }) {
  return (
    <svg viewBox="0 0 225 150" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="225" height="50" fill="#FF9933" />
      <rect y="50" width="225" height="50" fill="#FFFFFF" />
      <rect y="100" width="225" height="50" fill="#128807" />
      <circle cx="112.5" cy="75" r="18" fill="none" stroke="#000080" strokeWidth="2.5" />
    </svg>
  );
}
