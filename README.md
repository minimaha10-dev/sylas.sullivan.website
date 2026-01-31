
---

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sylas Sullivan - TikTok Star</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&family=IBM+Plex+Mono:wght@400;500&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <style>
        /* CSS will go here */
    </style>
</head>
<body>
    <!-- WebGL Canvas -->
    <div id="webgl-container"></div>
    
    <!-- Matrix Rain Canvas -->
    <canvas id="matrix-canvas"></canvas>
    
    <!-- Overlays -->
    <div class="scanline"></div>
    <div class="vignette"></div>
    <div class="grain-overlay"></div>
    
    <!-- Custom Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
    <div class="cursor-glow"></div>
    
    <!-- Navigation -->
    <nav class="navbar">
        <div class="logo glitch-text" data-text="SYLAS SULLIVAN">SYLAS SULLIVAN</div>
        <div class="nav-right">
            <button id="audio-toggle" class="nav-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93L17.66 6.34A7.98 7.98 0 0120 12a7.98 7.98 0 01-2.34 5.66l1.41 1.41A9.97 9.97 0 0022 12a9.97 9.97 0 00-2.93-7.07z"></path>
                </svg>
            </button>
            <button id="menu-toggle" class="nav-btn">
                <span class="label-mono">MENU</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
    
    <!-- Full Screen Menu -->
    <div id="fullscreen-menu" class="fullscreen-menu hidden">
        <button id="menu-close" class="menu-close">
            <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <a href="#hero" class="menu-link">HOME</a>
        <a href="#about" class="menu-link">ABOUT</a>
        <a href="#gallery" class="menu-link">GALLERY</a>
        <a href="#work" class="menu-link">WORK</a>
        <a href="#contact" class="menu-link">CONTACT</a>
    </div>
    
    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="hero-bg">
            <img src="images/sylas4.jpg" alt="Sylas Sullivan" class="ken-burns">
            <div class="hero-overlay"></div>
        </div>
        
        <!-- Floating Icons -->
        <div class="floating-icon" style="top:20%;left:10%;animation-delay:0s">
            <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
        </div>
        <div class="floating-icon" style="top:30%;right:15%;animation-delay:0.5s">
            <svg width="80" height="80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2 .9-2 2 0 .5.2 1 .5 1.3C7.6 6.1 5 9.2 5 13c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.8-2.6-6.9-5.5-7.7.3-.3.5-.8.5-1.3 0-1.1-.9-2-2-2zm0 16c-2.8 0-5-2.2-5-5 0-2.3 1.5-4.2 3.6-4.9l1.4 2.4 1.4-2.4c2.1.7 3.6 2.6 3.6 4.9 0 2.8-2.2 5-5 5z"></path></svg>
        </div>
        
        <div class="hero-content">
            <div class="label-mono hero-label">TIKTOK STAR • CONTENT CREATOR • INFLUENCER</div>
            <h1 class="hero-title">
                <span class="fire-text">SYLAS</span><br>
                <span class="white-text">SULLIVAN</span>
            </h1>
            <p class="hero-subtitle">
                Texas-born creator capturing hearts with 
                <span class="highlight-orange">comedy</span>, 
                <span class="highlight-gold">family moments</span>, and 
                <span class="highlight-yellow">authentic content</span>.
            </p>
            <div class="hero-buttons">
                <a href="#work" class="btn-primary pulse-glow">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                    Explore Content
                </a>
                <a href="#contact" class="btn-outline">
                    Work With Me
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </a>
            </div>
            
            <!-- Stats -->
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-value fire-text counter" data-target="1.3">0</div>
                    <div class="stat-suffix">M+</div>
                    <div class="label-mono">FOLLOWERS</div>
                </div>
                <div class="stat">
                    <div class="stat-value fire-text counter" data-target="55">0</div>
                    <div class="stat-suffix">M+</div>
                    <div class="label-mono">LIKES</div>
                </div>
                <div class="stat">
                    <div class="stat-value fire-text counter" data-target="500">0</div>
                    <div class="stat-suffix">+</div>
                    <div class="label-mono">VIDEOS</div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <span class="label-mono">SCROLL</span>
            <div class="scroll-mouse">
                <div class="scroll-wheel"></div>
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <div class="label-mono text-orange">ABOUT THE CREATOR</div>
                    <h2>Creating <span class="fire-text">moments</span> that matter.</h2>
                    <div class="accent-line"></div>
                    <p>From viral TikTok moments to professional photoshoots, Sylas brings authentic energy to every frame. His natural charisma and genuine connection with audiences have made him one of the most engaging young creators today.</p>
                    <div class="label-mono">FEATURED ON FAMOUS BIRTHDAYS / TIKTOK STAR</div>
                    <a href="#" class="btn-outline">See the editorial series
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </a>
                </div>
                <div class="tilt-card neon-border">
                    <img src="images/sylas3.jpg" alt="Sylas Editorial" class="image-hover-zoom">
                    <div class="card-overlay">
                        <div class="card-label">EDITORIAL 01</div>
                        <div class="card-title">Neon Nights</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Brand Section -->
    <section class="brand-section">
        <div class="container">
            <div class="about-grid reverse">
                <div class="tilt-card neon-border">
                    <img src="images/sylas7.jpg" alt="Sylas Campaign" class="image-hover-zoom">
                    <div class="card-overlay">
                        <div class="card-label">CAMPAIGN 02</div>
                        <div class="card-title">Street Style</div>
                    </div>
                </div>
                <div class="about-content">
                    <div class="label-mono text-orange">BRAND PARTNERSHIPS</div>
                    <h2>Campaign work with <span class="fire-text">personality.</span></h2>
                    <div class="accent-line"></div>
                    <p>Represented by Cohesive Entertainment Group for acting, Sylas seamlessly blends his natural talent with professional direction. His content spans comedy skits, family vlogs, and brand collaborations that resonate with Gen Z audiences.</p>
                    <div class="label-mono">BRAND: SULLIVAN FAMILY TIKTOK / 1.3M+ FOLLOWERS</div>
                    <a href="#" class="btn-outline">View campaign selects
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Gallery Strip -->
    <section id="gallery" class="gallery-strip">
        <div class="container">
            <div class="gallery-grid">
                <div class="tilt-card neon-border">
                    <img src="images/sylas9.jpg" alt="" class="image-hover-zoom">
                </div>
                <div class="tilt-card neon-border">
                    <img src="images/sylas6.jpg" alt="" class="image-hover-zoom">
                </div>
                <div class="tilt-card neon-border">
                    <img src="images/sylas8.jpg" alt="" class="image-hover-zoom">
                </div>
            </div>
            <div class="gallery-text">
                <h2><span class="fire-text">Built</span> for the spotlight.</h2>
                <p>Every moment is composed with authenticity—whether it's a viral TikTok trend, a family comedy sketch, or a professional brand partnership.</p>
                <a href="#work" class="btn-primary pulse-glow">Explore the archive
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
    </section>
    
    <!-- Work Grid -->
    <section id="work" class="work-grid">
        <div class="container">
            <div class="section-header">
                <div class="label-mono text-orange">PORTFOLIO</div>
                <h2>Selected <span class="fire-text">Work</span></h2>
                <p>A collection of moments—from viral TikTok content to professional shoots that showcase versatility and authentic charm.</p>
            </div>
            
            <div class="gallery" id="infinite-gallery">
                <!-- Images loaded by JS -->
            </div>
            
            <div class="text-center">
                <button class="btn-outline shimmer" id="load-more">Load more work
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="label-mono text-orange">GET IN TOUCH</div>
                    <h2>Let's make<br>something <span class="fire-text">viral.</span></h2>
                    <p>Interested in collaborating? Whether it's brand partnerships, creative projects, or media inquiries—let's connect.</p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <span>hello@sylassullivan.com</span>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span>Texas / Los Angeles</span>
                        </div>
                    </div>
                    
                    <div class="stats-row">
                        <div class="stat-box">
                            <div class="stat-number fire-text">1.3M+</div>
                            <div class="label-mono">FOLLOWERS</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number fire-text">55M+</div>
                            <div class="label-mono">LIKES</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-number fire-text">500+</div>
                            <div class="label-mono">VIDEOS</div>
                        </div>
                    </div>
                    
                    <div class="social-links">
                        <a href="https://tiktok.com/@sullivanfamilytiktok" target="_blank" class="social-btn">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" class="social-btn">
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                        </a>
                    </div>
                </div>
                
                <div class="glass-card tilt-card">
                    <form id="contact-form">
                        <div class="form-group">
                            <label class="label-mono">NAME</label>
                            <input type="text" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label class="label-mono">EMAIL</label>
                            <input type="email" placeholder="your@email.com" required>
                        </div>
                        <div class="form-group">
                            <label class="label-mono">PROJECT DETAILS</label>
                            <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <div class="form-group">
                            <label class="label-mono">BUDGET RANGE</label>
                            <select>
                                <option value="">Select budget</option>
                                <option value="small">$1,000 - $5,000</option>
                                <option value="medium">$5,000 - $15,000</option>
                                <option value="large">$15,000+</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary w-full pulse-glow">
                            Send message
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo fire-text">SYLAS SULLIVAN</div>
                <div class="footer-links">
                    <a href="#">Instagram</a>
                    <a href="#">TikTok</a>
                    <a href="#">Twitter</a>
                    <a href="#">YouTube</a>
                </div>
                <div class="footer-copy">© 2026 Sylas Sullivan. All rights reserved.</div>
            </div>
        </div>
    </footer>

    <script>
        // JavaScript will go here
    </script>
