import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: React.ReactNode;
  image?: string;
}

export function ProjectCard({ title, description, technologies, liveUrl, githubUrl, icon, image }: ProjectCardProps) {
  return (
    <div className="group animate-fadeIn hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 rounded-lg bg-white dark:bg-[#1a1919] shadow-lg relative overflow-hidden">
        {image && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105" />
          </div>
        )}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {icon && <div className="text-blue-600 dark:text-blue-400">{icon}</div>}
            <h3 className="text-xl font-medium">{title}</h3>
          </div>
          <div className="flex gap-3">
            {githubUrl && (
              <a href={githubUrl} 
                 className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="View source code">
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} 
                 className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Visit live site">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} 
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-[#242323] text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}