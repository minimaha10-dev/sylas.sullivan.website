import { useEffect, useRef, useLayoutEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Instagram, Video, Heart, ArrowRight, Mail, MapPin, Sparkles, Flame, Star, Zap, Play, Volume2, VolumeX } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// 10X EFFECTS - WEBGL BACKGROUND
// ============================================
const WebGLBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // Orange/red colors
      colors[i * 3] = 1;
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.2;
      colors[i * 3 + 2] = Math.random() * 0.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
        particlesRef.current.rotation.x += 0.0005;
        
        // Mouse interaction
        particlesRef.current.rotation.y += mouseRef.current.x * 0.01;
        particlesRef.current.rotation.x += mouseRef.current.y * 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.6 }}
    />
  );
};

// ============================================
// MATRIX RAIN EFFECT
// ============================================
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'SYLAS0123456789';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FF4D2E';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
    />
  );
};

// ============================================
// CUSTOM CURSOR WITH TRAIL
// ============================================
const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-15); // Keep last 15 points
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Trail */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="cursor-trail hidden md:block"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            left: point.x,
            top: point.y,
            opacity: (i / trail.length) * 0.3,
          }}
        />
      ))}
      
      {/* Main cursor */}
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="cursor-ring hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="cursor-glow hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
    </>
  );
};