</body>
</html>
/* ===== CSS VARIABLES ===== */
:root {
    --bg-primary: #0B0B0C;
    --bg-secondary: #141416;
    --accent: #FF4D2E;
    --accent-light: #FF8C42;
    --accent-gold: #FFD700;
    --text-primary: #F4F4F5;
    --text-secondary: #A7A7AD;
}

/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    cursor: none;
}

/* ===== CUSTOM CURSOR ===== */
.cursor-dot {
    position: fixed;
    width: 10px;
    height: 10px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px var(--accent), 0 0 40px var(--accent);
}

.cursor-ring {
    position: fixed;
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 77, 46, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-out;
}

.cursor-glow {
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 77, 46, 0.2) 0%, transparent 60%);
    pointer-events: none;
    z-index: 9997;
    transform: translate(-50%, -50%);
}

/* ===== OVERLAYS ===== */
.grain-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.04;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

.scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9995;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 50%);
    background-size: 100% 4px;
    opacity: 0.3;
}

.vignette {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9994;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);
}

#matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.1;
}

#webgl-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
}

/* ===== TYPOGRAPHY ===== */
.font-cyber {
    font-family: 'Orbitron', sans-serif;
}

.label-mono {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
}

.fire-text {
    background: linear-gradient(135deg, #FF4D2E 0%, #FF8C42 50%, #FFD700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fireGlow 2s ease-in-out infinite alternate;
}

@keyframes fireGlow {
    from { filter: brightness(1) drop-shadow(0 0 10px rgba(255, 77, 46, 0.5)); }
    to { filter: brightness(1.3) drop-shadow(0 0 30px rgba(255, 77, 46, 0.9)); }
}

/* ===== NAVIGATION ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 24px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(12px);
    background: rgba(11, 11, 12, 0.6);
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 24px;
}

.nav-btn {
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
}

.nav-btn:hover {
    color: var(--accent);
}

/* ===== FULLSCREEN MENU ===== */
.fullscreen-menu {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(11, 11, 12, 0.98);
    backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
}

.fullscreen-menu.hidden {
    display: none;
}

.menu-close {
    position: absolute;
    top: 24px;
    right: 32px;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: none;
    transition: color 0.3s;
}

.menu-close:hover {
    color: var(--accent);
}

.menu-link {
    font-family: 'Orbitron', sans-serif;
    font-size: 56px;
    font-weight: 900;
    color: var(--text-primary);
    text-decoration: none;
    transition: all 0.3s;
}

.menu-link:hover {
    color: transparent;
    background: linear-gradient(135deg, #FF4D2E 0%, #FF8C42 50%, #FFD700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateX(30px) scale(1.1);
}

/* ===== BUTTONS ===== */
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    background: linear-gradient(135deg, #FF4D2E 0%, #FF8C42 100%);
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    border: none;
    cursor: none;
    transition: all 0.3s;
    box-shadow: 0 4px 30px rgba(255, 77, 46, 0.4);
}

.btn-primary:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 40px rgba(255, 77, 46, 0.6);
}

.btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border: 2px solid rgba(244, 244, 245, 0.2);
    color: var(--text-primary);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    cursor: none;
    transition: all 0.3s;
}

