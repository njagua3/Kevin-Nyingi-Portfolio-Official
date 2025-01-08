import React from 'react';
import { Github, Twitter, Mail, Linkedin, BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '../../config/constants';
import { SocialLink } from '../SocialLink';

export function Footer() {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-[#0c0c0c]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <SocialLink href={SITE_CONFIG.social.github} icon={<Github />} label="GitHub" />
            <SocialLink href={SITE_CONFIG.social.twitter} icon={<Twitter />} label="Twitter" />
            <SocialLink href={SITE_CONFIG.social.linkedin} icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href={SITE_CONFIG.social.medium} icon={<BookOpen />} label="Medium" />
            <SocialLink href="mailto:kevin@example.com" icon={<Mail />} label="Email" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Built with React & Tailwind CSS © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}