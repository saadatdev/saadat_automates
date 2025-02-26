import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Text, Html } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { motion } from 'framer-motion-3d';
import { ArrowRight, X } from 'lucide-react';

interface ProjectDetails {
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  skills: string[];
  image: string;
  color: string;
  rating?: string;
}

interface ProjectProps {
  project: ProjectDetails;
  index: number;
  progress: number;
  totalProjects: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index, progress, totalProjects }) => {
  const groupRef = useRef<Group>(null!);
  const meshRef = useRef<Mesh>(null!);
  const [showDetails, setShowDetails] = useState(false);
  
  // Calculate positions based on scroll progress
  const sectionSize = 1 / totalProjects;
  const targetProgress = (progress - (index * sectionSize)) / sectionSize;
  const visible = targetProgress > 0 && targetProgress < 1;
  
  useFrame((state) => {
    if (!groupRef.current) return;

    // Smoother horizontal movement with easing
    const x = -15 + (targetProgress * 30); // Reduced movement range for better visibility
    
    // Enhanced vertical staggering with wave effect
    const y = (index % 2 === 0 ? 3 : -3) + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.5) * 0.3;
    
    // Improved rotation and scale animations
    const rotationZ = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.03;
    const rotationY = targetProgress * Math.PI * 0.05;
    const scale = Math.min(1, Math.max(0.1, targetProgress * 1.5));
    
    // Enhanced parallax effect
    const mouseInfluence = 0.15;
    const mouseX = state.mouse.x * mouseInfluence;
    const mouseY = state.mouse.y * mouseInfluence;
    
    // Smoother transitions with lerping
    groupRef.current.position.x += (x + mouseX - groupRef.current.position.x) * 0.1;
    groupRef.current.position.y += (y + mouseY - groupRef.current.position.y) * 0.1;
    groupRef.current.position.z = -3 + (targetProgress * 6); // Brought cards closer to camera
    
    groupRef.current.rotation.z += (rotationZ - groupRef.current.rotation.z) * 0.1;
    groupRef.current.rotation.y += (rotationY - groupRef.current.rotation.y) * 0.1;
    groupRef.current.scale.setScalar(scale);
    
    // Dynamic tilt based on mouse position
    const tiltX = mouseY * 0.3;
    const tiltY = mouseX * 0.3;
    groupRef.current.rotation.x += (tiltX - groupRef.current.rotation.x) * 0.1;
    groupRef.current.rotation.y += (tiltY - groupRef.current.rotation.y) * 0.1;
  });

  return (
    <group ref={groupRef} visible={visible}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial 
          color={project.color}
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.95}
          emissive={project.color}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <Html
        position={[0, 0, 0.1]}
        center
        transform
        occlude
        style={{
          width: showDetails ? '450px' : '350px',
          transition: 'all 0.4s ease',
        }}
      >
        {!showDetails ? (
          <motion.div 
            className="bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 backdrop-blur-xl rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-500 border border-purple-500/30 cursor-pointer shadow-lg shadow-purple-500/20"
            onClick={() => setShowDetails(true)}
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <p className="text-white flex items-center gap-2">View Details <ArrowRight size={16} /></p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-purple-400">Duration:</span> {project.duration}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 3).map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.rating && (
                <p className="text-sm text-yellow-400">
                  Rating: {project.rating}
                </p>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90 backdrop-blur-xl rounded-xl p-8 text-white border border-purple-500/30 relative shadow-xl shadow-purple-500/20"
          >
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {project.title}
            </h2>
            
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-6 shadow-lg"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Overview</h3>
                <p className="text-gray-300">{project.longDescription || project.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p><span className="font-semibold text-purple-400">Duration:</span> {project.duration}</p>
                {project.rating && (
                  <p className="text-yellow-400 font-semibold">Rating: {project.rating}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </Html>
    </group>
  );
};

export const Projects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = React.useState(0);
  
  const projects: ProjectDetails[] = [
    {
      title: "GHL Setup & Automations",
      description: "End-to-end solution using GoHighLevel for streamlined client communication and marketing automation.",
      longDescription: "Designed and implemented an end-to-end solution using GoHighLevel (GHL) to automate and streamline client communication and marketing processes.",
      duration: "Ongoing",
      skills: ["GoHighLevel", "Zapier", "Google Sheets", "CRM Integration"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      color: "#1a1a1a"
    },
    {
      title: "Client Portal",
      description: "Custom portal solution combining Softr's frontend capabilities with Airtable's powerful database.",
      duration: "Ongoing",
      skills: ["Softr", "Airtable", "API Integrations", "Zapier"],
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&q=80",
      color: "#1a1a1a",
      longDescription: "Built a comprehensive client portal that seamlessly integrates Softr's intuitive frontend with Airtable's robust database capabilities, enabling efficient client data management and interaction."
    },
    {
      title: "Marketing Automation",
      description: "Comprehensive marketing automation solution for Tirzepatide with integrated platforms.",
      duration: "Apr 27, 2024 - Jan 14, 2025",
      rating: "5.0/5.0",
      skills: ["Mailchimp", "Klaviyo", "Google Sheets", "HubSpot"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      color: "#1a1a1a",
      longDescription: "Developed and implemented a sophisticated marketing automation system integrating multiple platforms to streamline campaign management and improve customer engagement."
    },
    {
      title: "Task Management System", 
      description: "Advanced task tracking system with Google Sheets integration and automated workflows.",
      duration: "Ongoing",
      skills: ["Google Sheets", "Apps Script", "API Integrations", "Zapier"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&q=80",
      color: "#1a1a1a",
      longDescription: "Created a comprehensive task management solution leveraging Google Sheets and custom scripts to automate workflow processes and improve team productivity."
    }
  ];

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setProgress(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <group position={[0, 0, -5]}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
          progress={progress}
          totalProjects={projects.length}
        />
      ))}
    </group>
  );
};