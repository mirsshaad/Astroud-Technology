import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Lock, Mail, User, Building, ChevronLeft, Check, ShieldCheck, RefreshCw } from 'lucide-react';
import '../../styles/auth-profile.css';

const GoogleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669 C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62 c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401 c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
  </svg>
);

const AppleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M18.71,19.5 C17.88,20.74 17,21.95 15.66,21.97 C14.32,22 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.09,21.97 C7.79,22 6.87,20.68 6.04,19.47 C4.34,17 3.04,12.41 4.79,9.37 C5.66,7.86 7.22,6.91 8.92,6.88 C10.22,6.86 11.45,7.76 12.24,7.76 C13.03,7.76 14.53,6.66 16.08,6.83 C16.73,6.86 18.56,7.09 19.74,8.82 C19.64,8.88 17.57,10.09 17.59,12.58 C17.62,15.58 20.21,16.58 20.25,16.6 C20.22,16.69 19.82,18.08 18.71,19.5 Z M15.42,5.16 C16.12,4.31 16.59,3.13 16.46,1.95 C15.43,1.99 14.18,2.64 13.44,3.5 C12.78,4.27 12.2,5.48 12.36,6.64 C13.51,6.73 14.71,6.01 15.42,5.16 Z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const SOCIAL_PROFILES = {
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

export function AuthPage({ defaultMode = 'signin' }) {
  const [mode, setMode] = useState(defaultMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Social OAuth Modal State
  const [socialProvider, setSocialProvider] = useState(null);
  const [socialStep, setSocialStep] = useState('select'); // 'select' | 'authenticating'
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [writeInEmail, setWriteInEmail] = useState('');

  const { login, signup, socialLogin } = useAuth();
  const navigate = useNavigate();

  const handleOpenSocialModal = (providerName) => {
    setSocialProvider(providerName);
    setSocialStep('select');
    setSelectedAccount(null);
    setWriteInEmail('');
  };

  const handleConfirmSocialAccount = async (account) => {
    setSelectedAccount(account);
    setSocialStep('authenticating');

    setTimeout(async () => {
      try {
        await socialLogin({
          provider: socialProvider,
          name: account.name,
          email: account.email,
          avatar: account.avatar,
          company: account.company || `${socialProvider} Account`
        });
        setSocialProvider(null);
        navigate('/profile');
      } catch (err) {
        setError(`Failed to sign in with ${socialProvider}: ${err.message}`);
        setSocialProvider(null);
      }
    }, 1200);
  };

  const handleCustomSocialSubmit = (e) => {
    e.preventDefault();
    if (!writeInEmail) return;
    const customAcc = {
      name: writeInEmail.split('@')[0].replace('.', ' '),
      email: writeInEmail.trim().toLowerCase(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80',
      company: `${socialProvider} Custom Sign-On`
    };
    handleConfirmSocialAccount(customAcc);
  };

  const handleSubmit = async (e) => {
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
    } catch (err) {
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-split-layout">
      {/* Left Column — Decorative Brand Hero Panel */}
      <div className="auth-left-panel">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #050505, transparent)', opacity: 0.9, zIndex: 1 }} />
        
        {/* Brand Header */}
        <div style={{ zIndex: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="Astroud Logo" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', margin: 0, fontFamily: 'monospace' }}>ASTROUD</p>
        </div>

        {/* Testimonial Quote */}
        <div style={{ zIndex: 10, marginTop: 'auto', maxWidth: 480 }}>
          <blockquote style={{ margin: 0 }}>
            <p style={{ fontSize: 20, color: '#e2e8f0', fontWeight: 500, lineHeight: 1.6, marginBottom: 12 }}>
              &ldquo;This platform has helped us scale our cloud infrastructure effortlessly with top-tier security.&rdquo;
            </p>
            <footer style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 600, color: '#ffffff' }}>
              ~ Astroud Systems Team
            </footer>
          </blockquote>
        </div>

        {/* Animated Background Paths */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.4, pointerEvents: 'none' }}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>

      {/* Right Column — Auth Form Box */}
      <div className="auth-right-panel">
        {/* Back to Home Button */}
        <Link
          to="/"
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: '#94a3b8',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            padding: '8px 14px',
            borderRadius: 8,
            background: 'rgba(255, 255, 255, 0.05)',
            transition: 'all 0.2s'
          }}
        >
          <ChevronLeft size={16} /> Home
        </Link>

        <div className="auth-form-box">
          {/* Mobile Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }} className="lg:hidden">
            <img src="/logo.png" alt="Astroud Logo" style={{ height: 30, width: 'auto', objectFit: 'contain' }} />
            <p style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>ASTROUD</p>
          </div>

          <div>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p style={{ fontSize: 14, color: '#94a3b8', margin: 0 }}>
              {mode === 'signup'
                ? 'Join Astroud Cloud Platform and manage your enterprise infrastructure.'
                : 'Sign in to access your control panel and active cloud services.'}
            </p>
          </div>

          {error && (
            <div className="auth-error-msg">
              <span>{error}</span>
            </div>
          )}

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
            <span className="auth-separator-text">OR EMAIL</span>
            <div className="auth-separator-line" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Full Name *</span>
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
                  <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Company Name</span>
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
              <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Work Email Address *</span>
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
                <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>Password *</span>
                {mode === 'signin' && (
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('To reset your password, please contact support@astroud.com');
                    }}
                    style={{ fontSize: 12, color: '#94a3b8', textDecoration: 'underline' }}
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
                <span>Processing...</span>
              ) : (
                <>
                  <span>{mode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                  <Check size={16} />
                </>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: '#94a3b8' }}>
            {mode === 'signup' ? (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setError('');
                  }}
                  style={{ background: 'none', border: 'none', color: '#ffffff', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
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
                  style={{ background: 'none', border: 'none', color: '#ffffff', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Create an account
                </button>
              </span>
            )}
          </div>

          <p style={{ fontSize: 12, color: '#64748b', textAlign: 'center', margin: '14px 0 0 0', lineHeight: 1.5 }}>
            By continuing, you agree to Astroud's{' '}
            <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: '#94a3b8', textDecoration: 'underline' }}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: '#94a3b8', textDecoration: 'underline' }}>
              Privacy Policy
            </a>
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

function FloatingPaths({ position }) {
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
            strokeOpacity={0.15 + path.id * 0.04}
          />
        ))}
      </svg>
    </div>
  );
}
