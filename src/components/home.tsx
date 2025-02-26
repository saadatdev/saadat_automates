import React, { useEffect, useState } from 'react';
import { Hero } from './Hero';
import { Scene } from './Scene';
import { TechStack } from './tech';
import Timeline from './Timeline';
import ContactFooter from './footter';
import { PortfolioSection } from './ev';
import { motion, useScroll } from 'framer-motion';

function Home() {
  const { scrollYProgress } = useScroll();


 

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <TechStack/>
      {/* <Scene /> */}
      <PortfolioSection/>
      <Timeline/>
      <ContactFooter/>
      
      
      
    </div>
  );
}

export default Home;