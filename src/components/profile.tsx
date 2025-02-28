import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ChevronDown } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0118] text-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-fuchsia-900/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 py-12 relative z-10"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          {/* Profile Image with Elegant Design */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-75 blur" />
            <div className="relative p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
              <img 
                src="public\profile.jpg" 
                alt="Profile"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 space-y-8"
          >
            <h1 className="text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text animate-gradient">
              Lehrasib Roy
            </h1>
            
            <p className="text-2xl text-gray-300 font-light italic">
              Crafting Digital Experiences & Automation Magic
            </p>

            <motion.div 
              className="flex justify-center gap-6 mt-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, href: "https://github.com/yourusername", color: "#6e5494" },
                { icon: Twitter, href: "https://twitter.com/yourusername", color: "#1DA1F2" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "#0077b5" },
                { icon: Mail, href: "mailto:your@email.com", color: "#EA4335" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <social.icon size={24} className="text-white/80 hover:text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="mt-32 space-y-32">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer specializing in business automation and AI integration. 
              With over 3 years of experience, I help companies streamline their operations using 
              cutting-edge tools and technologies. My expertise spans across web development, 
              automation workflows, and creating efficient business solutions.
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {[
              {
                title: "Expertise",
                items: ["Business Process Automation", "Full Stack Development", "AI Integration", "API Development", "Cloud Solutions"]
              },
              {
                title: "Current Focus",
                items: ["Exploring AI Applications", "Building Automation Tools", "Contributing to Open Source", "Learning New Technologies"]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                      <span className="text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                        {item}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
