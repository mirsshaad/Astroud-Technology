import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PartnerLogos } from './PartnerLogos';
import Velaris from './ui/velaris';
import '../styles/hero-main.css';

const servicesHeadings = [
  'Cloud infrastructure. Without the complexity.',
  'Cloud migration. Without the guesswork.',
  'Microsoft 365. Secure collaboration.',
  'Managed hosting. Fast, monitored infrastructure.',
  'Backup & recovery. Tested, not assumed.',
  '24/7 Support. Real engineers, rapid response.'
];

export function HeroMain() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHeadingIndex(prev => (prev + 1) % servicesHeadings.length);
        setFade(true);
      }, 300); // 300ms fade out before swapping
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('home-services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/services';
  };

  return (
    <section className={`hero-main ${isLoaded ? 'loaded' : ''}`} style={{ position: 'relative', overflow: 'hidden', minHeight: '65vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      
      {/* Velaris WebGL living gradient noise background - Light Clean Palette */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Velaris
          bg="#FFFFFF"
          colors={["#FFFFFF", "#F8FAFC", "#E2E8F0", "#CBD5E1"]}
          speed={1.2}
          grain={0.15}
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Light gradient overlay — ensures high text contrast */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.95) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Hero content wrapper */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '90px 20px 0',
        minHeight: '80vh',
      }}>
        
        {/* Main Text & Buttons Block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1 className="hero-title" style={{ maxWidth: 900, margin: '0 auto 16px', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.15, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
            <span style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
              {servicesHeadings[headingIndex]}
            </span>
          </h1>
          
          <p className="hero-subtitle" style={{ maxWidth: 640, margin: '0 auto 36px', fontSize: '1.25rem', fontWeight: 400, color: '#475569', lineHeight: 1.5, letterSpacing: '0.01em' }}>
            One integrated platform, infrastructure to support, with economics that improve as you scale.
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link className="btn-primary" to="/signup" style={{ padding: '14px 32px', fontSize: '16px', borderRadius: '50px', fontWeight: 600, background: '#161E2D', color: '#FFFFFF' }}>
              Get started
            </Link>
            <button className="btn-secondary" onClick={scrollToServices} style={{ padding: '14px 32px', fontSize: '16px', cursor: 'pointer', background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', borderRadius: '50px', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }} onMouseOver={e => e.currentTarget.style.borderColor = '#94A3B8'} onMouseOut={e => e.currentTarget.style.borderColor = '#CBD5E1'}>
              Explore products
            </button>
          </div>
        </div>

        {/* Middle spacer (pushes logos to the bottom) */}
        <div style={{ flex: 1.5, minHeight: '12vh' }}></div>

        {/* Bottom Logos Block */}
        <div style={{ paddingBottom: '50px', width: '100%', maxWidth: '960px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px', fontWeight: 600, letterSpacing: '0.02em' }}>
            From real-time systems to mission-critical workloads, leaders in tech run on Astroud.
          </p>
          <div style={{ width: '100%' }}>
            <PartnerLogos />
          </div>
        </div>

      </div>
    </section>
  );
}
