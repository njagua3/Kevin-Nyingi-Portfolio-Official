
import { User, Zap, Target, Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 animate-fadeIn animation-delay-200">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <User className="w-6 h-6" />
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 text-gray-600 dark:text-gray-400">
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              Why Work With Me?
            </h3>
            <p>
              I transform complex technical challenges into elegant, user-friendly solutions. With expertise in both frontend and backend development, I build scalable applications that drive real business results.
            </p>
          </div>

          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              My Approach
            </h3>
            <p>
              Every line of code I write focuses on three core principles: performance, scalability, and user experience. I believe in creating solutions that not only work flawlessly today but can adapt to tomorrow's challenges.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a1919] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500" />
            What I Bring to Your Project
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Full-stack expertise that ensures seamless integration from frontend to backend</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Modern tech stack including React, TypeScript, and Python for robust, maintainable applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Strong UI/UX sensibilities with Figma expertise for pixel-perfect designs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>DevOps knowledge ensuring smooth deployment and maintenance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}