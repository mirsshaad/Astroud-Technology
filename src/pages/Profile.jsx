import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck, Server, Key, LogOut, CheckCircle2, Building, Mail, Phone, MapPin, Calendar, Edit2, Zap, Clock, Save, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth-profile.css';

export function Profile() {
  const { user, loading, logout, updateUser, changePassword } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    company: user?.company || '',
    phone: user?.phone || '',
    location: user?.location || '',
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/signin');
    } else if (user) {
      setEditForm({
        name: user.name || '',
        company: user.company || '',
        phone: user.phone || '',
        location: user.location || '',
      });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0F172A', gap: 12 }}>
        <div style={{ width: 36, height: 36, border: '3px solid #E2E8F0', borderTopColor: '#2563EB', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <p style={{ fontSize: 14, color: '#64748B', fontWeight: 500 }}>Verifying Astroud security session...</p>
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/signout');
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setError('');
    setNotification('');
    try {
      await updateUser(editForm);
      setIsEditing(false);
      setNotification('Profile details updated successfully!');
      setTimeout(() => setNotification(''), 4000);
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    }
  };

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New password and confirmation do not match.');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }

    setPasswordLoading(true);
    try {
      await changePassword(passwordForm.currentPassword, passwordForm.newPassword);
      setShowPasswordModal(false);
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setNotification('Password updated successfully!');
      setTimeout(() => setNotification(''), 4000);
    } catch (err) {
      setPasswordError(err.message || 'Failed to update password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  const userInitials = (user.name || 'User')
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="profile-page">
      <div className="shell">
        {notification && (
          <div className="auth-error-msg" style={{ background: '#ECFDF5', borderColor: '#A7F3D0', color: '#065F46', marginBottom: 20 }}>
            <CheckCircle2 size={16} color="#059669" />
            <span>{notification}</span>
          </div>
        )}

        {error && (
          <div className="auth-error-msg" style={{ marginBottom: 20 }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Profile Hero Header */}
        <div className="profile-hero">
          <div className="profile-user-info">
            <div className="profile-avatar-wrapper">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="profile-avatar" />
              ) : (
                <div className="profile-avatar-fallback">{userInitials}</div>
              )}
            </div>
            <div className="profile-meta">
              <h1>{user.name}</h1>
              <p>{user.role || 'Cloud Account Administrator'} · {user.company}</p>
              <div className="profile-badges">
                <span className="badge badge-primary">
                  <Zap size={12} /> {user.plan || 'Professional Tier'}
                </span>
                <span className="badge badge-success">
                  <CheckCircle2 size={12} /> Account Active
                </span>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button onClick={handleLogout} className="btn-danger-ghost">
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>

        {/* Profile Navigation Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <User size={16} /> Overview & Details
          </button>
          <button
            className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <Server size={16} /> Active Cloud Services ({user.services?.length || 3})
          </button>
          <button
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <ShieldCheck size={16} /> Security & Access
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="profile-card">
              <div className="profile-card-header">
                <h2>
                  <User size={20} style={{ color: '#60a5fa' }} /> Personal & Organization Info
                </h2>
                {!isEditing ? (
                  <button onClick={() => setIsEditing(true)} className="btn ghost" style={{ padding: '6px 14px', fontSize: 13 }}>
                    <Edit2 size={14} style={{ marginRight: 6 }} /> Edit Profile
                  </button>
                ) : (
                  <button onClick={handleSaveProfile} className="btn primary" style={{ padding: '6px 14px', fontSize: 13 }}>
                    <Save size={14} style={{ marginRight: 6 }} /> Save Changes
                  </button>
                )}
              </div>

              {!isEditing ? (
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label"><User size={12} /> Full Name</span>
                    <span className="info-value">{user.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label"><Mail size={12} /> Email Address</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label"><Building size={12} /> Organization</span>
                    <span className="info-value">{user.company}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label"><Phone size={12} /> Phone Number</span>
                    <span className="info-value">{user.phone || 'Not specified'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label"><MapPin size={12} /> Location / Region</span>
                    <span className="info-value">{user.location || 'Global (US / APAC)'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label"><Calendar size={12} /> Member Since</span>
                    <span className="info-value">{user.joinedDate || 'August 2026'}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveProfile} className="form-grid">
                  <label className="field">
                    Full Name
                    <input
                      type="text"
                      className="form-input no-icon"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      required
                    />
                  </label>
                  <label className="field">
                    Company
                    <input
                      type="text"
                      className="form-input no-icon"
                      value={editForm.company}
                      onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                    />
                  </label>
                  <label className="field">
                    Phone Number
                    <input
                      type="text"
                      className="form-input no-icon"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    />
                  </label>
                  <label className="field">
                    Location
                    <input
                      type="text"
                      className="form-input no-icon"
                      value={editForm.location}
                      onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    />
                  </label>
                </form>
              )}
            </div>

            <div className="profile-card">
              <div className="profile-card-header">
                <h2>
                  <Zap size={20} style={{ color: '#eab308' }} /> Account Tier & SLA Summary
                </h2>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Active Subscription</span>
                  <span className="info-value" style={{ color: '#60a5fa', fontWeight: 700 }}>{user.plan || 'Professional Tier'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">SLA Guarantee</span>
                  <span className="info-value">99.99% High Availability</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Support Level</span>
                  <span className="info-value">24/7 Priority Engineer Access</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Billing Cycle</span>
                  <span className="info-value">Monthly · Auto-Renew</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cloud Services */}
        {activeTab === 'services' && (
          <div className="tab-content">
            <div className="profile-card">
              <div className="profile-card-header">
                <h2>
                  <Server size={20} style={{ color: '#38bdf8' }} /> Your Managed Infrastructure Services
                </h2>
                <button onClick={() => navigate('/services')} className="btn primary" style={{ padding: '6px 14px', fontSize: 13 }}>
                  + Request New Service
                </button>
              </div>

              <div className="service-list">
                {(user.services || []).map((service, index) => (
                  <div key={index} className="service-card-item">
                    <div className="service-meta">
                      <h3>{service.name}</h3>
                      <p>
                        {service.region && `Region: ${service.region} · `}
                        {service.tier && `Tier: ${service.tier} · `}
                        {service.users && `Seats: ${service.users} users · `}
                        {service.storage && `Storage: ${service.storage}`}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span className="badge badge-success">
                        <CheckCircle2 size={12} /> {service.status}
                      </span>
                      <button
                        onClick={() => alert(`Opening control panel for ${service.name}...`)}
                        className="btn ghost"
                        style={{ padding: '6px 12px', fontSize: 12 }}
                      >
                        Manage →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Security & Access */}
        {activeTab === 'security' && (
          <div className="tab-content">
            <div className="profile-card">
              <div className="profile-card-header">
                <h2>
                  <ShieldCheck size={20} style={{ color: '#34d399' }} /> Authentication & Session Security
                </h2>
              </div>
              <div className="info-grid" style={{ marginBottom: 20 }}>
                <div className="info-item">
                  <span className="info-label">Two-Factor Authentication</span>
                  <span className="info-value" style={{ color: '#34d399' }}>Enabled (Authenticator App)</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Last Login</span>
                  <span className="info-value"><Clock size={12} /> Active JWT Session</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Active Devices</span>
                  <span className="info-value">1 Session (Current Device)</span>
                </div>
              </div>

              <div style={{ paddingTop: 16, borderTop: '1px solid #E2E8F0', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={() => setShowPasswordModal(true)} className="btn ghost" style={{ fontSize: 13 }}>
                  <Key size={14} style={{ marginRight: 6 }} /> Change Password
                </button>
                <button onClick={handleLogout} className="btn ghost" style={{ fontSize: 13, color: '#DC2626' }}>
                  Revoke All Active Sessions
                </button>
              </div>

              {showPasswordModal && (
                <div style={{ marginTop: 20, padding: 24, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 14 }}>Change Password</h3>
                  {passwordError && (
                    <div className="auth-error-msg" style={{ marginBottom: 12 }}>
                      <span>{passwordError}</span>
                    </div>
                  )}
                  <form onSubmit={handleChangePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
                    <label className="field" style={{ margin: 0 }}>
                      Current Password
                      <input
                        type="password"
                        className="form-input no-icon"
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                        required
                      />
                    </label>
                    <label className="field" style={{ margin: 0 }}>
                      New Password
                      <input
                        type="password"
                        className="form-input no-icon"
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                        required
                        minLength={6}
                      />
                    </label>
                    <label className="field" style={{ margin: 0 }}>
                      Confirm New Password
                      <input
                        type="password"
                        className="form-input no-icon"
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                        required
                      />
                    </label>
                    <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                      <button type="submit" className="btn primary" disabled={passwordLoading} style={{ padding: '8px 16px', fontSize: 13 }}>
                        {passwordLoading ? 'Updating...' : 'Update Password'}
                      </button>
                      <button type="button" onClick={() => setShowPasswordModal(false)} className="btn ghost" style={{ padding: '8px 16px', fontSize: 13 }}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
