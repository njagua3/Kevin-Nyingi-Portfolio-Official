import { SITE_CONFIG } from '../config/constants';

export function ProfileImage(): JSX.Element {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 mx-auto">
      <img
        src={SITE_CONFIG.profileImage}
        alt={SITE_CONFIG.name}
        loading="lazy" // Enables lazy loading
        width={288} // Matches md:w-72
        height={288}
        className="rounded-full w-full h-full object-cover border-4 border-gray-800 dark:border-gray-200 shadow-lg animate-float"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-0 
                    hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
}
