import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Lock, Mail, User, Building, ChevronLeft, Check, ShieldCheck, RefreshCw, Zap, Server, CheckCircle2 } from 'lucide-react';
import '../../styles/auth-profile.css';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669 C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62 c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401 c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
  </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.09,21.97 C7.79,22 6.87,20.68 6.04,19.47 C4.34,17 3.04,12.41 4.79,9.37 C5.66,7.86 7.22,6.91 8.92,6.88 C10.22,6.86 11.45,7.76 12.24,7.76 C13.03,7.76 14.53,6.66 16.08,6.83 C16.73,6.86 18.56,7.09 19.74,8.82 C19.64,8.88 17.57,10.09 17.59,12.58 C17.62,15.58 20.21,16.58 20.25,16.6 C20.22,16.69 19.82,18.08 18.71,19.5 Z M15.42,5.16 C16.12,4.31 16.59,3.13 16.46,1.95 C15.43,1.99 14.18,2.64 13.44,3.5 C12.78,4.27 12.2,5.48 12.36,6.64 C13.51,6.73 14.71,6.01 15.42,5.16 Z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface SocialProfile {
  name: string;
  email: string;
  avatar: string;
  company: string;
}

const SOCIAL_PROFILES: Record<string, SocialProfile[]> = {
  Google: [
    {
      name: 'Alex Morgan',
      email: 'alex.morgan@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      company: 'Google Workspace Account'
    },
    {
      name: 'Sarah Chen',
      email: 'sarah.chen.tech@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
      company: 'Google Cloud Partner'
    }
  ],
  Apple: [
    {
      name: 'Alex Morgan',
      email: 'alex.morgan@icloud.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      company: 'Apple ID Verified'
    },
    {
      name: 'Astroud Member',
      email: 'privaterelay@appleid.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      company: 'Apple Private Relay'
    }
  ],
  GitHub: [
    {
      name: 'Alex Morgan (@alex-astroud)',
      email: 'alex.morgan@github.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      company: 'GitHub Enterprise'
    }
  ]
};

