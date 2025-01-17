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
            technologies={["Supabase", "Javascript", "Typescript", "Tailwind CSS", "Lucide Icons"]}
            liveUrl="#"
            githubUrl="#"
            icon={<ShoppingBag className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Property Management"
            description="A comprehensive property management solution that streamlines tenant communication, maintenance requests, and rent collection. Features include automated billing, maintenance tracking, and detailed financial reporting."
            technologies={["React", "Javascript", "Unsplash", "Tailwind CSS"]}
            liveUrl="https://ringbeltagents.netlify.app/"
            githubUrl="https://github.com/njagua3/Ringbelt_Agents"
            icon={<Building className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Moringa Project Tracker"
            description="A collaborative project management tool designed specifically for Moringa School, enabling students and instructors to track project progress, share resources, and manage deadlines effectively."
            technologies={["React", "Flask", "Material-UI", "Lucide Icons"]}
            liveUrl="https://moringaschool.netlify.app/"
            githubUrl="#"
            icon={<ClipboardList className="w-6 h-6" />}
            image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
          />
          <ProjectCard 
            title="Safiri Kenya"
            description="A seamless travel platform offering destination guides, travel tips, and essential information for exploring Kenya's culture effortlessly."
            technologies={["React", "Javascript", "Tailwind CSS", "Unsplash"]}
            liveUrl="https://safirike.netlify.app/"
            githubUrl="#"
            icon={<Package className="w-6 h-6" />}
            image="https://plus.unsplash.com/premium_photo-1664302700377-d544c98a8a51?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      <Contact />
      <ScrollToTop />
    </>
  );
}