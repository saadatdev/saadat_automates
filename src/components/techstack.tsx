import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechStackPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categoriesRef = useRef(null);

  const categories = {
    automation: 'Automation Tools',
    analytics: 'Analytics & Data', 
    forms: 'Forms & Surveys',
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    marketing: 'Marketing Tools',
    crm: 'CRM & Business',
    communication: 'Communication',
    chatbots: 'Chatbots & AI',
    productivity: 'Productivity'
  };

  const tools = {
    // Automation Tools
    zapier: { icon: 'https://zapier.com/favicon.ico', category: 'automation', desc: 'Workflow Automation' },
    make: { icon: 'https://www.make.com/favicon.ico', category: 'automation', desc: 'Advanced Automation Platform' },
    n8n: { icon: 'https://n8n.io/favicon.ico', category: 'automation', desc: 'Open Source Automation' },
    
    // Analytics & Data
    lookerStudio: { icon: 'https://ssl.gstatic.com/looker/favicon.ico', category: 'analytics', desc: 'Data Visualization' },
    googleSheets: { icon: 'https://www.google.com/sheets/about/favicon.ico', category: 'analytics', desc: 'Spreadsheet Platform' },
    airtable: { icon: 'https://airtable.com/favicon.ico', category: 'analytics', desc: 'Database Management' },
    mondayCom: { icon: 'https://monday.com/favicon.ico', category: 'analytics', desc: 'Project Management Platform' },
    
    // Forms & Surveys
    jotform: { icon: 'https://www.jotform.com/favicon.ico', category: 'forms', desc: 'Form Builder' },
    typeform: { icon: 'https://www.typeform.com/favicon.ico', category: 'forms', desc: 'Interactive Forms' },
    googleForms: { icon: 'https://www.google.com/forms/about/favicon.ico', category: 'forms', desc: 'Google Forms' },
    
    // Marketing Tools
    klaviyo: { icon: 'https://www.klaviyo.com/favicon.ico', category: 'marketing', desc: 'Email Marketing' },
    ghl: { icon: 'https://gohighlevel.com/favicon.ico', category: 'marketing', desc: 'Marketing Platform' },
    hubspot: { icon: 'https://www.hubspot.com/favicon.ico', category: 'marketing', desc: 'Marketing & Sales Platform' },
    manychat: { icon: 'https://manychat.com/favicon.ico', category: 'marketing', desc: 'Messenger Marketing' },
    
    // CRM Tools
    pipedrive: { icon: 'https://www.pipedrive.com/favicon.ico', category: 'crm', desc: 'Sales CRM' },
    zoho: { icon: 'https://www.zoho.com/favicon.ico', category: 'crm', desc: 'Business Suite' },
    
    // Communication
    twilio: { icon: 'https://www.twilio.com/favicon.ico', category: 'communication', desc: 'Communication API' },
    whatsapp: { icon: 'https://www.whatsapp.com/favicon.ico', category: 'communication', desc: 'WhatsApp Business API' },
    
    // Chatbots & AI
    dialogflow: { icon: 'https://dialogflow.cloud.google.com/favicon.ico', category: 'chatbots', desc: 'Chatbot Platform' },
    botpress: { icon: 'https://botpress.com/favicon.ico', category: 'chatbots', desc: 'Conversational AI' },
    rasa: { icon: 'https://rasa.com/favicon.ico', category: 'chatbots', desc: 'Open Source Chatbots' },

    // Productivity
    notion: { icon: 'https://www.notion.so/favicon.ico', category: 'productivity', desc: 'All-in-one Workspace' },
    
    // Programming Languages
    javascript: { icon: 'https://javascript.info/favicon.ico', category: 'languages', desc: 'Programming Language' },
    python: { icon: 'https://www.python.org/favicon.ico', category: 'languages', desc: 'Programming Language' },
    appScript: { icon: 'https://www.gstatic.com/script/apps_script_32.png', category: 'languages', desc: 'Google Apps Script' },
    
    // Frameworks & Libraries
    react: { icon: 'https://reactjs.org/favicon.ico', category: 'frameworks', desc: 'Frontend Framework' },
    nodejs: { icon: 'https://nodejs.org/favicon.ico', category: 'frameworks', desc: 'Runtime Environment' },
    express: { icon: 'https://expressjs.com/favicon.ico', category: 'frameworks', desc: 'Web Framework' },
    angular: { icon: 'https://angular.io/favicon.ico', category: 'frameworks', desc: 'Frontend Framework' }
  };

  const scroll = (direction) => {
    const container = categoriesRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1a] via-[#1a0b3b] to-[#2a1547] text-white relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay animate-grain" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16 relative z-10"
      >
        <div className="text-center space-y-6 mb-20">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-8xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text font-sans tracking-tight"
            style={{ textShadow: '0 0 80px rgba(192, 132, 252, 0.2)' }}
          >
            My Tech Stack
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-purple-200/80 font-light italic"
          >
            Apps I use to design, stay productive or have fun
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="relative mb-16">
          <motion.div 
            ref={categoriesRef}
            className="flex items-center gap-4 overflow-x-hidden scroll-smooth py-4 px-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-xl whitespace-nowrap transition-all duration-300 backdrop-blur-sm border-2 ${
                selectedCategory === 'all' 
                  ? 'bg-purple-500/30 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/20' 
                  : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:border-purple-500/50'
              }`}
            >
              All
            </motion.button>
            {Object.entries(categories).map(([key, label]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(key)}
                className={`px-8 py-3 rounded-xl whitespace-nowrap transition-all duration-300 backdrop-blur-sm border-2 ${
                  selectedCategory === key 
                    ? 'bg-purple-500/30 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/20' 
                    : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:border-purple-500/50'
                }`}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(tools)
              .filter(([_, details]) => selectedCategory === 'all' || details.category === selectedCategory)
              .map(([tool, details]) => (
                <motion.div
                  key={tool}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-purple-900/30 via-[#1a1a3a] to-[#2d1b4d] rounded-2xl p-8 shadow-lg border border-purple-500/30 transition-all duration-500 backdrop-blur-sm transform-gpu"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                      <motion.img 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        src={details.icon} 
                        alt={tool} 
                        className="w-14 h-14 object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
                        {tool.charAt(0).toUpperCase() + tool.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{details.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TechStackPage;