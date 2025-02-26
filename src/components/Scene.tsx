import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { Projects } from './Projects';

export const Scene = () => {
  return (
    <div className="h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars 
              radius={50} 
              depth={50} 
              count={5000} 
              factor={4} 
              fade 
              speed={1}
            />
            <Projects />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};