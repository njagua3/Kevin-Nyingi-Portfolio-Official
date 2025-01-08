import React from 'react';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-[#0c0c0c]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <SocialLink href="https://github.com/kevinnyingi" icon={<Github />} label="GitHub" />
            <SocialLink href="https://twitter.com/kevinnyingi" icon={<Twitter />} label="Twitter" />
            <SocialLink href="https://linkedin.com/in/kevinnyingi" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:kevin@example.com" icon={<Mail />} label="Email" />
          </div>
          <p className="text-gray-400 text-sm">
            Built with React & Tailwind CSS © {new Date().getFullYear()} Kevin Nyingi
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
    </a>
  );
}