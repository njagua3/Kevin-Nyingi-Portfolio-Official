import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
    </a>
  );
}