.btn-outline:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 4px 30px rgba(255, 77, 46, 0.3);
}

.pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
    0%, 100% { box-shadow: 0 4px 30px rgba(255, 77, 46, 0.4); }
    50% { box-shadow: 0 8px 50px rgba(255, 77, 46, 0.8); }
}

/* ===== HERO SECTION ===== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
}

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ken-burns {
    animation: kenBurns 20s ease-in-out infinite alternate;
}

@keyframes kenBurns {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.1) translate(-2%, -2%); }
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--bg-primary) 0%, transparent 50%, transparent 100%);
    background: linear-gradient(to top, var(--bg-primary) 0%, transparent 50%, rgba(11, 11, 12, 0.5) 100%);
}

.floating-icon {
    position: absolute;
    color: rgba(255, 77, 46, 0.2);
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
}

.hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    max-width: 1000px;
    padding: 0 32px;
}

.hero-label {
    color: var(--accent-light);
    margin-bottom: 24px;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(60px, 12vw, 150px);
    font-weight: 900;
    line-height: 0.9;
    margin-bottom: 32px;
}

.white-text {
    color: var(--text-primary);
}

.hero-subtitle {
    font-size: 20px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.6;
}

.highlight-orange { color: var(--accent); font-weight: 600; }
.highlight-gold { color: var(--accent-light); font-weight: 600; }
.highlight-yellow { color: var(--accent-gold); font-weight: 600; }

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-bottom: 64px;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 32px;
}

.stat {
    text-align: center;
}

.stat-value, .stat-suffix {
    display: inline;
    font-size: 36px;
    font-weight: 900;
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.scroll-mouse {
    width: 24px;
    height: 40px;
    border: 2px solid var(--accent);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 8px;
}

.scroll-wheel {
    width: 6px;
    height: 10px;
    background: var(--accent);
    border-radius: 3px;
    animation: scrollWheel 1.5s infinite;
}

@keyframes scrollWheel {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(12px); opacity: 0; }
}

/* ===== SECTIONS ===== */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
}

