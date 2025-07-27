
import { Hero } from './Hero';
import { TechStack } from './tech';
import Timeline from './Timeline';
import ContactFooter from './footter';
import ProjectsShowcase from './coursel';
import { PortfolioSection } from './ev';
import { motion, useScroll } from 'framer-motion';

function Home() {
  const { scrollYProgress } = useScroll();


 

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <TechStack/>
      <PortfolioSection/>
      <Timeline/>
      {/* <ProjectsShowcase /> */}
      <ContactFooter/>

      
      
      
    </div>
  );
}

export default Home;