import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export function Quote() {
  return (
    <section className="py-16 animate-fadeIn">
      <div className="max-w-2xl mx-auto text-center">
        <QuoteIcon className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
        <blockquote className="text-2xl font-medium italic text-gray-800 dark:text-gray-200">
          "Programming is the closest thing we have to a superpower"
        </blockquote>
        <cite className="block mt-4 text-gray-600 dark:text-gray-400">- Drew Houston</cite>
      </div>
    </section>
  );
}