section {
    padding: 128px 0;
    position: relative;
}

.about, .brand-section, .gallery-strip, .work-grid, .contact {
    background: var(--bg-primary);
}

.brand-section {
    background: #0a0a0b;
}

/* ===== ABOUT GRID ===== */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
}

.about-grid.reverse {
    direction: rtl;
}

.about-grid.reverse > * {
    direction: ltr;
}

.about-content h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    margin-bottom: 24px;
    line-height: 1.1;
}

.text-orange {
    color: var(--accent-light);
}

.accent-line {
    width: 96px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent-light));
    margin-bottom: 32px;
}

.about-content p {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 32px;
}

.about-content .label-mono {
    margin-bottom: 24px;
    display: block;
}

/* ===== TILT CARDS ===== */
.tilt-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: transform 0.1s ease-out;
}

.tilt-card::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(45deg, #FF4D2E, #FF8C42, #FFD700, #FF00FF, #00FFFF, #FF4D2E);
    background-size: 400% 400%;
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
    animation: gradientRotate 3s ease infinite;
}

.tilt-card:hover::before {
    opacity: 1;
}

@keyframes gradientRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.tilt-card img {
    width: 100%;
    height: auto;
    aspect-ratio: 4/5;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.image-hover-zoom:hover {
    transform: scale(1.1);
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px;
    background: linear-gradient(to top, rgba(11, 11, 12, 0.9), transparent);
}

.card-label {
    color: var(--accent);
    font-family: 'Orbitron', sans-serif;
    font-size: 12px;
    margin-bottom: 4px;
}

.card-title {
    color: white;
    font-size: 24px;
    font-weight: 700;
}

/* ===== GALLERY STRIP ===== */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 64px;
}

