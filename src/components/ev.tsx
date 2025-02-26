import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Cpu, User, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Favicon URLs for tools (sourced from web results or general knowledge)
const toolIcons = {
  zapier: 'https://zapier.com/favicon.ico',
  make: 'https://www.make.com/favicon.ico',
  ghl: 'https://gohighlevel.com/favicon.ico', // Estimated, may need adjustment
  n8n: 'https://n8n.io/favicon.ico',
  aiAgent: 'https://harpa.ai/favicon.ico', // Using HARPA AI as a proxy for AI Agent
  mondayCom: 'https://monday.com/favicon.ico',
  airtable: 'https://airtable.com/favicon.ico',
  googleSheets: 'https://www.google.com/sheets/about/favicon.ico',
  chatgpt: 'https://openai.com/favicon.ico',
};

// Star component for background
const Star = ({ style }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ 
      scale: [0.7, 1, 0.7],
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute w-1 h-1 bg-white rounded-full"
    style={style}
  />
);

export const PortfolioSection = () => {
  const navigate = useNavigate();
  const [islamabadTime, setIslamabadTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      } as Intl.DateTimeFormatOptions;
      setIslamabadTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSeeMoreClick = () => {
    navigate('/tech-stack');
  };
  const handleProfileClick = () => {
    navigate('/about-me');
  };

  // Generate random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }
  }));

  return (
    <div className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] relative overflow-hidden pt-8 mt-0">
      {/* Animated Stars Background */}
      {stars.map((star, i) => (
        <Star key={i} style={star.style} />
      ))}
      
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        // animate={{
        //   background: [
        //     'radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 50%)',
        //     'radial-gradient(circle at 30% 70%, #EC4899 0%, transparent 50%)',
        //     'radial-gradient(circle at 70% 30%, #8B5CF6 0%, transparent 50%)'
        //   ]
        // }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Location Block (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -5, cursor: 'pointer' }}
            transition={{ duration: 0.2 }}
            className="w-full md:w-1/4 bg-gradient-to-br from-[#1A0B3B] to-[#2D1B4D] rounded-2xl p-6 shadow-lg border border-[#8B5CF6/20] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-10" />
              <h3 className="text-lg font-semibold text-[#FFFFFF]">Location</h3>
            </div>
            <div className="text-[#D1D5DB] text-center">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtbQoA16OpDrn0CPz6mgjPFdyZmvL6J_kLw&s" 
                alt="Islamabad Map" 
                className="w-full h-60 object-cover rounded-lg mb-10" 
              />
              <p className="text-2xl font-bold mb-0">Islamabad, Pakistan</p>
              <p className="text-sm">{islamabadTime}</p>
            </div>
          </motion.div>

          {/* Horizontal Tech Stack Block (Starting from neck of Location block) */}
          <div className="w-full md:w-3/4 flex flex-col gap-8">
            {/* Tech Stack (Horizontal, aligned at the top of Location block) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5, cursor: 'pointer' }}
              transition={{ duration: 0.2 }}
              onClick={handleSeeMoreClick}
              className="bg-gradient-to-br from-[#1A0B3B] to-[#2D1B4D] rounded-2xl p-6 shadow-lg border border-[#8B5CF6/20] transition-all duration-300 h-64 relative backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    rotateY: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Cpu className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#FFFFFF]">Tech Stack</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
                {Object.entries(toolIcons).map(([tool, icon]) => (
                  <motion.div 
                    key={tool} 
                    className="flex flex-col items-center text-center"
                    whileHover={{ scale: 1.1, cursor: 'pointer' }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img 
                      src={icon} 
                      alt={tool} 
                      className="w-10 h-10 object-contain rounded-full bg-[#FFFFFF]/10 p-1"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="text-xs text-[#D1D5DB] mt-1 line-clamp-1">{tool.charAt(0).toUpperCase() + tool.slice(1).toLowerCase().replace('Com', '.com').replace('Sheets', 'Sheets')}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1, x: 10 }}
                className="absolute bottom-14 right-14 flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] transition-colors"
              >
                <span className="text-sm">See More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* About Me and Pinboard (Two smaller blocks side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Me */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5, cursor: 'pointer' }}
                transition={{ duration: 0.2 }}
                onClick={handleProfileClick}
                className="bg-gradient-to-br from-[#2A1547] to-[#3B1E54] rounded-2xl p-6 shadow-md border border-[#8B5CF6/20] backdrop-blur-sm transition-all duration-300 h-48 relative overflow-hidden group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <User className="w-6 h-6" />
                  <h3 className="text-lg font-semibold text-[#FFFFFF]">About Me</h3>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Animated background elements */}
                    <motion.div 
                      className="absolute w-32 h-32 bg-[#8B5CF6]/20 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute w-24 h-24 bg-[#EC4899]/20 rounded-full"
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Profile content */}
                    <div className="z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#FFFFFF]">LR</span>
                      </div>
                      <p className="text-sm text-[#D1D5DB] mb-2">Full Stack Developer</p>
                      <div className="flex justify-center gap-2">
                        <motion.span 
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-[#8B5CF6]/20 rounded-full text-xs text-[#A78BFA]"
                        >
                          Automation
                        </motion.span>
                        <motion.span 
                          whileHover={{ scale: 1.1 }}
                          className="px-2 py-1 bg-[#EC4899]/20 rounded-full text-xs text-[#A78BFA]"
                        >
                          AI
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/90 to-[#EC4899]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <span className="text-[#FFFFFF] flex items-center gap-2">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Pinboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5, cursor: 'pointer' }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-[#2A1547] to-[#3B1E54] rounded-2xl p-6 shadow-md border border-[#8B5CF6/20] backdrop-blur-sm transition-all duration-300 h-48"
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    animate={{ 
                      rotate: [0, 90, 180, 270, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Grid className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#FFFFFF]">Pinboard</h3>
                </div>
                <p className="text-[#D1D5DB] text-sm">
                  Explore my designs, experiments, and automation workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};