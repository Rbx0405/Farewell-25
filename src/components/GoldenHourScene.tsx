
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sunRef.current) {
      sunRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 2, -10]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="#FFA500" emissive="#FF8C00" emissiveIntensity={2} />
    </mesh>
  );
}

function FloatingParticles({ count = 100 }) {
  const particlesRef = useRef<THREE.Group>(null);
  const particles = useRef<{ position: THREE.Vector3; speed: number; }[]>([]);
  
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ),
      speed: Math.random() * 0.02 + 0.01
    }));
  }, [count]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const data = particles.current[i];
        if (data) {
          particle.position.y = data.position.y + Math.sin(elapsedTime * data.speed) * 2;
          particle.position.x = data.position.x + Math.sin(elapsedTime * data.speed * 0.5) * 0.5;
        }
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={particles.current[i]?.position || [0, 0, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#FFCB8E" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Mountains() {
  return (
    <mesh position={[0, -3, -5]} rotation={[-Math.PI / 8, 0, 0]}>
      <planeGeometry args={[30, 10, 32, 32]} />
      <meshStandardMaterial color="#373B44" wireframe />
    </mesh>
  );
}

const GoldenHourScene = () => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded after a small delay to ensure smooth appearance
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`canvas-container ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <fog attach="fog" args={['#FEC6A1', 8, 30]} />
        
        <Sun />
        <FloatingParticles count={isMobile ? 30 : 100} />
        <Mountains />
        
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default GoldenHourScene;
