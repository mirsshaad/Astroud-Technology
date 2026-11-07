import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './navbar.css';
import './nav-center.css';
import './nav-menu-layout.css';
import './pricing.css';
import './dark-theme.css';

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);
