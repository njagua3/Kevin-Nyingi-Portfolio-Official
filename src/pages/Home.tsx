import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Resume } from '../components/sections/Resume';
import { Quote } from '../components/sections/Quote';
import { Skills } from '../components/sections/Skills';
import { ProjectCard } from '../components/ProjectCard';
import { Contact } from '../components/sections/Contact';
import { ScrollToTop } from '../components/ScrollToTop';
import { Code, ShoppingBag, Building, ClipboardList, Package } from 'lucide-react';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Quote />
      <Skills />
      
      <section id="work" className="py-16 animate-fadeIn animation-delay-200">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Code className="w-6 h-6" />
          Featured Work
        </h2>
        <div className="space-y-8">
          <ProjectCard 
            title="Vagi Fashion E-commerce"
            description="A modern e-commerce platform with real-time inventory management, secure payments, and personalized shopping experiences. Implemented advanced SEO techniques resulting in a 40% increase in organic traffic."
            technologies={["Next.js", "Node.js", "PostgreSQL", "Stripe", "SEO"]}
            liveUrl="#"
            githubUrl="#"
            icon={<ShoppingBag className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Property Management App"
            description="A comprehensive property management solution that streamlines tenant communication, maintenance requests, and rent collection. Features include automated billing, maintenance tracking, and detailed financial reporting."
            technologies={["React", "Express", "MongoDB", "Socket.io"]}
            liveUrl="#"
            githubUrl="#"
            icon={<Building className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Moringa Project Tracker"
            description="A collaborative project management tool designed specifically for Moringa School, enabling students and instructors to track project progress, share resources, and manage deadlines effectively."
            technologies={["React", "Firebase", "Material-UI", "Charts.js"]}
            liveUrl="#"
            githubUrl="#"
            icon={<ClipboardList className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Inventory Management System"
            description="A robust inventory management solution with features including real-time stock tracking, automated reordering, barcode scanning, and detailed analytics for business intelligence."
            technologies={["Vue.js", "Node.js", "MySQL", "Docker"]}
            liveUrl="#"
            githubUrl="#"
            icon={<Package className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      <Contact />
      <ScrollToTop />
    </>
  );
}