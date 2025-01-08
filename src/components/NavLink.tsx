import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseStyles = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors";
  const mobileStyles = mobile ? "block py-2" : "";
  
  return (
    <a href={href} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </a>
  );
}