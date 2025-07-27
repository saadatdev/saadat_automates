import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EyesProps {
  mouseX: number;
  mouseY: number;
}

const Eyes: React.FC<EyesProps> = ({ mouseX, mouseY }) => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveEye = (eye: HTMLDivElement) => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
      const distance = Math.min(5, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 15);
      
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      eye.style.transform = `translate(${x}px, ${y}px)`;
    };

    if (leftEyeRef.current && rightEyeRef.current) {
      moveEye(leftEyeRef.current);
      moveEye(rightEyeRef.current);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="hidden md:flex gap-2 md:gap-4 justify-center items-center">
      <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
        <div 
          ref={leftEyeRef}
          className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-cyan-600"
        />
      </div>
      <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
        <div 
          ref={rightEyeRef}
          className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-cyan-600"
        />
      </div>
    </div>
  );
};

const TechCard: React.FC<{ title: string; description: string; position: string }> = ({ title, position }) => {
  const desktopPositionStyles = {
    'left-top': 'md:left-0 md:top-[10%]',
    'left-middle': 'md:left-0 md:top-[35%]',
    'left-bottom': 'md:left-0 md:top-[60%]',
    'right-top': 'md:right-10 md:top-[10%]',
    'right-middle': 'md:right-10 md:top-[35%]',
    'right-bottom': 'md:right-10 md:top-[60%]',
    'center-top': 'md:left-1/3 md:-translate-x-1/2 md:top-[10%]',
    'center-bottom': 'md:left-1/3 md:-translate-x-1/2 md:top-[60%]'
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, x: position.includes('left') ? -50 : position.includes('right') ? 50 : 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative md:absolute ${desktopPositionStyles} w-full md:w-80 cursor-pointer mb-4 md:mb-0`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-slate-800/50 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-cyan-500/20 hover:bg-cyan-900/50 transition-all duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    {
      title: "Marketing Automations",
      description: "",
      position: "left-top"
    },
    {
      title: "GoHighLevel",
      description: "", 
      position: "center-top"
    },
    {
      title: "AI Agents Development",
      description: "",
      position: "right-top"
    },
    {
      title: "AI Integration",
      description: "",
      position: "left-middle"
    },
    {
      title: "CRM Development",
      description: "",
      position: "center-bottom"
    },
    {
      title: "Zapier|Make|N8N",
      description: "",
      position: "right-middle"
    },
    {
      title: "Notion|Clickup",
      description: "",
      position: "left-bottom"
    },
    {
      title: "Google Workspace",
      description: "",
      position: "right-bottom"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/30 via-slate-900 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 px-4">
          I turn complex processes into seamless automation, integrating AI to make workflows smarter and more efficient. By eliminating manual tasks and optimizing systems, I help businesses save time, reduce effort, and scale effortlessly.
          </h1>
        </motion.div>

        <div className="relative min-h-[500px] md:h-[700px]">
          <div className="absolute top-[20%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 mb-8 md:mb-0">
            <Eyes mouseX={mousePosition.x} mouseY={mousePosition.y} />
          </div>
          
          <div className="mt-24 md:mt-0 flex flex-col md:block">
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                title={tech.title}
                description={tech.description}
                position={tech.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};