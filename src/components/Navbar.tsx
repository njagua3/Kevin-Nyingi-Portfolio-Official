import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 
                        dark:hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-8">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <NavLink href="#work" mobile>Work</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseStyles = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors";
  const mobileStyles = mobile ? "block py-2" : "";
  
  return (
    <a href={href} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </a>
  );
}