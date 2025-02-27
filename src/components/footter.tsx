import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Eyes: React.FC<{ mouseX: number; mouseY: number; focusOnEmail: boolean }> = ({ mouseX, mouseY, focusOnEmail }) => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveEye = (eye: HTMLDivElement) => {
      if (eye) {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(5, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 15);
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        eye.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    if (leftEyeRef.current && rightEyeRef.current) {
      moveEye(leftEyeRef.current);
      moveEye(rightEyeRef.current);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="flex gap-4 md:gap-6 justify-center items-center">
      <div className="w-14 h-14 md:w-20 md:h-20 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center shadow-lg">
        <div 
          ref={leftEyeRef}
          className={`${focusOnEmail ? 'w-8 h-8 md:w-12 md:h-12' : 'w-6 h-6 md:w-10 md:h-10'} rounded-full bg-white transition-all duration-300`}
        />
      </div>
      <div className="w-14 h-14 md:w-20 md:h-20 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center shadow-lg">
        <div 
          ref={rightEyeRef}
          className={`${focusOnEmail ? 'w-8 h-8 md:w-12 md:h-12' : 'w-6 h-6 md:w-10 md:h-10'} rounded-full bg-white transition-all duration-300`}
        />
      </div>
    </div>
  );
};

const ContactFooter = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isEmailHovered, setIsEmailHovered] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1200px] mx-auto min-h-[200px] bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A] text-[#FFFFFF] py-6 md:py-8 px-4 md:px-12 rounded-3xl shadow-2xl border border-[#A855F7]/30 backdrop-blur-xl mb-8 md:mb-16"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between h-full gap-8 md:gap-0">
        {/* Left Section: Contact Info and Social */}
        <div className="flex flex-col gap-6 md:gap-8 flex-grow">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Let's Connect!
            </h3>
            <motion.a 
              href="mailto:lehrasibroy@gmail.com" 
              className="text-2xl md:text-4xl font-medium text-[#FFFFFF] hover:text-[#A855F7] transition-colors duration-300 block break-all md:break-normal"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              lehrasibroy@gmail.com
            </motion.a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-8 md:gap-10">
            <motion.a
              href="https://linkedin.com/in/lehrasibroy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#A855F7' }}
              transition={{ duration: 0.3 }}
              className="text-[#D1D5DB] hover:text-[#A855F7] transition-colors duration-300"
            >
              <Linkedin size={24} className="md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="https://twitter.com/lehrasibroy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#A855F7' }}
              transition={{ duration: 0.3 }}
              className="text-[#D1D5DB] hover:text-[#A855F7] transition-colors duration-300"
            >
              <Twitter size={24} className="md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="https://github.com/lehrasibroy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#A855F7' }}
              transition={{ duration: 0.3 }}
              className="text-[#D1D5DB] hover:text-[#A855F7] transition-colors duration-300"
            >
              <Github size={24} className="md:w-7 md:h-7" />
            </motion.a>
          </div>
        </div>

        {/* Right Section: Eyes */}
        <div className="flex-shrink-0">
          <Eyes 
            mouseX={mousePosition.x} 
            mouseY={mousePosition.y} 
            focusOnEmail={isEmailHovered}
          />
        </div>
      </div>
    </motion.div>
  );
};

const BeIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    <path d="M12 6v6m0 0l-3-3m3 3l3-3" />
  </svg>
);

export default ContactFooter;