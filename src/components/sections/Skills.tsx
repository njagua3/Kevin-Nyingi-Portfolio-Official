//import React from 'react';
import { Code2, Layout, Database, Palette, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "TypeScript", "Tailwind CSS", "Vanilla JavaScript", "ES6+", "Webpack", "Babel"]
  },
  {
    category: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    items: ["Python", "Flask", "Node.js", "RESTful APIs", "NoSQL DBs", "API Testing"]
  },
  {
    category: "Design & UI/UX",
    icon: <Palette className="w-6 h-6" />,
    items: ["Figma", "Canva", "Logo Design", "Framer", "UI Wireframing", "WordPress"]
  },
  {
    category: "DevOps & Tools",
    icon: <Cloud className="w-6 h-6" />,
    items: ["Git", "GitHub", "VS Code", "Command Line", "Vercel", "Netlify", "Render"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 animate-fadeIn animation-delay-200">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        Skills & Technologies
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.category} 
               className="p-6 rounded-lg bg-white dark:bg-[#1a1919] hover:bg-gray-50 dark:hover:bg-[#242323] 
                        transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-xl font-medium">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} 
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-[#242323] 
                               text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 
                               transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}