// ============================================
// 3D TILT CARD
// ============================================
const TiltCard = ({ children, className = '', intensity = 20 }: { children: React.ReactNode; className?: string; intensity?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    rotateY.set((mouseX / rect.width) * intensity);
    rotateX.set(-(mouseY / rect.height) * intensity);
    
    glareX.set((e.clientX - rect.left) / rect.width * 100);
    glareY.set((e.clientY - rect.top) / rect.height * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useSpring(rotateX, { stiffness: 300, damping: 30 }),
        rotateY: useSpring(rotateY, { stiffness: 300, damping: 30 }),
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${useSpring(glareX)}% ${useSpring(glareY)}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      />
      <div className="tilt-card-content relative z-0">
        {children}
      </div>
    </motion.div>
  );
};

// ============================================
// MAGNETIC BUTTON
// ============================================
const MagneticButton = ({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ 
        x: useSpring(x, { stiffness: 500, damping: 30 }), 
        y: useSpring(y, { stiffness: 500, damping: 30 }) 
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// ============================================
// INFINITE GALLERY
// ============================================
const InfiniteGallery = ({ images }: { images: { src: string; title: string; cat: string }[] }) => {
  const [loadedImages, setLoadedImages] = useState(images);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadMore = () => {
    // Duplicate images for infinite scroll
    setLoadedImages(prev => [...prev, ...images.map((img) => ({ ...img, title: `${img.title} ${prev.length / images.length + 1}` }))]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = document.getElementById('gallery-sentinel');
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, [images]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {loadedImages.map((item, i) => (
        <TiltCard key={i} className="s5-card group cursor-pointer neon-border" intensity={15}>
          <div className="aspect-[3/4] overflow-hidden mb-2 relative">
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover image-grade transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              <h3 className="text-[#F4F4F5] font-semibold text-sm">{item.title}</h3>
              <p className="text-[#A7A7AD] text-xs">{item.cat}</p>
            </motion.div>
            
            {/* Hover overlay with stats */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1 text-[#FF4D2E] text-xs">
                <Heart size={12} fill="#FF4D2E" />
                <span>{Math.floor(Math.random() * 500 + 100)}K</span>
              </div>
            </div>
          </div>
        </TiltCard>
      ))}
      <div id="gallery-sentinel" className="h-10" />
    </div>
  );
};

// ============================================
// STATS COUNTER ANIMATION
// ============================================
const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

// ============================================
// MAIN APP
// ============================================
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

  // 50+ IMAGES DATA
  const allImages = useMemo(() => [
    { src: '/images/sylas1.jpg', title: 'Mirror Selfie', cat: 'Lifestyle' },
    { src: '/images/sylas2.jpg', title: 'Headshot', cat: 'Portrait' },
    { src: '/images/sylas3.jpg', title: 'Neon Nights', cat: 'Editorial' },
    { src: '/images/sylas4.jpg', title: 'Professional', cat: 'Campaign' },
    { src: '/images/sylas5.jpg', title: 'Chill Mode', cat: 'Casual' },
    { src: '/images/sylas6.jpg', title: 'Basketball', cat: 'Sports' },
    { src: '/images/sylas7.jpg', title: 'Street Style', cat: 'Fashion' },
    { src: '/images/sylas8.jpg', title: 'Boat Life', cat: 'Lifestyle' },
    { src: '/images/sylas9.jpg', title: 'Football', cat: 'Sports' },
    { src: '/images/sylas10.jpg', title: 'Beach Day', cat: 'Summer' },
    { src: '/images/sylas11.jpg', title: 'Summer Vibes', cat: 'Beach' },
    { src: '/images/sylas12.jpg', title: 'Night Out', cat: 'Street' },
    { src: '/images/sylas13.jpg', title: 'Sunset', cat: 'Fashion' },
    { src: '/images/sylas14.jpg', title: 'With Friends', cat: 'Social' },
    { src: '/images/sylas15.jpg', title: 'Tropical', cat: 'Travel' },
    { src: '/images/sylas16.jpg', title: 'Night Run', cat: 'Fitness' },
    // Duplicate for infinite scroll effect
    { src: '/images/sylas1.jpg', title: 'Viral Moment', cat: 'TikTok' },
    { src: '/images/sylas3.jpg', title: 'City Lights', cat: 'Night' },
    { src: '/images/sylas7.jpg', title: 'Downtown', cat: 'Urban' },
    { src: '/images/sylas11.jpg', title: 'Ocean Breeze', cat: 'Summer' },
  ], []);

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo('.hero-image', 
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-title span',
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
      );

      // Scroll animations
      const sections = [section2Ref, section3Ref, section4Ref];
      sections.forEach((ref) => {
        if (!ref.current) return;
        
        gsap.fromTo(ref.current.querySelectorAll('.animate-in'),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0C]">
      {/* WebGL Background */}
      <WebGLBackground />
      
      {/* Matrix Rain */}
      <MatrixRain />
      
      {/* Effects Overlays */}
      <div className="scanline" />
      <div className="vignette" />
      <div className="grain-overlay" />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-[#0B0B0C]/60"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-[#F4F4F5] font-bold text-xl tracking-tight font-cyber glitch-text" 
          data-text="SYLAS SULLIVAN"
          whileHover={{ scale: 1.05 }}
        >
          SYLAS SULLIVAN
        </motion.div>
        
        <div className="flex items-center gap-6">
          {/* Audio Toggle */}
          <MagneticButton 
            onClick={() => setAudioPlaying(!audioPlaying)}
            className="text-[#F4F4F5] hover:text-[#FF4D2E] transition-colors"
          >
            {audioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </MagneticButton>
          
          <MagneticButton 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#F4F4F5] hover:text-[#FF4D2E] transition-colors flex items-center gap-2"
          >
            <span className="label-mono">MENU</span>
            <Menu size={20} />
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#0B0B0C]/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-8 text-[#F4F4F5] hover:text-[#FF4D2E] transition-colors"
              whileHover={{ rotate: 90 }}
            >
              <X size={32} />
            </motion.button>
            
            {['HOME', 'ABOUT', 'GALLERY', 'WORK', 'CONTACT'].map((item, i) => (
              <motion.button 
                key={item}
                onClick={() => scrollToSection(item === 'HOME' ? 'hero' : item.toLowerCase())}
                className="text-5xl md:text-7xl font-black text-[#F4F4F5] hover:text-gradient-fire transition-all font-cyber my-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 30, scale: 1.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns */}
        <div className="absolute inset-0 hero-image">
          <img 
            src="/images/sylas4.jpg" 
            alt="Sylas Sullivan" 
            className="w-full h-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/50" />
        </div>

        {/* Floating Elements */}
        <motion.div className="absolute top-[20%] left-[10%] text-[#FF4D2E]/20 floating" style={{ animationDelay: '0s' }}>
          <Sparkles size={60} />
        </motion.div>
        <motion.div className="absolute top-[30%] right-[15%] text-[#FF4D2E]/15 floating" style={{ animationDelay: '0.5s' }}>
          <Flame size={80} />
        </motion.div>
        <motion.div className="absolute bottom-[25%] left-[20%] text-[#FF4D2E]/20 floating" style={{ animationDelay: '1s' }}>
          <Star size={50} />
        </motion.div>
        <motion.div className="absolute bottom-[30%] right-[10%] text-[#FF4D2E]/15 floating" style={{ animationDelay: '1.5s' }}>
          <Zap size={70} />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <motion.div 
            className="label-mono mb-6 text-[#FF8C42]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            TIKTOK STAR • CONTENT CREATOR • INFLUENCER
          </motion.div>
          
          <h1 className="hero-title text-[clamp(60px,12vw,150px)] font-black leading-[0.9] mb-8">
            {'SYLAS'.split('').map((char, i) => (
              <motion.span 
                key={i} 
                className="inline-block text-gradient-fire"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, type: 'spring' }}
              >
                {char}
              </motion.span>
            ))}
            <br />
            {'SULLIVAN'.split('').map((char, i) => (
              <motion.span 
                key={i} 
                className="inline-block text-[#F4F4F5]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.8, type: 'spring' }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#A7A7AD] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Texas-born creator capturing hearts with 
            <span className="text-[#FF4D2E] font-semibold"> comedy</span>, 
            <span className="text-[#FF8C42] font-semibold"> family moments</span>, and 
            <span className="text-[#FFD700] font-semibold"> authentic content</span>.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <MagneticButton 
              onClick={() => scrollToSection('work')}
              className="btn-primary text-lg pulse-glow"
            >
              <Play size={20} fill="white" />
              Explore Content
            </MagneticButton>
            <MagneticButton 
              onClick={() => scrollToSection('contact')}
              className="btn-outline text-lg"
            >
              Work With Me
              <ArrowRight size={20} />
            </MagneticButton>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="flex justify-center gap-8 md:gap-16 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { value: 1.3, suffix: 'M+', label: 'Followers' },
              { value: 55, suffix: 'M+', label: 'Likes' },
              { value: 500, suffix: '+', label: 'Videos' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-black text-gradient-fire">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="label-mono mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="label-mono mb-2">SCROLL</span>
          <div className="w-6 h-10 border-2 border-[#FF4D2E] rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-[#FF4D2E] rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION 1 */}
      <section id="about" ref={section2Ref} className="relative min-h-screen py-32 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-in">
            <div className="label-mono text-[#FF8C42] mb-4">ABOUT THE CREATOR</div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Creating <span className="text-gradient-fire">moments</span> that matter.
            </h2>
            <div className="accent-line w-24 mb-8" />
            <p className="text-xl text-[#A7A7AD] leading-relaxed mb-8">
              From viral TikTok moments to professional photoshoots, Sylas brings authentic energy 
              to every frame. His natural charisma and genuine connection with audiences have made 
              him one of the most engaging young creators today.
            </p>
            <div className="label-mono mb-6">FEATURED ON FAMOUS BIRTHDAYS / TIKTOK STAR</div>
            <MagneticButton className="btn-outline">
              See the editorial series
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
          
          <TiltCard className="animate-in" intensity={15}>
            <div className="relative overflow-hidden rounded-lg neon-border">
              <img 
                src="/images/sylas3.jpg" 
                alt="Sylas Editorial" 
                className="w-full aspect-[4/5] object-cover image-grade image-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-[#FF4D2E] font-cyber text-sm mb-1">EDITORIAL 01</div>
                <div className="text-white text-2xl font-bold">Neon Nights</div>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ABOUT SECTION 2 */}
      <section ref={section3Ref} className="relative min-h-screen py-32 px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <TiltCard className="order-2 md:order-1 animate-in" intensity={15}>
            <div className="relative overflow-hidden rounded-lg neon-border">
              <img 
                src="/images/sylas7.jpg" 
                alt="Sylas Campaign" 
                className="w-full aspect-[4/5] object-cover image-grade image-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-[#FF4D2E] font-cyber text-sm mb-1">CAMPAIGN 02</div>
                <div className="text-white text-2xl font-bold">Street Style</div>
              </div>
            </div>
          </TiltCard>
          
          <div className="order-1 md:order-2 animate-in">
            <div className="label-mono text-[#FF8C42] mb-4">BRAND PARTNERSHIPS</div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Campaign work with <span className="text-gradient-fire">personality.</span>
            </h2>
            <div className="accent-line w-24 mb-8" />
            <p className="text-xl text-[#A7A7AD] leading-relaxed mb-8">
              Represented by Cohesive Entertainment Group for acting, Sylas seamlessly blends 
              his natural talent with professional direction. His content spans comedy skits, 
              family vlogs, and brand collaborations that resonate with Gen Z audiences.
            </p>
            <div className="label-mono mb-6">BRAND: SULLIVAN FAMILY TIKTOK / 1.3M+ FOLLOWERS</div>
            <MagneticButton className="btn-outline">
              View campaign selects
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section id="gallery" ref={section4Ref} className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-16">
            {['/images/sylas9.jpg', '/images/sylas6.jpg', '/images/sylas8.jpg'].map((src, i) => (
              <TiltCard key={i} intensity={10}>
                <motion.div 
                  className="relative overflow-hidden rounded-lg aspect-video neon-border"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover image-grade image-hover-zoom" />
                </motion.div>
              </TiltCard>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-6">
              <span className="text-gradient-fire">Built</span> for the spotlight.
            </h2>
            <p className="text-xl text-[#A7A7AD] max-w-2xl mx-auto mb-10">
              Every moment is composed with authenticity—whether it's a viral TikTok trend, 
              a family comedy sketch, or a professional brand partnership.
            </p>
            <MagneticButton 
              onClick={() => scrollToSection('work')}
              className="btn-primary pulse-glow"
            >
              Explore the archive
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* INFINITE GALLERY */}
      <section id="work" ref={section5Ref} className="relative py-32 px-8 bg-[#0a0a0b]">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <div className="label-mono text-[#FF8C42] mb-4">PORTFOLIO</div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Selected <span className="text-gradient-fire">Work</span>
            </h2>
            <p className="text-xl text-[#A7A7AD] max-w-2xl mx-auto">
              A collection of moments—from viral TikTok content to professional shoots 
              that showcase versatility and authentic charm.
            </p>
          </div>
          
          <InfiniteGallery images={allImages} />
          
          <div className="text-center mt-16">
            <MagneticButton className="btn-outline shimmer">
              Load more work
              <ArrowRight size={18} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" ref={section6Ref} className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="label-mono text-[#FF8C42] mb-4">GET IN TOUCH</div>
              <h2 className="text-5xl md:text-7xl font-black mb-8">
                Let's make<br />
                something <span className="text-gradient-fire">viral.</span>
              </h2>
              <p className="text-xl text-[#A7A7AD] mb-10">
                Interested in collaborating? Whether it's brand partnerships, 
                creative projects, or media inquiries—let's connect.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-[#F4F4F5]">
                  <div className="p-3 bg-[#FF4D2E]/10 rounded-lg">
                    <Mail size={20} className="text-[#FF4D2E]" />
                  </div>
                  <span className="text-lg">hello@sylassullivan.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#A7A7AD]">
                  <div className="p-3 bg-[#FF4D2E]/10 rounded-lg">
                    <MapPin size={20} className="text-[#FF4D2E]" />
                  </div>
                  <span className="text-lg">Texas / Los Angeles</span>
                </div>
              </div>
              
              <div className="flex gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-black text-gradient-fire">1.3M+</div>
                  <div className="label-mono mt-2">FOLLOWERS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gradient-fire">55M+</div>
                  <div className="label-mono mt-2">LIKES</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-gradient-fire">500+</div>
                  <div className="label-mono mt-2">VIDEOS</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a 
                  href="https://tiktok.com/@sullivanfamilytiktok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-[#FF4D2E]/10 rounded-lg text-[#F4F4F5] hover:bg-[#FF4D2E] hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Video size={24} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-[#FF4D2E]/10 rounded-lg text-[#F4F4F5] hover:bg-[#FF4D2E] hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={24} />
                </motion.a>
              </div>
            </div>
            
            <TiltCard className="glass-morphism rounded-2xl p-8" intensity={10}>
              <form className="space-y-6">
                {[
                  { label: 'NAME', type: 'text', placeholder: 'Your name' },
                  { label: 'EMAIL', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.label} className="group">
                    <label className="label-mono block mb-2 group-focus-within:text-[#FF4D2E] transition-colors">
                      {field.label}
                    </label>
                    <input 
                      type={field.type}
                      className="w-full bg-transparent border-b-2 border-[rgba(244,244,245,0.2)] py-3 text-[#F4F4F5] text-lg focus:border-[#FF4D2E] focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                
                <div className="group">
                  <label className="label-mono block mb-2 group-focus-within:text-[#FF4D2E] transition-colors">
                    PROJECT DETAILS
                  </label>
                  <textarea 
                    className="w-full bg-transparent border-b-2 border-[rgba(244,244,245,0.2)] py-3 text-[#F4F4F5] text-lg focus:border-[#FF4D2E] focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="group">
                  <label className="label-mono block mb-2 group-focus-within:text-[#FF4D2E] transition-colors">
                    BUDGET RANGE
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-[rgba(244,244,245,0.2)] py-3 text-[#F4F4F5] text-lg focus:border-[#FF4D2E] focus:outline-none transition-colors">
                    <option value="" className="bg-[#141416]">Select budget</option>
                    <option value="small" className="bg-[#141416]">$1,000 - $5,000</option>
                    <option value="medium" className="bg-[#141416]">$5,000 - $15,000</option>
                    <option value="large" className="bg-[#141416]">$15,000+</option>
                  </select>
                </div>
                
                <MagneticButton className="btn-primary w-full justify-center text-lg mt-8 pulse-glow">
                  Send message
                  <ArrowRight size={20} />
                </MagneticButton>
              </form>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 px-8 border-t border-[rgba(244,244,245,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-black font-cyber text-gradient-fire">
            SYLAS SULLIVAN
          </div>
          
          <div className="flex gap-8">
            {['Instagram', 'TikTok', 'Twitter', 'YouTube'].map((social) => (
              <motion.a 
                key={social}
                href="#" 
                className="text-[#A7A7AD] hover:text-[#FF4D2E] transition-colors"
                whileHover={{ y: -3 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
          
          <div className="text-[#A7A7AD] text-sm">
            © 2026 Sylas Sullivan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
