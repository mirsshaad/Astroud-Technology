import React from 'react';

// Astroud Cloud Infrastructure (AWS + Azure) Icon
export function CloudInfraIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#EBF5FF" />
      <path d="M19.5 12C18.9 9.7 16.7 8 14 8C10.7 8 8 10.7 8 14C8 14.3 8 14.7 8.1 15C6.3 15.6 5 17.1 5 19C5 21.2 6.8 23 9 23H22C24.2 23 26 21.2 26 19C26 17.2 24.8 15.7 23.1 15.2C22.8 13.4 21.4 12.1 19.5 12Z" fill="#0284C7" />
      <circle cx="16" cy="18" r="2.5" fill="#38BDF8" />
      <path d="M11 21L13.5 18M18.5 18L21 21" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Astroud Cloud Migration Icon
export function MigrationIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#ECFDF5" />
      <path d="M24 14C23.3 10.6 20.3 8 16.7 8C13.2 8 10.3 10.5 9.4 13.8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 14H24.5V10.5" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 18C8.7 21.4 11.7 24 15.3 24C18.8 24 21.7 21.5 22.6 18.2" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M11 18H7.5V21.5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Astroud Microsoft 365 Solutions Icon
export function M365Icon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#F0F4FE" />
      <rect x="7" y="7" width="8" height="8" rx="1.5" fill="#F25022" />
      <rect x="17" y="7" width="8" height="8" rx="1.5" fill="#7FBA00" />
      <rect x="7" y="17" width="8" height="8" rx="1.5" fill="#00A4EF" />
      <rect x="17" y="17" width="8" height="8" rx="1.5" fill="#FFB900" />
    </svg>
  );
}

// Astroud Website Hosting & Deployment Icon
export function HostingIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#F5F3FF" />
      <rect x="6" y="8" width="20" height="6.5" rx="2" stroke="#7C3AED" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="10" cy="11.2" r="1.2" fill="#10B981" />
      <circle cx="13.5" cy="11.2" r="1.2" fill="#7C3AED" />
      <rect x="6" y="17.5" width="20" height="6.5" rx="2" stroke="#7C3AED" strokeWidth="2" fill="#FFFFFF" />
      <circle cx="10" cy="20.7" r="1.2" fill="#10B981" />
      <circle cx="13.5" cy="20.7" r="1.2" fill="#7C3AED" />
      <path d="M19 11.2H23M19 20.7H23" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Astroud Backup & Disaster Recovery Icon
export function BackupRecoveryIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#FFFBEB" />
      <path d="M16 6L7 10V16C7 21.5 10.8 26.6 16 28C21.2 26.6 25 21.5 25 16V10L16 6Z" fill="#F59E0B" fillOpacity="0.15" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 16.5L14.8 19.3L20.2 13.5" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Astroud 24/7 Managed Cloud Support Icon
export function Support247Icon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#ECFDF5" />
      <path d="M8 17V15C8 10.6 11.6 7 16 7C20.4 7 24 10.6 24 15V17" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="6" y="16" width="4" height="7" rx="2" fill="#059669" />
      <rect x="22" y="16" width="4" height="7" rx="2" fill="#059669" />
      <path d="M22 21V23C22 24.7 20.7 26 19 26H16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="26" r="1.5" fill="#059669" />
    </svg>
  );
}

// Security & Compliance Icon
export function SecurityIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#EFF6FF" />
      <rect x="9" y="14" width="14" height="11" rx="2.5" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />
      <path d="M12 14V11C12 8.8 13.8 7 16 7C18.2 7 20 8.8 20 11V14" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="19.5" r="1.8" fill="#2563EB" />
    </svg>
  );
}

// Cost & FinOps Icon
export function FinOpsIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#F0FDF4" />
      <path d="M7 23L12 17L17 20L25 9" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 9H25V15" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AstroudServiceIcon({ type, size = 28 }) {
  switch (type) {
    case 'cloud-infrastructure':
      return <CloudInfraIcon size={size} />;
    case 'cloud-migration':
      return <MigrationIcon size={size} />;
    case 'microsoft-365':
      return <M365Icon size={size} />;
    case 'website-hosting':
    case 'managed-hosting':
      return <HostingIcon size={size} />;
    case 'backup-recovery':
      return <BackupRecoveryIcon size={size} />;
    case '24-7-support':
    case 'managed-support':
      return <Support247Icon size={size} />;
    case 'security':
      return <SecurityIcon size={size} />;
    case 'finops':
      return <FinOpsIcon size={size} />;
    default:
      return <CloudInfraIcon size={size} />;
  }
}

export const DynamicToolIcon = AstroudServiceIcon;

