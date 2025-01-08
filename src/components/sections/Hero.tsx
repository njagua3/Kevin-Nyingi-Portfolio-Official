import React from 'react';
import { ProfileImage } from '../ProfileImage';
import { Clock } from '../Clock';
import { Availability } from '../Availability';
import { SITE_CONFIG } from '../../config/constants';

export function Hero() {
  return (
    <header className="pt-32 pb-16 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="transform -rotate-3 bg-white dark:bg-[#1a1919] p-6 rounded-lg shadow-lg">
            <Clock />
            <Availability />
          </div>
          
          <h1 className="text-4xl font-bold animate-slideUp">
            Hey, I'm {SITE_CONFIG.name} 👋
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-slideUp animation-delay-100">
            Passionate Full Stack Developer & SEO Specialist crafting digital experiences that users love and search engines understand. 
            With a year of hands-on experience, I blend technical expertise with strategic SEO to build websites that not only look great but perform exceptionally well.
          </p>
        </div>
        
        <div className="order-1 md:order-2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <ProfileImage />
        </div>
      </div>
    </header>
  );
}