.gallery-text {
    text-align: center;
}

.gallery-text h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 900;
    margin-bottom: 24px;
}

.gallery-text p {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.6;
}

/* ===== WORK GRID ===== */
.section-header {
    text-align: center;
    margin-bottom: 64px;
}

.section-header h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    margin-bottom: 16px;
}

.section-header p {
    font-size: 18px;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

@media (min-width: 768px) {
    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1024px) {
    .gallery {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 1400px) {
    .gallery {
        grid-template-columns: repeat(5, 1fr);
    }
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: none;
}

.gallery-item::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #FF4D2E, #FF8C42, #FFD700);
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
}

.gallery-item:hover::before {
    opacity: 1;
}

.gallery-item img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11, 11, 12, 0.9), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-title {
    color: white;
    font-weight: 600;
    font-size: 14px;
}

.gallery-cat {
    color: var(--text-secondary);
    font-size: 12px;
}

.gallery-likes {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--accent);
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
}

.gallery-item:hover .gallery-likes {
    opacity: 1;
}

.text-center {
    text-align: center;
    margin-top: 64px;
}

.shimmer {
    position: relative;
    overflow: hidden;
}

.shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* ===== CONTACT ===== */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
}

.contact-info h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: 800;
    margin-bottom: 24px;
    line-height: 1.1;
}

.contact-info > p {
    font-size: 18px;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 40px;
}

.contact-details {
    margin-bottom: 40px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    color: var(--text-primary);
    font-size: 16px;
}

.contact-icon {
    padding: 12px;
    background: rgba(255, 77, 46, 0.1);
    border-radius: 8px;
    color: var(--accent);
}

.stats-row {
    display: flex;
    gap: 32px;
    margin-bottom: 40px;
}

.stat-box {
    text-align: center;
}

.stat-number {
    font-size: 32px;
    font-weight: 900;
}

.social-links {
    display: flex;
    gap: 16px;
}

.social-btn {
    padding: 16px;
    background: rgba(255, 77, 46, 0.1);
    border-radius: 8px;
    color: var(--text-primary);
    transition: all 0.3s;
}

.social-btn:hover {
    background: var(--accent);
    color: white;
    transform: scale(1.1);
}

/* ===== GLASS CARD ===== */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px;
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    transition: color 0.3s;
}

.form-group:focus-within label {
    color: var(--accent);
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(244, 244, 245, 0.2);
    padding: 12px 0;
    color: var(--text-primary);
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    border-color: var(--accent);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-secondary);
}

.form-group select option {
    background: var(--bg-secondary);
}

.w-full {
    width: 100%;
    justify-content: center;
}

/* ===== FOOTER ===== */
footer {
    padding: 64px 0;
    border-top: 1px solid rgba(244, 244, 245, 0.1);
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.footer-logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 24px;
    font-weight: 900;
}