export function AuthPage({ defaultMode = 'signin' }: { defaultMode?: 'signin' | 'signup' }) {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Social OAuth Modal State
  const [socialProvider, setSocialProvider] = useState<'Google' | 'Apple' | 'GitHub' | null>(null);
  const [socialStep, setSocialStep] = useState<'select' | 'authenticating'>('select');
  const [selectedAccount, setSelectedAccount] = useState<SocialProfile | null>(null);
  const [writeInEmail, setWriteInEmail] = useState('');

  const { login, signup, socialLogin } = useAuth();
  const navigate = useNavigate();

  const handleOpenSocialModal = (providerName: 'Google' | 'Apple' | 'GitHub') => {
    setSocialProvider(providerName);
    setSocialStep('select');
    setSelectedAccount(null);
    setWriteInEmail('');
  };

  const handleConfirmSocialAccount = async (account: SocialProfile) => {
    setSelectedAccount(account);
    setSocialStep('authenticating');

    setTimeout(async () => {
      try {
        if (socialProvider && socialLogin) {
          await socialLogin({
            provider: socialProvider,
            name: account.name,
            email: account.email,
            avatar: account.avatar,
            company: account.company || `${socialProvider} Account`
          });
        }
        setSocialProvider(null);
        navigate('/profile');
      } catch (err: any) {
        setError(`Failed to sign in with ${socialProvider}: ${err.message}`);
        setSocialProvider(null);
      }
    }, 1200);
  };

  const handleCustomSocialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!writeInEmail || !socialProvider) return;
    const customAcc: SocialProfile = {
      name: writeInEmail.split('@')[0].replace('.', ' '),
      email: writeInEmail.trim().toLowerCase(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80',
      company: `${socialProvider} Custom Sign-On`
    };
    handleConfirmSocialAccount(customAcc);
  };

  const handleQuickDemoLogin = async () => {
    setEmail('test@astroud.com');
    setPassword('password123');
    setLoading(true);
    setError('');
    try {
      await login('test@astroud.com', 'password123');
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Demo login failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (mode === 'signup' && !name) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        await signup({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || 'Astroud Partner Organization',
          password
        });
      } else {
        await login(email.trim(), password);
      }
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-split-layout">
      {/* Left Column — Decorative Brand Hero Panel (Dark Tech Theme) */}
      <div className="auth-left-panel">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        {/* Brand Header */}
        <div style={{ zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#ffffff' }}>
            <img src="/logo.png" alt="Astroud Logo" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
            <div>
              <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', margin: 0, fontFamily: 'monospace' }}>ASTROUD</p>
              <p style={{ fontSize: 11, color: '#94a3b8', margin: 0, letterSpacing: '0.04em' }}>CLOUD PLATFORM</p>
            </div>
          </Link>
          <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.14)', color: '#93c5fd', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Server size={12} /> AWS & Azure Ready
          </span>
        </div>

        {/* Center / Highlight Content */}
        <div style={{ zIndex: 10, margin: 'auto 0', maxWidth: 480 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 20, background: 'rgba(37, 99, 235, 0.18)', border: '1px solid rgba(59, 130, 246, 0.35)', color: '#93c5fd', fontSize: 12, fontWeight: 600, marginBottom: 20 }}>
            <ShieldCheck size={14} color="#60a5fa" />
            <span>Enterprise Infrastructure & Governance</span>
          </div>

          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.5px', marginBottom: 16 }}>
            Secure, audited control over every cloud workload.
          </h2>

          <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.6, marginBottom: 28 }}>
            Manage mission-critical multi-cloud deployments, automated backup routines, and 24/7 technical operations from one unified console.
          </p>

          {/* Testimonial Quote */}
          <blockquote style={{ margin: 0, padding: '16px 20px', borderRadius: 12, background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <p style={{ fontSize: 14.5, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.5, margin: '0 0 8px 0' }}>
              &ldquo;Astroud gave us the architectural clarity and continuous uptime our enterprise required from day one.&rdquo;
            </p>
            <footer style={{ fontFamily: 'monospace', fontSize: 12.5, fontWeight: 600, color: '#60a5fa' }}>
              ~ Chief Technology Officer, Enterprise Client
            </footer>
          </blockquote>
        </div>

        {/* Footer Badges */}
        <div style={{ zIndex: 10, display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: '#64748b' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle2 size={13} color="#10b981" /> 99.99% SLA Uptime
          </span>
          <span>·</span>
          <span>SOC 2 Type II Audited</span>
          <span>·</span>
          <span>256-bit TLS Encryption</span>
        </div>

        {/* Animated Background Paths */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.35, pointerEvents: 'none' }}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>

      {/* Right Column — Auth Form Box (Crisp Astroud White Theme) */}
      <div className="auth-right-panel">
        {/* Back to Home Button */}
        <Link
          to="/"
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: '#334155',
            fontSize: 13.5,
            fontWeight: 600,
            textDecoration: 'none',
            padding: '8px 14px',
            borderRadius: 8,
            background: '#F1F5F9',
            border: '1px solid #E2E8F0',
            transition: 'all 0.2s'
          }}
        >
          <ChevronLeft size={16} /> Home
        </Link>

        <div className="auth-form-box">
          {/* Mobile Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }} className="lg:hidden">
            <img src="/logo.png" alt="Astroud Logo" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
            <p style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', margin: 0, fontFamily: 'monospace' }}>ASTROUD</p>
          </div>

          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>
              {mode === 'signup'
                ? 'Join Astroud Cloud Platform and deploy enterprise infrastructure.'
                : 'Sign in to access your control panel, active services, and security.'}
            </p>
          </div>

          {error && (
            <div className="auth-error-msg">
              <span>{error}</span>
            </div>
          )}

          {/* Quick 1-Click Demo Login Box (Helps user/testers instantly log in) */}
          <div className="auth-demo-card">
            <div className="auth-demo-card-info">
              <span className="auth-demo-card-title">
                <Zap size={14} color="#f59e0b" /> Demo Account Access
              </span>
              <span className="auth-demo-card-desc">test@astroud.com · password123</span>
            </div>
            <button
              type="button"
              className="auth-demo-quick-btn"
              onClick={handleQuickDemoLogin}
              disabled={loading}
            >
              1-Click Sign In
            </button>
          </div>

          {/* Social Logins */}
          <div className="social-btn-group">
            <button
              type="button"
              className="social-btn"
              onClick={() => handleOpenSocialModal('Google')}
              disabled={loading}
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="social-btn"
              onClick={() => handleOpenSocialModal('Apple')}
              disabled={loading}
            >
              <AppleIcon />
              <span>Continue with Apple</span>
            </button>

            <button
              type="button"
              className="social-btn"
              onClick={() => handleOpenSocialModal('GitHub')}
              disabled={loading}
            >
              <GithubIcon />
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="auth-separator">
            <div className="auth-separator-line" />
            <span className="auth-separator-text">OR CONTINUE WITH WORK EMAIL</span>
            <div className="auth-separator-line" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>Full Name *</span>
                  <div className="form-input-wrapper">
                    <User size={16} className="form-input-icon" />
                    <input
                      placeholder="Alex Morgan"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>Company Name</span>
                  <div className="form-input-wrapper">
                    <Building size={16} className="form-input-icon" />
                    <input
                      placeholder="Acme Cloud Solutions"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>Work Email Address *</span>
              <div className="form-input-wrapper">
                <Mail size={16} className="form-input-icon" />
                <input
                  placeholder="name@company.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>Password *</span>
                {mode === 'signin' && (
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('To reset your password, please contact support@astroud.com or check your registered email.');
                    }}
                    style={{ fontSize: 12.5, color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}
                  >
                    Forgot password?
                  </a>
                )}
              </div>

              <div className="form-input-wrapper">
                <Lock size={16} className="form-input-icon" />
                <input
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="form-input-toggle"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} /> Processing...
                </span>
              ) : (
                <>
                  <span>{mode === 'signup' ? 'Create Account' : 'Sign In to Console'}</span>
                  <Check size={16} />
                </>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div style={{ textAlign: 'center', marginTop: 4, fontSize: 13.5, color: '#64748B' }}>
            {mode === 'signup' ? (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setError('');
                  }}
                  style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                >
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setError('');
                  }}
                  style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                >
                  Create an account
                </button>
              </span>
            )}
          </div>

          <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', margin: '8px 0 0 0', lineHeight: 1.5 }}>
            By continuing, you agree to Astroud's{' '}
            <Link to="/terms" style={{ color: '#64748B', textDecoration: 'underline' }}>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" style={{ color: '#64748B', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Realistic Social OAuth Modal */}
      {socialProvider && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
        }}>
          <div style={{
            width: '100%',
            maxWidth: 420,
            background: socialProvider === 'Apple' ? '#000000' : '#111827',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.1)',
            position: 'relative',
            color: '#FFFFFF'
          }}>
            {socialStep === 'authenticating' ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <RefreshCw size={40} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 20px', color: '#FFFFFF' }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px 0', color: '#FFFFFF' }}>
                  Authenticating with {socialProvider}...
                </h3>
                <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>
                  Connecting {selectedAccount?.email} to Astroud Control Panel.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {socialProvider === 'Google' && <GoogleIcon width="22" height="22" />}
                    {socialProvider === 'Apple' && <AppleIcon width="22" height="22" />}
                    {socialProvider === 'GitHub' && <GithubIcon width="22" height="22" />}
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>Sign in with {socialProvider}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSocialProvider(null)}
                    style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 18, fontWeight: 700 }}
                  >
                    ✕
                  </button>
                </div>

                <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20, lineHeight: 1.5 }}>
                  Select an account to authorize and sign in to <strong>astroud.com</strong>:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  {(SOCIAL_PROFILES[socialProvider] || []).map((acc) => (
                    <button
                      key={acc.email}
                      type="button"
                      onClick={() => handleConfirmSocialAccount(acc)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 14px',
                        borderRadius: 10,
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#FFFFFF',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'}
                    >
                      <img src={acc.avatar} alt={acc.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{acc.name}</div>
                        <div style={{ fontSize: 12, color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{acc.email}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleCustomSocialSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
                  <span style={{ fontSize: 12, color: '#94a3b8' }}>Or enter another {socialProvider} email:</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="email"
                      placeholder={`your.${socialProvider.toLowerCase()}@example.com`}
                      value={writeInEmail}
                      onChange={(e) => setWriteInEmail(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: 8,
                        background: '#040a18',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#FFFFFF',
                        fontSize: 13
                      }}
                    />
                    <button
                      type="submit"
                      disabled={!writeInEmail}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 8,
                        background: '#FFFFFF',
                        color: '#050505',
                        border: 'none',
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: writeInEmail ? 'pointer' : 'not-allowed',
                        opacity: writeInEmail ? 1 : 0.5
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </form>

                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#64748b', justifyContent: 'center' }}>
                  <ShieldCheck size={14} color="#34d399" />
                  <span>Verified 256-bit OAuth SSL Session</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    d: `M-${300 - i * 25 * position} -${100 + i * 20}C-${
      300 - i * 25 * position
    } -${100 + i * 20} -${200 - i * 25 * position} ${150 - i * 20} ${
      100 - i * 25 * position
    } ${250 - i * 20}C${500 - i * 25 * position} ${350 - i * 20} ${
      600 - i * 25 * position
    } ${700 - i * 20} ${600 - i * 25 * position} ${700 - i * 20}`,
    width: 0.8 + i * 0.1,
  }));

  return (
    <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
      <svg
        style={{ width: '100%', height: '100%', color: '#ffffff' }}
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.12 + path.id * 0.03}
          />
        ))}
      </svg>
    </div>
  );
}

export default AuthPage;
