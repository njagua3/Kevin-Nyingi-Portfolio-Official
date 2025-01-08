import React from 'react';
import { FileDown } from 'lucide-react';

export function Resume() {
  return (
    <section className="py-16 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Want to know more?</h2>
        <a
          href="/Kevin-Nyingi-Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg
                   hover:bg-blue-700 transition-colors group"
        >
          <FileDown className="w-5 h-5 group-hover:animate-bounce" />
          Download CV
        </a>
      </div>
    </section>
  );
}