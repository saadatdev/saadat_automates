import React, { useState } from 'react';
import { Calendar, Briefcase, Award, Code, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    title: 'Freelancing',
    company: 'Upwork',
    period: '2023 - Present',
    description: "Working as a top-rated freelancer specializing in business automation and integration solutions. Achieved 98% job success rate with over $10K in earnings across 20+ completed projects.",
    icon: Award,
    skills: ['Make.com', 'Zapier', 'Google Apps Script', 'API Integration', 'Automation'],
    details: [
      "Completed 20+ successful projects with high client satisfaction",
      "Maintained 98% job success rate consistently", 
      "Accumulated over 45 hours of work",
      "Specialized in business process automation and integration",
      "Developed custom solutions for various industries"
    ],
    link: "https://www.upwork.com/freelancers/~01c0f679674f1403e0"
  },
  {
    title: 'Software Developer',
    company: 'Codeball',
    period: 'February 2022 - May 2023',
    description: "Working on developing and automating business solutions for clients, focusing on integrating various platforms and creating scalable systems.",
    icon: Briefcase,
    skills: ['Javascript', 'Node js', 'React', 'API Integration', 'Chrome extension'],
    details: [
      "Led development of automation solutions for multiple clients",
      "Integrated various platforms using APIs and webhooks",
      "Implemented scalable tools and software for business",
      "Mentored team members on software development best practices"
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'Zeitic',
    period: 'April 2021 - February 2022',
    description: "Developed and maintained software applications, focusing on creating robust and automated business solutions.",
    icon: Code,
    skills: ['Website Development', 'API Integration', 'CRM Systems', 'Cloud Platforms'],
    details: [
      "Developed custom websites for clients",
      "Integrated multiple CRM systems",
      "Created cloud-based solutions",
    ]
  }
];

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-cyan-500/20"
          variants={modalVariants}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-cyan-900/30 transition-colors text-cyan-400"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-700/50 to-cyan-600/50 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{item.title}</h3>
              <p className="text-gray-400">{item.company}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <Calendar size={16} className="text-cyan-400" />
            <span>{item.period}</span>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {item.description}
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Key Responsibilities & Achievements</h4>
            <ul className="space-y-3">
              {item.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5" />
                  <span className="text-gray-300">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-cyan-600/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TimelineCard({ item, onSelect, isLeft }) {
  const Icon = item.icon;
  
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400" />
      <div className="p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-700/50 to-cyan-600/50 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{item.title}</h3>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
            <p className="text-gray-400 font-medium">{item.company}</p>
            <div className="flex items-center gap-2 text-gray-500 mt-2 mb-4">
              <Calendar size={16} className="text-cyan-400" />
              <span className="text-gray-400">{item.period}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-cyan-600/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => onSelect(item)}
              className="mt-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              View Details
              <motion.span
                whileHover={{ y: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                ↓
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Timeline() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative min-h-screen py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
          >
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore my professional path, where each role has contributed to my growth as a developer and automation specialist.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-cyan-400 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineCard
                  item={experience}
                  onSelect={setSelectedItem}
                  isLeft={index % 2 === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
}

export default Timeline;
