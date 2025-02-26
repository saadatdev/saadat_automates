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
    <div className="flex gap-4 justify-center items-center">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
        <div 
          ref={leftEyeRef}
          className="w-8 h-8 rounded-full bg-purple-600"
        />
      </div>
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
        <div 
          ref={rightEyeRef}
          className="w-8 h-8 rounded-full bg-purple-600"
        />
      </div>
    </div>
  );
};

const TechCard: React.FC<{ title: string; description: string; position: string }> = ({ title, position }) => {
  const positionStyles = {
    'left-top': 'left-0 top-[10%]',
    'left-middle': 'left-0 top-[35%]',
    'left-bottom': 'left-0 top-[60%]',
    'right-top': 'right-10 top-[10%]',
    'right-middle': 'right-10 top-[35%]',
    'right-bottom': 'right-10 top-[60%]',
    'center-top': 'left-1/3 -translate-x-1/2 top-[10%]',
    'center-bottom': 'left-1/3 -translate-x-1/2 top-[60%]'
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, x: position.includes('left') ? -50 : position.includes('right') ? 50 : 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute ${positionStyles} w-80 cursor-pointer`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20">
        <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
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
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tech Stack
          </h2> */}
          <h1 className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          I turn chaos into clickable beauty, delivering designs that not only look great but also drive results.
          </h1>
        </motion.div>

        <div className="relative h-[700px]">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Eyes mouseX={mousePosition.x} mouseY={mousePosition.y} />
          </div>
          
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
  );
};