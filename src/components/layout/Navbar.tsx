import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { NavLink } from '../NavLink';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-[#111010]/80 backdrop-blur-sm z-50">
      <div className="max-w-2xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 
                                dark:hover:text-gray-300 transition-colors">KN</a>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 
                        dark:hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#work" mobile>Work</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}