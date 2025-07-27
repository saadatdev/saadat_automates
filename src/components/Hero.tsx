import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";

function BackgroundScene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 65 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <hemisphereLight intensity={0.9} groundColor="#000000" />
        
        {/* Background elements */}
        <mesh position={[0, 0, -20]} scale={20}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.8}
            roughness={0.5}
          />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

// Stat card with animated counter
const StatCard = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < value) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 60);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [value, delay]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 md:p-6 rounded-xl border border-cyan-500/20 backdrop-blur-md"
    >
      <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        {count}+
      </h3>
      <p className="text-sm md:text-base text-gray-400 font-medium mt-2">{label}</p>
    </motion.div>
  );
};

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const navigate = useNavigate();

  const scrollToTechStack = () => {
    const techStackElement = document.getElementById('tech-stack');
    if (techStackElement) {
      techStackElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  return (
    <motion.div 
      style={{ y, opacity }}
      className="h-screen w-full relative text-white overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent z-0" />
      
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <BackgroundScene />
      </div>
      
      {/* Main content */}
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto h-full flex flex-col md:flex-row items-center">
          
          {/* Left side content */}
          <div className="w-full md:w-6/12 pt-20 md:pt-0 px-4 md:px-8">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6"
            >
              <span className="block">Hey, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Saadat Baig
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Transforming businesses through intelligent automation and AI integration
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-cyan-300 mb-8 md:mb-10">
                <span className="text-base md:text-lg font-medium">★ 95% Job Success</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span className="text-base md:text-lg font-medium">$40K+ Earnings</span>
              </div>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-3 md:gap-4 mb-8 md:mb-12"
            >
              <motion.a
                href="https://www.upwork.com/freelancers/~01c0f679674f1403e0?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 font-medium text-white text-sm md:text-base"
              >
                Hire Me
              </motion.a>
              <motion.button
                onClick={handlePortfolioClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg border border-cyan-500/50 font-medium text-cyan-300 hover:bg-cyan-800/20 transition-colors duration-300 text-sm md:text-base"
              >
                View Portfolio
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-10">
              <StatCard value={46} label="Projects" delay={1.0} />
              <StatCard value={128} label="Hours" delay={1.2} />
              <StatCard value={3} label="Years Exp" delay={1.4} />
            </div>
          </div>
          
          {/* Right side 3D model space - Hidden on mobile */}
          <div className="hidden md:block w-full md:w-7/12 h-full relative right-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="w-full h-full absolute right-0"
            >
              <div className="absolute inset-0 scale-125 translate-x-16">
                <Spline scene="https://prod.spline.design/uzDlziyJujOkuAYo/scene.splinecode" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-32 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 z-20"
      >
        <p className="text-xs md:text-sm mb-2 text-center">Scroll to explore</p>
        <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6 mx-auto" />
      </motion.div>
    </motion.div>
  );
};