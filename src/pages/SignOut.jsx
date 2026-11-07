import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, LogIn, Home, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth-profile.css';

export function SignOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    // Perform logout
    logout();

    // Auto-redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [logout, navigate]);

  return (
    <div className="signout-page">
      <div className="signout-card">
        <div className="signout-icon-wrap">
          <ShieldCheck size={36} />
        </div>

        <h1 className="signout-title">Signed Out Successfully</h1>
        <p className="signout-text">
          Your Astroud Cloud session has been securely terminated. Thank you for using Astroud Cloud Platform.
        </p>

        <div className="signout-actions">
          <Link to="/signin" className="btn primary" style={{ justifyContent: 'center' }}>
            <LogIn size={16} />
            Sign Back In
          </Link>
          <Link to="/" className="btn ghost" style={{ justifyContent: 'center' }}>
            <Home size={16} />
            Return to Homepage
          </Link>
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: '#94a3b8' }}>
          Redirecting to home in <strong>{countdown}s</strong>...{' '}
          <button
            onClick={() => setCountdown(9999)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: 13,
              padding: 0
            }}
          >
            Stay here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignOut;
