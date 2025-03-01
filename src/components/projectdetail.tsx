import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './projectsData'; // Import from centralized file

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id || '', 10));

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-[#0A0118] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-fuchsia-900/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-12 relative z-10"
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/portfolio')}
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-purple-900/30 to-[#2d1b4d] border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-purple-500/20"
        >
          <ChevronLeft className="w-5 h-5 text-purple-300" />
          <span className="text-purple-300 font-medium">Back</span>
        </motion.button>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text mt-16"
        >
          {project.title}
        </motion.h1>

        <div className="flex gap-4 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>

        {project.loomVideoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/30">
              <iframe
                src={project.loomVideoUrl}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {project.image && (
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6 shadow-xl shadow-purple-500/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900/30 rounded-full text-purple-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.useCases && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {project.outcomes && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Outcomes & Results</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;