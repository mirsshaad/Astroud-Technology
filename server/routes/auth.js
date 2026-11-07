import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';
import { authenticateToken, JWT_SECRET } from '../middleware/auth.js';

const router = express.Router();

// Helper to sanitize user object (remove sensitive fields)
function sanitizeUser(user) {
  if (!user) return null;
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const existingUser = db.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email address already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = db.createUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      passwordHash,
      company: company || 'Astroud Partner Organization',
      role: 'Account Admin',
      plan: 'Professional Tier',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80`,
      phone: '',
      location: 'Global (US / APAC)',
      services: [
        { name: 'Cloud Infrastructure', status: 'Operational', tier: 'High Performance', region: 'us-east-1' },
        { name: 'Microsoft 365 Enterprise', status: 'Active', tier: 'E5 Security', users: 48 },
        { name: 'Managed Backup & Disaster Recovery', status: 'Healthy', lastBackup: '10 mins ago', storage: '2.4 TB' }
      ]
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Account created successfully.',
      token,
      user: sanitizeUser(newUser)
    });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Server error during account creation.' });
  }
});

// POST /api/auth/social
router.post('/social', async (req, res) => {
  try {
    const { provider, name, email, avatar, company } = req.body;
    if (!provider || !email || !name) {
      return res.status(400).json({ error: 'Provider, name, and email are required.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    let user = db.findUserByEmail(cleanEmail);

    if (!user) {
      const dummyPasswordHash = await bcrypt.hash(`SocialSecret_${provider}_${Date.now()}`, 10);
      user = db.createUser({
        name: name.trim(),
        email: cleanEmail,
        passwordHash: dummyPasswordHash,
        company: company || `${provider} Single Sign-On`,
        role: 'Account Admin',
        plan: 'Professional Tier',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        avatar: avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80`,
        phone: '',
        location: 'Global (US / APAC)',
        services: [
          { name: 'Cloud Infrastructure', status: 'Operational', tier: 'High Performance', region: 'us-east-1' },
          { name: 'Microsoft 365 Enterprise', status: 'Active', tier: 'E5 Security', users: 48 },
          { name: 'Managed Backup & Disaster Recovery', status: 'Healthy', lastBackup: '10 mins ago', storage: '2.4 TB' }
        ]
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: `Signed in with ${provider} successfully.`,
      token,
      user: sanitizeUser(user)
    });
  } catch (err) {
    console.error('Error during social authentication:', err);
    res.status(500).json({ error: 'Server error during social authentication.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide both email and password.' });
    }

    const user = db.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Sign in successful.',
      token,
      user: sanitizeUser(user)
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Server error during authentication.' });
  }
});

// GET /api/auth/me
router.get('/me', authenticateToken, (req, res) => {
  try {
    const user = db.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User account not found.' });
    }
    res.json({ user: sanitizeUser(user) });
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ error: 'Failed to retrieve profile.' });
  }
});

// PUT /api/auth/profile
router.put('/profile', authenticateToken, (req, res) => {
  try {
    const { name, company, phone, location } = req.body;
    const updatedUser = db.updateUser(req.user.id, {
      ...(name && { name: name.trim() }),
      ...(company && { company: company.trim() }),
      ...(phone !== undefined && { phone }),
      ...(location !== undefined && { location })
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User account not found.' });
    }

    res.json({
      message: 'Profile updated successfully.',
      user: sanitizeUser(updatedUser)
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Failed to update profile.' });
  }
});

// POST /api/auth/change-password
router.post('/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Please provide both current and new password.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters.' });
    }

    const user = db.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User account not found.' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Current password is incorrect.' });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    db.updateUser(req.user.id, { passwordHash: newPasswordHash });

    res.json({ message: 'Password updated successfully.' });
  } catch (err) {
    console.error('Error changing password:', err);
    res.status(500).json({ error: 'Failed to change password.' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully.' });
});

export default router;
