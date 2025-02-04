
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
          Full Stack Developer crafting exceptional digital experiences with React, TypeScript, and modern web technologies. Specializing in building scalable applications with Node.js and Python, while creating pixel-perfect UI/UX with Figma and Tailwind CSS. From responsive frontend designs to robust backend architectures, I transform complex challenges into elegant, user-centric solutions that drive real business impact.  </p>
        </div>
        
        <div className="order-1 md:order-2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <ProfileImage />
        </div>
      </div>
    </header>
  );
}