.footer-links {
    display: flex;
    gap: 32px;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--accent);
}

.footer-copy {
    color: var(--text-secondary);
    font-size: 14px;
}

/* ===== GLITCH TEXT ===== */
.glitch-text {
    position: relative;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.glitch-text:hover::before {
    animation: glitch1 0.3s infinite;
    color: var(--accent);
    opacity: 0.8;
}

.glitch-text:hover::after {
    animation: glitch2 0.3s infinite reverse;
    color: #00FFFF;
    opacity: 0.8;
}

@keyframes glitch1 {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
    100% { transform: translate(0); }
}

@keyframes glitch2 {
    0% { transform: translate(0); }
    20% { transform: translate(3px, -3px); }
    40% { transform: translate(3px, 3px); }
    60% { transform: translate(-3px, -3px); }
    80% { transform: translate(-3px, 3px); }
    100% { transform: translate(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .about-grid.reverse {
        direction: ltr;
    }
    
    .cursor-dot,
    .cursor-ring,
    .cursor-glow {
        display: none !important;
    }
    
    body {
        cursor: auto;
    }
    
    .menu-link {
        font-size: 40px;
    }
}

@media (max-width: 768px) {
    .hero-stats {
        flex-direction: column;
        gap: 16px;
    }
    
    .gallery-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-row {
        flex-direction: column;
        gap: 16px;
    }
}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent), var(--accent-light));
    border-radius: 3px;
}// ===== CUSTOM CURSOR =====
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const cursorGlow = document.querySelector('.cursor-glow');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
n    cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
    // Spring physics for ring
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    
    // Spring physics for glow
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.remove('hidden');
    gsap.fromTo('.menu-link', 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
    );
});

menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.add('hidden');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.add('hidden');
    });
});

// ===== WEBGL PARTICLES =====
function initWebGL() {
    const container = document.getElementById('webgl-container');
    if (!container) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Create particles
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
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
    
    camera.position.z = 50;
    
    let mouseX_GL = 0, mouseY_GL = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX_GL = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY_GL = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    function animate() {
        requestAnimationFrame(animate);
        
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
        particles.rotation.y += mouseX_GL * 0.01;
        particles.rotation.x += mouseY_GL * 0.01;
        
        renderer.render(scene, camera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
initWebGL();

// ===== MATRIX RAIN =====
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'SYLAS0123456789';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#FF4D2E';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        
        requestAnimationFrame(draw);
    }
    draw();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
initMatrixRain();

// ===== 3D TILT CARDS =====
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ===== ANIMATED COUNTERS =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.dataset.target);
                const isDecimal = target % 1 !== 0;
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
                        requestAnimationFrame(updateCounter);
n                    } else {
                        counter.textContent = isDecimal ? target.toFixed(1) : target;
n                    }
                };
                
                updateCounter();
n                observer.unobserve(counter);
n            }
n        });
n    }, { threshold: 0.5 });
n    
n    counters.forEach(counter => observer.observe(counter));
n}
nanimateCounters();

// ===== INFINITE GALLERY =====
const galleryImages = [
    { src: 'images/sylas1.jpg', title: 'Mirror Selfie', cat: 'Lifestyle' },
    { src: 'images/sylas2.jpg', title: 'Headshot', cat: 'Portrait' },
    { src: 'images/sylas3.jpg', title: 'Neon Nights', cat: 'Editorial' },
    { src: 'images/sylas4.jpg', title: 'Professional', cat: 'Campaign' },
    { src: 'images/sylas5.jpg', title: 'Chill Mode', cat: 'Casual' },
    { src: 'images/sylas6.jpg', title: 'Basketball', cat: 'Sports' },
    { src: 'images/sylas7.jpg', title: 'Street Style', cat: 'Fashion' },
    { src: 'images/sylas8.jpg', title: 'Boat Life', cat: 'Lifestyle' },
    { src: 'images/sylas9.jpg', title: 'Football', cat: 'Sports' },
    { src: 'images/sylas10.jpg', title: 'Beach Day', cat: 'Summer' },
    { src: 'images/sylas11.jpg', title: 'Summer Vibes', cat: 'Beach' },
    { src: 'images/sylas12.jpg', title: 'Night Out', cat: 'Street' },
    { src: 'images/sylas13.jpg', title: 'Sunset', cat: 'Fashion' },
    { src: 'images/sylas14.jpg', title: 'With Friends', cat: 'Social' },
    { src: 'images/sylas15.jpg', title: 'Tropical', cat: 'Travel' },
    { src: 'images/sylas16.jpg', title: 'Night Run', cat: 'Fitness' },
];

