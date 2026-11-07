import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Globe, Database, Server, ArrowLeft, Mail, CheckCircle2, FileText, UserCheck } from 'lucide-react';

export function Privacy() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', color: '#0F172A' }}>
      {/* Hero Header */}
      <header className="page-hero" style={{ padding: '80px 0 50px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="shell">
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#475569',
              fontSize: 13.5,
              fontWeight: 600,
              marginBottom: 20,
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
          <div className="eyebrow" style={{ color: '#2563EB', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Data Protection & Trust Center
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, color: '#0F172A', margin: '8px 0 16px', letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748B', fontSize: 16, maxWidth: 680, margin: 0, lineHeight: 1.6 }}>
            Effective Date: <strong>October 22, 2026</strong>. Learn how Astroud collects, encrypts, and handles organizational telemetry and customer data in accordance with global privacy frameworks.
          </p>
        </div>
      </header>

      {/* Main Privacy Body */}
      <section className="section" style={{ padding: '60px 0 100px', background: '#FFFFFF' }}>
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: 60, alignItems: 'start' }}>
          {/* Article Body */}
          <article style={{ lineHeight: 1.8, fontSize: 15.5, color: '#334155' }}>
            {/* Quick Principles Card */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '24px', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>
                <Lock size={20} color="#10B981" />
                <span>Our Core Privacy Principles</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, fontSize: 13.5 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 4 }} />
                  <span><strong>Zero Data Monetization:</strong> We never sell customer or telemetry data to third parties.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 4 }} />
                  <span><strong>Full Encryption:</strong> 256-bit AES at rest and TLS 1.3 in transit across all endpoints.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 4 }} />
                  <span><strong>Sovereignty:</strong> Data remains hosted strictly in your chosen geographic cloud regions.</span>
                </div>
              </div>
            </div>

            <section id="collection" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                1. Information We Collect
              </h2>
              <p>
                Astroud collects information necessary to deliver, monitor, and protect your cloud environment. We categorize collected information as follows:
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 10 }}>
                  <strong>Account & Contact Information:</strong> Name, work email address, company name, phone number, and billing details provided during onboarding.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>Technical Telemetry & Infrastructure Metrics:</strong> Cloud resource utilization (CPU, memory, storage volumes), network bandwidth, latency data, error rates, and automated health heartbeats.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>Audit & Security Logs:</strong> Administrative console access times, IP addresses, authentication tokens, and user actions recorded in compliance with SOC 2 audit trails.
                </li>
                <li style={{ marginBottom: 10 }}>
                  <strong>Customer Content:</strong> Any application files, container images, or database backups you configure Astroud to manage on your behalf.
                </li>
              </ul>
            </section>

            <section id="usage" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                2. How We Use Collected Information
              </h2>
              <p>
                We use information strictly for operational and architectural delivery purposes:
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}>To deploy, orchestrate, and optimize your cloud instances and container workloads.</li>
                <li style={{ marginBottom: 8 }}>To detect security anomalies, brute-force attempts, and automated disaster recovery triggers.</li>
                <li style={{ marginBottom: 8 }}>To provide 24/7 dedicated engineering support and incident resolution.</li>
                <li style={{ marginBottom: 8 }}>To generate monthly transparency invoices and FinOps cloud spend optimization reports.</li>
                <li style={{ marginBottom: 8 }}>To satisfy statutory compliance and regulatory reporting obligations.</li>
              </ul>
            </section>

            <section id="security" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                3. Enterprise Security & Encryption
              </h2>
              <p>
                Security is foundational to everything Astroud operates. We implement defense-in-depth protocols:
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}><strong>Data at Rest:</strong> Encrypted using industry-standard AES-256 with customer-managed or AWS/Azure Key Management Services (KMS).</li>
                <li style={{ marginBottom: 8 }}><strong>Data in Transit:</strong> Secured via TLS 1.3 encryption across all public and internal service interconnects.</li>
                <li style={{ marginBottom: 8 }}><strong>Zero Trust Access:</strong> Role-based access controls (RBAC), multi-factor authentication (MFA), and ephemeral session tokens for all Astroud engineers.</li>
                <li style={{ marginBottom: 8 }}><strong>Vulnerability Management:</strong> Continuous container image scanning, automated dependency auditing, and external penetration audits.</li>
              </ul>
            </section>

            <section id="subprocessors" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                4. Infrastructure Sub-Processors
              </h2>
              <p>
                Astroud works with trusted enterprise infrastructure providers to deliver high-availability cloud environments. Sub-processors are bound by stringent Data Protection Addenda (DPA):
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 16 }}>
                <div style={{ padding: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8 }}>
                  <strong>Amazon Web Services (AWS)</strong>
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748B' }}>Compute, storage, IAM, and networking infrastructure.</p>
                </div>
                <div style={{ padding: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8 }}>
                  <strong>Microsoft Azure</strong>
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748B' }}>Enterprise directory (Entra ID), 365 services, and hybrid cloud nodes.</p>
                </div>
                <div style={{ padding: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8 }}>
                  <strong>Google Cloud Platform</strong>
                  <p style={{ margin: '4px 0 0', fontSize: 13, color: '#64748B' }}>Kubernetes engine and multi-region analytical clusters.</p>
                </div>
              </div>
            </section>

            <section id="rights" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                5. Your Privacy Rights (GDPR & CCPA)
              </h2>
              <p>
                Depending on your location and governing data protection laws, you possess the following rights regarding your personal and organizational records:
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}><strong>Right of Access:</strong> Request a full copy of personal telemetry and account data retained by Astroud.</li>
                <li style={{ marginBottom: 8 }}><strong>Right of Rectification:</strong> Update inaccurate or incomplete administrative profile records directly from your <Link to="/profile" style={{ color: '#2563EB', fontWeight: 600 }}>Account Profile</Link>.</li>
                <li style={{ marginBottom: 8 }}><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request the permanent purge of your account and backup archives upon contract conclusion.</li>
                <li style={{ marginBottom: 8 }}><strong>Right to Portability:</strong> Export all configuration templates, architecture definitions, and raw data dumps in open formats.</li>
              </ul>
            </section>

            <section id="retention" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                6. Data Retention & Incident Response
              </h2>
              <p>
                We retain account records for the duration of your active subscription and up to ninety (90) days following termination for audit compliance and smooth transition. Backup snapshots are rotated and expunged in accordance with your configured backup retention policy (default: 30 days).
              </p>
              <p>
                In the event of a verified security incident affecting customer data, Astroud will notify designated technical administrators within twenty-four (24) hours of verification in accordance with statutory requirements.
              </p>
            </section>

            <section id="contact" style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                7. Contact Our Data Protection Team
              </h2>
              <p>
                For data protection requests, GDPR inquiries, or Data Processing Addendum (DPA) execution, please contact our Data Protection Officer:
              </p>
              <div style={{ padding: '16px 20px', background: '#F8FAFC', borderRadius: 8, border: '1px solid #E2E8F0', marginTop: 12 }}>
                <strong>Astroud Data Protection Officer (DPO)</strong><br />
                Email: <a href="mailto:privacy@astroud.com" style={{ color: '#2563EB' }}>privacy@astroud.com</a><br />
                General Security: <a href="mailto:security@astroud.com" style={{ color: '#2563EB' }}>security@astroud.com</a><br />
                Bangalore, India — Serving Global Cloud Deployments
              </div>
            </section>
          </article>

          {/* Quick Navigation Sidebar */}
          <aside style={{ position: 'sticky', top: 100 }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: 22 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>
                Privacy Sections
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
                <a href="#collection" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">1. Information We Collect</a>
                <a href="#usage" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">2. How We Use Data</a>
                <a href="#security" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">3. Security & Encryption</a>
                <a href="#subprocessors" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">4. Sub-Processors</a>
                <a href="#rights" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">5. Your Privacy Rights</a>
                <a href="#retention" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">6. Data Retention</a>
                <a href="#contact" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">7. Contact DPO</a>
              </nav>

              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '20px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Related Documents</span>
                <Link to="/terms" style={{ fontSize: 13, color: '#2563EB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FileText size={14} /> Terms of Service →
                </Link>
                <Link to="/about" style={{ fontSize: 13, color: '#2563EB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={14} /> About Astroud →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
