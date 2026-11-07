import { useMemo } from 'react';

/* ── Inline SVG brand marks (Dark for White Theme) ─────────────────────────── */
const AzureLogo = () => (
  <svg width="28" height="28" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.0 4L14 52h9.5l5.5-14h12l-5-12 7-22z" fill="#0078D4"/>
    <path d="M23 38l-9 14h28L23 38z" fill="#50E6FF" opacity="0.85"/>
  </svg>
);

const AWSLogo = () => (
  <svg width="36" height="22" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="32" fontSize="28" fontWeight="900" fontFamily="Arial Black, Arial" fill="#161E2D" letterSpacing="-1">aws</text>
    <path d="M8 40 Q40 50 72 40" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <polygon points="68,37 75,40 70,44" fill="#FF9900"/>
  </svg>
);

const M365Logo = () => (
  <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4"  y="4"  width="42" height="42" rx="4" fill="#F25022"/>
    <rect x="54" y="4"  width="42" height="42" rx="4" fill="#7FBA00"/>
    <rect x="4"  y="54" width="42" height="42" rx="4" fill="#00A4EF"/>
    <rect x="54" y="54" width="42" height="42" rx="4" fill="#FFB900"/>
  </svg>
);

const WindowsLogo = () => (
  <svg width="26" height="26" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,12 38,6 38,42 0,42" fill="#0078D4"/>
    <polygon points="42,5 88,0 88,42 42,42" fill="#0078D4" opacity="0.85"/>
    <polygon points="0,46 38,46 38,82 0,76" fill="#0078D4" opacity="0.85"/>
    <polygon points="42,46 88,46 88,88 42,83" fill="#0078D4" opacity="0.7"/>
  </svg>
);

const VMwareLogo = () => (
  <svg width="34" height="22" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="34" fontSize="34" fontWeight="700" fontFamily="Arial, sans-serif" fill="#161E2D">VMware</text>
  </svg>
);

const CiscoLogo = () => (
  <svg width="34" height="22" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="54" y="0"  width="12" height="30" rx="6" fill="#161E2D"/>
    <rect x="36" y="10" width="12" height="22" rx="5" fill="#161E2D"/>
    <rect x="72" y="10" width="12" height="22" rx="5" fill="#161E2D"/>
    <rect x="18" y="18" width="12" height="16" rx="5" fill="#161E2D"/>
    <rect x="90" y="18" width="12" height="16" rx="5" fill="#161E2D"/>
    <rect x="0"  y="24" width="12" height="10" rx="4" fill="#161E2D"/>
    <rect x="108" y="24" width="12" height="10" rx="4" fill="#161E2D"/>
    <text x="4" y="56" fontSize="16" fontWeight="700" fontFamily="Arial, sans-serif" fill="#161E2D" letterSpacing="2">CISCO</text>
  </svg>
);

const TECH_PARTNERS = [
  { name: 'Microsoft Azure',      Icon: AzureLogo   },
  { name: 'Amazon Web Services',  Icon: AWSLogo     },
  { name: 'Microsoft 365',        Icon: M365Logo    },
  { name: 'Windows Server',       Icon: WindowsLogo },
  { name: 'VMware',               Icon: VMwareLogo  },
  { name: 'Cisco',                Icon: CiscoLogo   },
];

export function PartnerLogos() {
  const { lines, glowingNodes } = useMemo(() => {
    const width = 1600, height = 300, cols = 28, rows = 9;
    const cellW = width / (cols - 1);
    const cellH = height / (rows - 1);
    const points = {};
    let seed = 42;
    const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const centerY = rows / 2;
        const distFromCenter = Math.abs(r - centerY) / centerY;
        const wave = Math.sin(c / 6) * 20 * (1 - distFromCenter);
        points[`${r}-${c}`] = [
          c * cellW + (rand() - 0.5) * cellW * 0.5,
          r * cellH + (rand() - 0.5) * cellH * 0.4 + wave,
        ];
      }
    }

    const linesList = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const [x1, y1] = points[`${r}-${c}`];
        if (c < cols - 1) linesList.push({ id: `ph-${r}-${c}`, x1, y1, x2: points[`${r}-${c + 1}`][0], y2: points[`${r}-${c + 1}`][1] });
        if (r < rows - 1) linesList.push({ id: `pv-${r}-${c}`, x1, y1, x2: points[`${r + 1}-${c}`][0], y2: points[`${r + 1}-${c}`][1] });
      }
    }

    const nodeKeys = Object.keys(points);
    const nodeIndices = new Set();
    while (nodeIndices.size < 18 && nodeIndices.size < nodeKeys.length) {
      nodeIndices.add(Math.floor(Math.random() * nodeKeys.length));
    }

    const nodesList = Array.from(nodeIndices).map((idx, i) => {
      const [x, y] = points[nodeKeys[idx]];
      return { id: `pnode-${i}`, x, y, delay: (i % 4) * 0.5 };
    });

    return { lines: linesList, glowingNodes: nodesList };
  }, []);

  const items = [...TECH_PARTNERS, ...TECH_PARTNERS];

  return (
    <div className="partner-strip">
      <svg
        className="partner-mesh-bg"
        viewBox="0 0 1600 300"
        preserveAspectRatio="xMidYMax slice"
      >
        {lines.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#CBD5E1"
            strokeWidth="0.7"
            opacity="0.5"
          />
        ))}
        {glowingNodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#2563EB"
            opacity="0.8"
            style={{ animation: `nodePulse 3s ease-in-out infinite ${node.delay}s` }}
          />
        ))}
      </svg>

      <div className="logo-track-wrapper">
        <div className="logo-track">
          {items.map(({ name, Icon }, i) => (
            <div key={i} className="logo-item" style={{ color: '#161E2D' }}>
              <span className="logo-icon"><Icon /></span>
              <span className="logo-name" style={{ color: '#161E2D', fontWeight: 600 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
