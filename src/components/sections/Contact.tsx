import React from 'react';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 animate-fadeIn animation-delay-300">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <Mail className="w-6 h-6" />
        Let's Connect
      </h2>
      <div className="bg-white dark:bg-[#1a1919] rounded-lg p-8">
        <form
          action="https://formspree.io/f/mkgwaowj" // Replace this with your unique Formspree endpoint
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name" // This ensures the field is sent to Formspree
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242323] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email" // This ensures the field is sent to Formspree
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242323] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message" // This ensures the field is sent to Formspree
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242323] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
