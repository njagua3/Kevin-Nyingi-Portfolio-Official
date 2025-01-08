import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111010] text-gray-900 dark:text-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}