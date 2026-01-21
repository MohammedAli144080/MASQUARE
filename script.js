:root {
  --bg: #0a1118;
  --surface: #111b24;
  --primary: #00d4ff;
  --primary-dim: #0099bb;
  --accent: #ff3366;
  --text: #e0f7ff;
  --text-dim: #a3cdda;
  --glow: 0 0 20px rgba(0,212,255,0.35);
  --glow-strong: 0 0 35px rgba(0,212,255,0.55);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Background */
.tech-bg {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
}

.circuit {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.lines path {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: flow 18s linear infinite;
}

.lines path:nth-child(2) { animation-delay: -4s; }
.lines path:nth-child(3) { animation-delay: -8s; }
.lines path:nth-child(4) { animation-delay: -12s; }

@keyframes flow { to { stroke-dashoffset: 0; } }

.grid-pattern {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridMove 50s linear infinite;
}

@keyframes gridMove { to { background-position: 40px 40px; } }

.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
  opacity: 0.15;
  animation: glowPulse 12s ease-in-out infinite;
}

.glow-1 { top: 10%; left: 15%; }
.glow-2 { bottom: 20%; right: 10%; }

@keyframes glowPulse {
  0%,100% { transform: scale(1); opacity: 0.15; }
  50% { transform: scale(1.2); opacity: 0.25; }
}

/* Glassmorphism */
.glass {
  background: rgba(20, 35, 48, 0.38);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(0,212,255,0.18);
  border-radius: 16px;
  box-shadow: var(--glow), inset 0 1px 0 rgba(255,255,255,0.04);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--glow-strong);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(10,17,24,0.7);
  backdrop-filter: blur(12px);
  z-index: 1000;
  transition: background 0.4s;
}

.navbar.scrolled { background: rgba(10,17,24,0.9); }

.nav-container {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, transform 0.3s;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--primary);
  transform: translateY(-2px);
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: auto;
}

.hero-text h1 {
  font-size: 4.2rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary), #00ffcc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tagline {
  font-size: 1.4rem;
  color: var(--text-dim);
  margin: 1.5rem 0;
}

/* Animations */
.animate-fade-in { opacity: 0; animation: fadeIn 1.2s forwards; }
@keyframes fadeIn { to { opacity: 1; } }

.animate-slide-up { transform: translateY(40px); opacity: 0; animation: slideUp 1s ease-out forwards; }
@keyframes slideUp { to { transform: translateY(0); opacity: 1; } }

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }
.delay-5 { animation-delay: 1s; }

/* Typing effect */
.reveal-text {
  position: relative;
  white-space: pre-wrap;
}

.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Skill meters */
.skill-meter {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(var(--primary) calc(var(--progress) * 1%), rgba(0,212,255,0.15) 0);
  display: grid;
  place-items: center;
  position: relative;
}

.skill-meter::before {
  content: '';
  width: 80%;
  height: 80%;
  background: var(--surface);
  border-radius: 50%;
  position: absolute;
}

.skill-meter span {
  z-index: 1;
  font-size: 1rem;
  text-align: center;
}

/* Mobile */
@media (max-width: 1024px) {
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .nav-links { gap: 1.5rem; }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: var(--surface);
    flex-direction: column;
    padding: 6rem 2rem;
    transition: right 0.4s ease;
  }

  .nav-links.open { right: 0; }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
  }

  .hamburger span {
    width: 30px;
    height: 3px;
    background: var(--text);
    transition: all 0.3s;
  }
}
