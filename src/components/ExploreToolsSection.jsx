import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AstroudServiceIcon } from './ExploreToolsIcons';
import '../styles/explore-tools.css';

const categories = [
  'All Services',
  'Cloud Infrastructure',
  'Cloud Migration',
  'Microsoft 365',
  'Hosting & CI/CD',
  'Backup & 24/7 Support'
];

const catalog = {
  'All Services': {
    hero: {
      badge: 'FLAGSHIP SOLUTION',
      title: 'Cloud Infrastructure (AWS + Azure)',
      desc: "Cloud infrastructure, sized to what you actually run — not what's easiest to sell. We design, provision via Terraform, and manage AWS or Azure environments built around your real workload.",
      btnText: 'Explore the service',
      link: '/services/cloud-infrastructure',
      image: '/images/azure_foundry_art_hd.png'
    },
    cards: [
      {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        badge: 'AWS + AZURE',
        desc: 'VPC network architecture, scoped IAM/RBAC access, and Terraform IaC sized to your actual workload with zero vendor lock-in.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      },
      {
        id: 'cloud-migration',
        title: 'Cloud Migration',
        badge: 'OFF-HOURS',
        desc: 'Migration planning and execution for on-premise servers and business data—done off-hours with tested rollback plans and zero surprises.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'cloud-migration',
        iconBg: '#ecfdf5'
      },
      {
        id: 'microsoft-365',
        title: 'Microsoft 365 Solutions',
        badge: 'SECURITY FIRST',
        desc: 'Tenant setup properly secured from day one: MFA baselines, conditional access policies, and automated user provisioning/deprovisioning.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'microsoft-365',
        iconBg: '#f0f4fe'
      },
      {
        id: 'website-hosting',
        title: 'Website Hosting & Deployment',
        badge: 'CI/CD & SSL',
        desc: 'Hosting and deployment matched to site complexity—from simple brochure websites to applications with automated CI/CD pipelines.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'website-hosting',
        iconBg: '#f5f3ff'
      },
      {
        id: 'backup-recovery',
        title: 'Backup & Disaster Recovery',
        badge: 'TESTED RESTORES',
        desc: 'Automated in-region cloud backup to S3/Blob storage, 30-day versioning for ransomware protection, and monthly verified test restores.',
        link: '/services/backup-recovery',
        linkText: 'Explore the service',
        iconType: 'backup-recovery',
        iconBg: '#fffbeb'
      },
      {
        id: '24-7-support',
        title: '24/7 Managed Cloud Support',
        badge: 'REAL ENGINEERS',
        desc: 'Proactive monitoring, monthly FinOps cost reviews, and priority incident response from real engineers without demanding your time.',
        link: '/services/24-7-support',
        linkText: 'Explore the service',
        iconType: '24-7-support',
        iconBg: '#ecfdf5'
      }
    ]
  },
  'Cloud Infrastructure': {
    hero: {
      badge: 'ARCHITECTURE & PROVISIONING',
      title: 'Right-Sized Cloud Architecture',
      desc: 'Most SMBs get sold cloud infrastructure based on reseller margins. Astroud designs and provisions compute, storage, and networking matched to real usage patterns.',
      btnText: 'Explore the service',
      link: '/services/cloud-infrastructure',
      image: '/images/metallic_cloud_mesh.jpg'
    },
    cards: [
      {
        id: 'vpc-design',
        title: 'VPC & Network Design',
        badge: 'ISOLATION',
        desc: 'Isolated subnets, security groups, and routing tables designed around strict enterprise security baselines.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      },
      {
        id: 'terraform-iac',
        title: 'Terraform IaC Provisioning',
        badge: 'REPRODUCIBLE',
        desc: 'Every resource is codified and version-controlled, ensuring clean changes and auditability without manual console drift.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'managed-hosting',
        iconBg: '#f5f3ff'
      },
      {
        id: 'account-ownership',
        title: 'Account Ownership & RBAC',
        badge: 'YOU OWN IT',
        desc: 'You retain complete ownership of your AWS or Azure account. We operate inside scoped IAM/RBAC roles you can revoke anytime.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'security',
        iconBg: '#eff6ff'
      },
      {
        id: 'compute-sizing',
        title: 'Real Compute Sizing',
        badge: 'NO GUESSWORK',
        desc: 'EC2 and Azure VMs sized accurately to actual usage patterns with autoscaling headroom for genuine growth.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      },
      {
        id: 'cost-dashboard',
        title: 'FinOps Cost Review',
        badge: 'MONTHLY AUDIT',
        desc: 'Live cost dashboards and a monthly optimization review to eliminate idle instances and unwanted cloud sprawl.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: 'finops',
        iconBg: '#f0fdf4'
      },
      {
        id: 'full-documentation',
        title: 'Architecture Handover',
        badge: 'TRANSPARENT',
        desc: 'Complete documentation of your network topology, credentials, and configurations handed to you—never locked in our heads.',
        link: '/services/cloud-infrastructure',
        linkText: 'Explore the service',
        iconType: '24-7-support',
        iconBg: '#ecfdf5'
      }
    ]
  },
  'Cloud Migration': {
    hero: {
      badge: 'ZERO DISRUPTION',
      title: 'Move to Cloud Without Surprises',
      desc: 'Migration is where projects go wrong with rushed timelines and surprise downtime. Astroud plans migrations around your risk tolerance with tested rollback guarantees.',
      btnText: 'Explore the service',
      link: '/services/cloud-migration',
      image: '/images/cloud_migration_3d.jpg'
    },
    cards: [
      {
        id: 'risk-discovery',
        title: 'Pre-Migration Discovery',
        badge: 'ASSESSMENT',
        desc: 'Full inventory of current servers, network dependencies, and database footprints to identify what actually needs to move.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'cloud-migration',
        iconBg: '#ecfdf5'
      },
      {
        id: 'migration-options',
        title: 'Honest Option Scoping',
        badge: 'OPTION A vs B',
        desc: 'We present practical options (e.g. backup-only vs. full VM migration) with transparent cost and risk tradeoffs explained plainly.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'finops',
        iconBg: '#f0fdf4'
      },
      {
        id: 'off-hours-exec',
        title: 'Off-Hours Execution',
        badge: 'ZERO IMPACT',
        desc: 'Cutover execution scheduled strictly during weekends or off-hours to avoid disrupting day-to-day business operations.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'cloud-migration',
        iconBg: '#ecfdf5'
      },
      {
        id: 'license-handling',
        title: 'Software License Continuity',
        badge: 'e.g. TALLY',
        desc: 'Hardware-tied licenses (like Tally or proprietary ERPs) are planned for re-authorization in advance, not discovered mid-flight.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'security',
        iconBg: '#eff6ff'
      },
      {
        id: 'post-validation',
        title: 'Post-Migration Validation',
        badge: 'SIGN-OFF',
        desc: 'Rigorous data integrity and application functional testing performed before sign-off so you know everything works.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'backup-recovery',
        iconBg: '#fffbeb'
      },
      {
        id: 'rollback-plan',
        title: 'Documented Rollback Plan',
        badge: 'SAFEGUARD',
        desc: 'Every migration engagement includes a tested rollback strategy so your business is always safe under any unforeseen scenario.',
        link: '/services/cloud-migration',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      }
    ]
  },
  'Microsoft 365': {
    hero: {
      badge: 'IDENTITY & SECURITY',
      title: 'Microsoft 365 Setup & Hardening',
      desc: 'Most Microsoft 365 tenants are configured quickly and never revisited. Astroud builds security in from the start and manages user lifecycles as your team scales.',
      btnText: 'Explore the service',
      link: '/services/microsoft-365',
      image: '/images/metallic_data_core.jpg'
    },
    cards: [
      {
        id: 'tenant-hardening',
        title: 'Tenant Setup & Hardening',
        badge: 'BEST PRACTICES',
        desc: 'Clean organization-wide tenant deployment following Microsoft CIS security baselines and encryption standards.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'microsoft-365',
        iconBg: '#f0f4fe'
      },
      {
        id: 'mfa-security',
        title: 'MFA & Conditional Access',
        badge: 'ZERO TRUST',
        desc: 'Eliminate credential stuffing and password theft by enforcing modern multi-factor authentication and device trust policies.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'security',
        iconBg: '#eff6ff'
      },
      {
        id: 'mailbox-mig',
        title: 'Mailbox Migration',
        badge: 'SEAMLESS',
        desc: 'Seamless migration from legacy IMAP, cPanel, or Google Workspace to Microsoft 365 Exchange with zero email loss.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'cloud-migration',
        iconBg: '#ecfdf5'
      },
      {
        id: 'user-lifecycle',
        title: 'User Lifecycle Management',
        badge: 'ON/OFFBOARDING',
        desc: 'Ongoing onboarding, mailbox delegation, access removal, and license reassignment handled promptly as your team changes.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: '24-7-support',
        iconBg: '#ecfdf5'
      },
      {
        id: 'license-opt',
        title: 'License Right-Sizing',
        badge: 'NO MARKUP',
        desc: 'Match user licenses to what people actually use (Business Basic vs Standard vs Premium) passed through at direct cost.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'finops',
        iconBg: '#f0fdf4'
      },
      {
        id: 'sharepoint-teams',
        title: 'Teams & SharePoint Governance',
        badge: 'COLLABORATION',
        desc: 'Secure cloud file storage with granular folder permissions, external sharing controls, and data loss prevention.',
        link: '/services/microsoft-365',
        linkText: 'Explore the service',
        iconType: 'microsoft-365',
        iconBg: '#f0f4fe'
      }
    ]
  },
  'Hosting & CI/CD': {
    hero: {
      badge: 'SPEED & STABILITY',
      title: 'Website Hosting & Deployment',
      desc: 'Not every website needs a complex multi-region cluster. Astroud provisions hosting and CI/CD pipelines matched to your actual code complexity and traffic.',
      btnText: 'Explore the service',
      link: '/services/website-hosting',
      image: '/images/website_hosting_cicd.jpg'
    },
    cards: [
      {
        id: 'matched-hosting',
        title: 'Complexity-Matched Hosting',
        badge: 'RIGHT HOST',
        desc: 'Optimized cloud VMs or containers for dynamic apps; fast managed hosting for simple sites. No forced expensive tiers.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'website-hosting',
        iconBg: '#f5f3ff'
      },
      {
        id: 'cicd-pipelines',
        title: 'Automated CI/CD Pipelines',
        badge: 'SAFE RELEASES',
        desc: 'Automated build and deployment workflows (GitHub Actions) for safe, push-to-deploy updates with rollbacks.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'managed-hosting',
        iconBg: '#f5f3ff'
      },
      {
        id: 'ssl-dns',
        title: 'SSL, Domain & DNS Setup',
        badge: 'MANAGED DNS',
        desc: 'Free auto-renewing SSL certificates, global DNS propagation, and Cloudflare CDN integration for fast worldwide loading.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'security',
        iconBg: '#eff6ff'
      },
      {
        id: 'uptime-health',
        title: 'Uptime & Uptime Alerting',
        badge: 'MONITORED',
        desc: 'Proactive round-the-clock endpoint health checks with instant alerting if an outage or latency spike occurs.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: '24-7-support',
        iconBg: '#ecfdf5'
      },
      {
        id: 'perf-caching',
        title: 'Performance & Caching',
        badge: 'FAST LOAD',
        desc: 'Gzip/Brotli compression, image optimization, and edge caching to deliver sub-second page loads across devices.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'finops',
        iconBg: '#f0fdf4'
      },
      {
        id: 'backend-services',
        title: 'Database & API Integration',
        badge: 'FULL-STACK',
        desc: 'Database provisioning, environment variable secrets management, and scalable backend infrastructure.',
        link: '/services/website-hosting',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      }
    ]
  },
  'Backup & 24/7 Support': {
    hero: {
      badge: 'RESILIENCE & CARE',
      title: 'Verified Backups & Managed Retainer',
      desc: 'The most common backup failure is a job that silently fails for months while assumed to work. Astroud delivers verified monthly test restores and proactive ongoing care.',
      btnText: 'Explore the service',
      link: '/services/backup-recovery',
      image: '/images/metallic_shield_node.jpg'
    },
    cards: [
      {
        id: 'test-restores',
        title: 'Monthly Test Restores',
        badge: 'VERIFIED',
        desc: 'You receive monthly reports proving backups actually restore correctly into functional systems—not just a green job log.',
        link: '/services/backup-recovery',
        linkText: 'Explore the service',
        iconType: 'backup-recovery',
        iconBg: '#fffbeb'
      },
      {
        id: 'ransomware-30d',
        title: '30-Day Version History',
        badge: 'RANSOMWARE PROOF',
        desc: 'Automated in-region cloud sync to AWS S3 / Azure Blob with immutable version history to withstand ransomware and human error.',
        link: '/services/backup-recovery',
        linkText: 'Explore the service',
        iconType: 'security',
        iconBg: '#eff6ff'
      },
      {
        id: 'incident-response',
        title: 'Priority Incident Response',
        badge: 'RAPID SLA',
        desc: 'Guaranteed response times from senior engineers when infrastructure breaks, keeping business impact to a minimum.',
        link: '/services/24-7-support',
        linkText: 'Explore the service',
        iconType: '24-7-support',
        iconBg: '#ecfdf5'
      },
      {
        id: 'patching-health',
        title: 'Proactive OS & Cloud Patching',
        badge: 'MAINTENANCE',
        desc: 'Routine security patching and configuration audits applied without causing midday disruptions to your workflow.',
        link: '/services/24-7-support',
        linkText: 'Explore the service',
        iconType: 'cloud-infrastructure',
        iconBg: '#ebf5ff'
      },
      {
        id: 'finops-review',
        title: 'Monthly Cost Optimization',
        badge: 'FINOPS',
        desc: 'Ongoing audit of cloud bills to identify orphaned storage, idle VMs, and reservation discounts that save real money.',
        link: '/services/24-7-support',
        linkText: 'Explore the service',
        iconType: 'finops',
        iconBg: '#f0fdf4'
      },
      {
        id: 'no-lockin',
        title: 'Flat Retainer, No Lock-In',
        badge: 'CANCEL ANYTIME',
        desc: 'Predictable monthly flat fee covering ongoing support and management. No multi-year contracts; cancel anytime.',
        link: '/pricing',
        linkText: 'Explore the service',
        iconType: 'managed-hosting',
        iconBg: '#f5f3ff'
      }
    ]
  }
};

export default function ExploreToolsSection() {
  const [activeTab, setActiveTab] = useState('All Services');
  const currentContent = catalog[activeTab] || catalog['All Services'];
  const { hero, cards } = currentContent;

  return (
    <section className="explore-tools-section" id="home-services">
      <div className="explore-tools-ambient" />
      <div className="explore-tools-container">
        {/* Section Header */}
        <div className="explore-tools-header">
          <div className="explore-tools-eyebrow">WHAT WE DO</div>
          <h2 className="explore-tools-title">
            Explore services for bringing your cloud vision to life
          </h2>

          {/* Filter Pills with Pop Motion */}
          <div className="explore-tools-pills">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                className={`explore-pill ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left Hero Card + Right 6 Cards Grid with Pop-up Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="explore-tools-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* LEFT HERO CARD - Pop Up */}
            <motion.div
              key={`hero-${activeTab}`}
              className="explore-hero-card"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 340,
                damping: 24,
                delay: 0.04
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.22)',
                transition: { type: 'spring', stiffness: 400, damping: 20 }
              }}
            >
              <div className="explore-hero-visual">
                <img
                  src={hero.image}
                  alt={hero.title}
                  className="explore-hero-img"
                />
              </div>
              <div className="explore-hero-content">
                {hero.badge && (
                  <span className="explore-hero-badge">{hero.badge}</span>
                )}
                <h3 className="explore-hero-title">{hero.title}</h3>
                <p className="explore-hero-desc">{hero.desc}</p>
                <Link to={hero.link} className="explore-hero-btn">
                  {hero.btnText}
                </Link>
              </div>
            </motion.div>

            {/* RIGHT 3x2 CARDS GRID - Staggered Pop Up Motion */}
            <div className="explore-cards-grid">
              {cards.map((tool, index) => (
                <motion.div
                  key={`${activeTab}-${tool.id}`}
                  className="explore-tool-card"
                  initial={{ opacity: 0, scale: 0.86, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 24,
                    delay: 0.06 + index * 0.05
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                    boxShadow: '0 14px 32px rgba(0, 78, 140, 0.12)',
                    borderColor: '#93c5fd',
                    transition: { type: 'spring', stiffness: 450, damping: 22 }
                  }}
                >
                  <div>
                    {/* Tool Icon Box */}
                    <div
                      className="explore-tool-icon-wrap"
                      style={{ backgroundColor: tool.iconBg || '#f8f9fa' }}
                    >
                      <AstroudServiceIcon type={tool.iconType} size={30} />
                    </div>

                    {/* Tool Title */}
                    <h4 className="explore-tool-title">
                      <span>{tool.title}</span>
                      {tool.badge && (
                        <span className="explore-tool-badge">{tool.badge}</span>
                      )}
                    </h4>

                    {/* Tool Description */}
                    <p className="explore-tool-desc">{tool.desc}</p>
                  </div>

                  {/* Explore Link */}
                  <div className="explore-tool-footer">
                    <Link to={tool.link} className="explore-tool-link">
                      {tool.linkText || 'Explore the service'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