function renderGallery(images) {
    const gallery = document.getElementById('infinite-gallery');
    if (!gallery) return;
    
    gallery.innerHTML = images.map((img, i) => `
        <div class="gallery-item tilt-card">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-title">${img.title}</div>
                <div class="gallery-cat">${img.cat}</div>
n            </div>
            <div class="gallery-likes">
n                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
n                ${Math.floor(Math.random() * 500 + 100)}K
n            </div>
n        </div>
n    `).join('');
n    
n    // Re-init tilt cards
n    document.querySelectorAll('.gallery-item').forEach(card => {
n        card.addEventListener('mousemove', (e) => {
n            const rect = card.getBoundingClientRect();
n            const x = e.clientX - rect.left;
n            const y = e.clientY - rect.top;
n            const centerX = rect.width / 2;
n            const centerY = rect.height / 2;
n            const rotateX = (y - centerY) / 15;
n            const rotateY = (centerX - x) / 15;
n            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
n        });
n        
n        card.addEventListener('mouseleave', () => {
n            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
n        });
n    });
n}
n
nrenderGallery(galleryImages);
n
n// Load more button
ndocument.getElementById('load-more')?.addEventListener('click', () => {
n    const moreImages = galleryImages.map(img => ({
n        ...img,
n        title: img.title + ' ' + Math.floor(Math.random() * 10 + 2)
n    }));
n    galleryImages.push(...moreImages);
n    renderGallery(galleryImages);
n});
n
n// ===== GSAP SCROLL ANIMATIONS =====
ngsap.registerPlugin(ScrollTrigger);
n
n// Animate sections on scroll
ngsap.utils.toArray('section').forEach(section => {
n    gsap.fromTo(section.querySelectorAll('.animate-in, h2, p, .btn-outline'), 
n        { y: 60, opacity: 0 },
n        {
n            y: 0,\n            opacity: 1,\n            duration: 0.8,\n            stagger: 0.1,\n            scrollTrigger: {\n                trigger: section,\n                start: 'top 80%',\n                toggleActions: 'play none none reverse'\n            }\n        }\n    );\n});\n
n// ===== CONTACT FORM =====
ndocument.getElementById('contact-form')?.addEventListener('submit', (e) => {\n    e.preventDefault();\n    alert('Message sent! (Demo - connect to backend for real functionality)');\n});\n
n// ===== AUDIO TOGGLE =====
nlet audioPlaying = false;
ndocument.getElementById('audio-toggle')?.addEventListener('click', () => {\n    audioPlaying = !audioPlaying;\n    // Add your audio logic here\n    console.log('Audio:', audioPlaying ? 'ON' : 'OFF');\n});\n
n// ===== MAGNETIC BUTTONS =====
ndocument.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {\n    btn.addEventListener('mousemove', (e) => {\n        const rect = btn.getBoundingClientRect();\n        const x = e.clientX - rect.left - rect.width / 2;\n        const y = e.clientY - rect.top - rect.height / 2;\n        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;\n    });\n    \n    btn.addEventListener('mouseleave', () => {\n        btn.style.transform = 'translate(0, 0)';\n    });\n});\n```

---

