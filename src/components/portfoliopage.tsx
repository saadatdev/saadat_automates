import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Star, Code, Zap, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from './projectsData'; // Import from centralized file

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { id: 'all', icon: Star, label: "All" },
    { id: 'web', icon: Code, label: "Web" },
    { id: 'mobile', icon: Zap, label: "Mobile" },
    { id: 'automation', icon: ArrowRight, label: "Automation" },
    { id: 'ai', icon: ExternalLink, label: "AI" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -3 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    },
    hover: { 
      scale: 1.05, 
      rotate: 2, 
      boxShadow: '0 20px 40px rgba(157, 78, 221, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A14] text-[#FFFFFF] relative overflow-hidden pb-20">
      {/* Home Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed top-4 left-4 z-50 p-3 bg-gradient-to-r from-[#9D4EDD] to-[#F472B6] rounded-full shadow-lg shadow-[#9D4EDD]/30"
        >
          <Home className="w-6 h-6 text-white" />
        </motion.button>
      </Link>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9D4EDD] via-[#C9A7FF] to-[#F472B6] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1A3E]/20 via-[#3D2A5C]/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 100 }}
          className="relative text-center space-y-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] via-[#C9A7FF] to-[#F472B6] animate-gradient">
              My Innovation Hub
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[#D4D4D8] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "tween" }}
          >
            Discover groundbreaking projects in automation and AI, pushing the boundaries of technology
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "tween" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 sticky top-0 py-4 z-10"
        >
          {categories.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                selectedCategory === id 
                  ? 'bg-gradient-to-r from-[#9D4EDD] to-[#F472B6] text-[#FFFFFF] shadow-lg shadow-[#9D4EDD]/30' 
                  : 'text-[#D4D4D8] hover:text-[#FFFFFF] hover:shadow-md hover:shadow-[#9D4EDD]/20'
              }`}
            >
              <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-sm sm:text-base capitalize">{label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto relative perspective-1000"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {filteredProjects.map((project, index) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative w-full h-[400px] sm:h-[450px] overflow-hidden rounded-2xl bg-[#1C1A3E] border border-[#9D4EDD/20] backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform-style-3d origin-center group"
                  style={{
                    zIndex: 10 - Math.abs(index - filteredProjects.length / 2),
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ rotateX: 5, rotateY: -5, z: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <motion.a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-[#FFFFFF]/20 backdrop-blur-sm rounded-full hover:bg-[#FFFFFF]/30 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4D4D8]" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-[#FFFFFF]/20 backdrop-blur-sm rounded-full hover:bg-[#FFFFFF]/30 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4D4D8]" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-[#1C1A3E]/90 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  >
                    <div className="text-center w-full">
                      <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#F472B6] line-clamp-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#D4D4D8] line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center mt-3">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-[#9D4EDD]/20 rounded-full text-[#C9A7FF]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/10 to-[#F472B6]/10 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-[#D7B9FF]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;