import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SilkShaderBackground from './ui/SilkShaderBackground';
import MeshDriftShaderBackground from './ui/MeshDriftShaderBackground';
import OceanMeshShaderBackground from './ui/OceanMeshShaderBackground';
import NeonSilkShaderBackground from './ui/NeonSilkShaderBackground';
import '../styles/showcase-banner.css';

const SLIDES = [
  {
    id: 'overview',
    heading: 'AI is easy.\nImpact is hard.',
    desc: 'The real promise of AI isn’t just about models or code. It’s about how every system, database, and human capability moves in harmony. Astroud engineers the resilient AWS & Azure cloud foundations that turn AI experiments into high-availability production reality.',
    btnText: 'Explore Architecture',
    btnLink: '/services/cloud-infrastructure',
    bgImage: '/images/purple_neon_streaks.jpg'
  },
  {
    id: 'migration',
    heading: 'Cloud migration\nwithout the guesswork.',
    desc: 'Move critical database workloads, containerized clusters, and enterprise legacy platforms with zero unplanned downtime. Our structured cutover runbooks and continuous replication eliminate the operational risk from day one.',
    btnText: 'Plan Your Migration',
    btnLink: '/services/cloud-migration',
    bgImage: '/images/blue_silk_wave.jpg'
  },
  {
    id: 'security',
    heading: 'Enterprise security.\nTested, not assumed.',
    desc: 'Arm your distributed workforce with hardened Microsoft 365 environments, Entra ID conditional access, and automated data loss prevention across every endpoint, paired with immutable 30-day ransomware recovery archives.',
    btnText: 'Explore 365 & Security',
    btnLink: '/services/microsoft-365',
    bgImage: '/images/azure_foundry_3d.jpg'
  },
  {
    id: 'operations',
    heading: 'The capability to build.\nThe care to operate.',
    desc: 'Real senior cloud engineers monitoring production 24/7/365 with rapid SLA response, proactive OS patching, and monthly FinOps reviews that identify orphaned spend to keep your cloud fast and cost-predictable.',
    btnText: 'View Managed Plans',
    btnLink: '/pricing',
    bgImage: '/images/website_hosting_cicd.jpg'
  }
];

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

function renderShaderForSlide(slideId) {
  switch (slideId) {
    case 'operations':
      return <NeonSilkShaderBackground />;
    case 'security':
      return <OceanMeshShaderBackground />;
    case 'migration':
      return <MeshDriftShaderBackground />;
    case 'overview':
    default:
      return <SilkShaderBackground />;
  }
}

export function AstroudShowcaseBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = SLIDES[activeIndex];

  // Auto-advance slides smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  // Determine active shader key for smooth crossfade transitions
  const activeShaderKey =
    currentSlide.id === 'operations'
      ? 'neon-silk'
      : currentSlide.id === 'security'
      ? 'ocean-mesh'
      : currentSlide.id === 'migration'
      ? 'mesh-drift'
      : 'silk';

  return (
    <section className="astroud-showcase-section">
      <div className="astroud-showcase-shell">
        <div className="astroud-showcase-banner">
          {/* Dynamic Animated WebGL Shader Background with smooth crossfade */}
          <div className="astroud-showcase-bg-layer">
            <AnimatePresence>
              <motion.div
                key={activeShaderKey}
                className="astroud-showcase-shader-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                {renderShaderForSlide(currentSlide.id)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="astroud-showcase-gradient-scrim" />

          {/* Slide Text Content */}
          <div className="astroud-showcase-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Main Heading */}
                <h2 className="astroud-showcase-heading">
                  {currentSlide.heading.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < currentSlide.heading.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>

                {/* Subtitle / Description */}
                <p className="astroud-showcase-desc">
                  {currentSlide.desc}
                </p>

                {/* CTA Action Button */}
                <Link to={currentSlide.btnLink} className="astroud-showcase-btn">
                  <span>{currentSlide.btnText}</span>
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AstroudShowcaseBanner;
