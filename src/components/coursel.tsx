import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Smart CRM Automation",
    description: "Integrated AI-driven CRM solutions with GoHighLevel for a 30% efficiency boost.",
    image: "https://via.placeholder.com/400x250?text=CRM+Automation",
    category: "Automation",
    link: "https://example.com/crm-automation",
  },
  {
    title: "AI-Powered Workflow Optimizer",
    description: "Built an AI agent using Zapier and ChatGPT to automate workflows, saving 20 hours weekly.",
    image: "https://via.placeholder.com/400x250?text=Workflow+Optimizer",
    category: "AI",
    link: "https://example.com/workflow-optimizer",
  },
  {
    title: "E-Commerce Automation Hub",
    description: "Developed a scalable automation system with Make and Airtable for an e-commerce platform.",
    image: "https://via.placeholder.com/400x250?text=E-Commerce+Automation",
    category: "Business",
    link: "https://example.com/e-commerce-automation",
  },
  {
    title: "Data Integration Platform",
    description: "Created a custom integration using n8n and Google Sheets for real-time data syncing.",
    image: "https://via.placeholder.com/400x250?text=Data+Integration",
    category: "Automation",
    link: "https://example.com/data-integration",
  },
  {
    title: "AI Chatbot for Marketing",
    description: "Implemented a ChatGPT-based chatbot for marketing automation, increasing engagement by 40%.",
    image: "https://via.placeholder.com/400x250?text=AI+Chatbot",
    category: "AI",
    link: "https://example.com/ai-chatbot",
  },
  {
    title: "Notion Workflow Automation",
    description: "Automated Notion workflows with Monday.com for project management efficiency.",
    image: "https://via.placeholder.com/400x250?text=Notion+Automation",
    category: "Business",
    link: "https://example.com/notion-automation",
  },
];

const ProjectsShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: (index) => index * 0.1
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      className="min-h-screen py-16 sm:py-20 md:py-24 bg-[#0A0A0A] text-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B3B]/20 via-transparent to-[#2D1B4D]/20 z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#EC4899]"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className="relative bg-[#1A0B3B] rounded-2xl p-6 border border-[#8B5CF6/20] backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-6 shadow-md"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              {/* Project Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#FFFFFF] bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#D1D5DB] mb-4 line-clamp-2">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="inline-flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] font-medium transition-all duration-300"
                >
                  View Project <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </motion.a>
              </div>

              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-[#C084FC]/30 rounded-2xl blur-md opacity-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsShowcase;