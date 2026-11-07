import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, CheckCircle2, Lock, Scale, AlertCircle, ArrowLeft, Mail } from 'lucide-react';

export function Terms() {
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
            Legal Agreements & Governance
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, color: '#0F172A', margin: '8px 0 16px', letterSpacing: '-0.5px' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#64748B', fontSize: 16, maxWidth: 680, margin: 0, lineHeight: 1.6 }}>
            Effective Date: <strong>October 22, 2026</strong>. Please read these terms carefully before accessing or provisioning managed cloud infrastructure through the Astroud Platform.
          </p>
        </div>
      </header>

      {/* Main Legal Content */}
      <section className="section" style={{ padding: '60px 0 100px', background: '#FFFFFF' }}>
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: 60, alignItems: 'start' }}>
          {/* Article Body */}
          <article style={{ lineHeight: 1.8, fontSize: 15.5, color: '#334155' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 24px', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
                <ShieldCheck size={20} color="#2563EB" />
                <span>Enterprise Terms Summary</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>
                These Terms of Service govern your access to and use of Astroud Technologies (&ldquo;Astroud&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) cloud orchestration, migration, hosting, and managed IT services. By creating an account or executing a service agreement, you agree to these terms.
              </p>
            </div>

            <section id="acceptance" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By registering for an account, accessing our cloud control panel, or entering into an enterprise service order, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our <Link to="/privacy" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'underline' }}>Privacy Policy</Link>. If you are accepting on behalf of an entity, you warrant that you possess full legal authority to bind that entity.
              </p>
            </section>

            <section id="services" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                2. Cloud Infrastructure & Platform Services
              </h2>
              <p>
                Astroud provides enterprise managed cloud services, architecture design, migration roadmaps, 24/7 technical monitoring, and automated disaster recovery across major public cloud providers (including Amazon Web Services, Microsoft Azure, and Google Cloud Platform).
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}><strong>Service Level Agreements (SLAs):</strong> Production workloads under our Professional and Enterprise tiers carry a 99.99% monthly availability SLA, subject to scheduled maintenance windows.</li>
                <li style={{ marginBottom: 8 }}><strong>Maintenance Windows:</strong> Routine kernel patches and non-disruptive platform updates occur during pre-announced maintenance hours (typically 01:00–04:00 UTC on weekends).</li>
                <li style={{ marginBottom: 8 }}><strong>Third-Party Dependencies:</strong> Certain infrastructure components operate atop underlying cloud hyperscalers. Astroud will proactively mitigate hyperscaler disruptions but is not liable for region-wide catastrophic events beyond commercial control.</li>
              </ul>
            </section>

            <section id="accounts" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                3. Account Security & Responsibilities
              </h2>
              <p>
                You are responsible for safeguarding your login credentials, API keys, and session tokens. You must immediately notify Astroud of any unauthorized session access or suspected credential compromise at <a href="mailto:security@astroud.com" style={{ color: '#2563EB', fontWeight: 600 }}>security@astroud.com</a>.
              </p>
              <p>
                Multi-Factor Authentication (MFA) is strictly mandatory on all administrative console roles to maintain SOC 2 compliance. You agree not to reverse-engineer, probe for vulnerabilities, or conduct unauthorized penetration tests without explicit prior written authorization from Astroud.
              </p>
            </section>

            <section id="billing" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                4. Subscriptions, Invoicing & Payments
              </h2>
              <p>
                Managed services are billed on a recurring monthly or annual subscription basis as defined in your service tier or custom Master Services Agreement (MSA).
              </p>
              <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 16 }}>
                <li style={{ marginBottom: 8 }}><strong>No Hidden Add-ons:</strong> Baseline automated backup and 24/7 incident response are built directly into active tier pricing.</li>
                <li style={{ marginBottom: 8 }}><strong>Payment Terms:</strong> Invoices are payable within 30 calendar days of invoice delivery. Overdue balances may incur a late charge of 1.5% per month or the maximum permissible by law.</li>
                <li style={{ marginBottom: 8 }}><strong>Cancellation:</strong> You may cancel or adjust recurring monthly subscription tiers with thirty (30) days written notice prior to the next billing cycle.</li>
              </ul>
            </section>

            <section id="data-ownership" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                5. Customer Data & Confidentiality
              </h2>
              <p>
                <strong>You retain 100% ownership and intellectual property rights</strong> over all data, code, databases, and customer records deployed or processed within your Astroud cloud tenants.
              </p>
              <p>
                Astroud will never sell, monetize, or inspect customer payload data. Astroud accesses customer environments solely to provide automated operations, resolve support tickets, or satisfy valid legal processes in compliance with our Data Processing Addendum (DPA).
              </p>
            </section>

            <section id="liability" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, neither Astroud nor its directors, employees, or partners shall be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, or operational downtime.
              </p>
              <p>
                Astroud&rsquo;s aggregate liability for all claims arising out of or related to these Terms or the services shall be capped at the total amount paid by you to Astroud during the twelve (12) months preceding the incident giving rise to the claim.
              </p>
            </section>

            <section id="termination" style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                7. Termination
              </h2>
              <p>
                Either party may terminate a service agreement upon material breach by the other party if such breach remains uncured for thirty (30) days following written notice. Upon termination, Astroud will provide transition assistance and data export capabilities for a period of sixty (60) days.
              </p>
            </section>

            <section id="contact" style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', marginBottom: 14, letterSpacing: '-0.3px' }}>
                8. Contact & Legal Notices
              </h2>
              <p>
                If you have questions regarding these Terms of Service or need to serve legal notices, please contact our legal counsel:
              </p>
              <div style={{ padding: '16px 20px', background: '#F8FAFC', borderRadius: 8, border: '1px solid #E2E8F0', marginTop: 12 }}>
                <strong>Astroud Technologies Legal Operations</strong><br />
                Email: <a href="mailto:legal@astroud.com" style={{ color: '#2563EB' }}>legal@astroud.com</a><br />
                Address: Astroud Technologies, Bangalore, India — Global Cloud Operations
              </div>
            </section>
          </article>

          {/* Quick Navigation Sidebar */}
          <aside style={{ position: 'sticky', top: 100 }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: 22 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>
                On This Page
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
                <a href="#acceptance" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">1. Acceptance of Terms</a>
                <a href="#services" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">2. Cloud Infrastructure</a>
                <a href="#accounts" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">3. Account Security</a>
                <a href="#billing" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">4. Subscriptions & Billing</a>
                <a href="#data-ownership" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">5. Customer Data</a>
                <a href="#liability" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">6. Limitation of Liability</a>
                <a href="#termination" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">7. Termination</a>
                <a href="#contact" style={{ color: '#475569', textDecoration: 'none' }} className="hover:text-blue-600">8. Contact Us</a>
              </nav>

              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '20px 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#64748B' }}>Related Documents</span>
                <Link to="/privacy" style={{ fontSize: 13, color: '#2563EB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FileText size={14} /> Privacy Policy →
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

export default Terms;
