import { useMemo } from 'react';

export function InfrastructureVisualization() {
  const { lines, glowingNodes } = useMemo(() => {
    const width = 1600;
    const height = 500;
    const cols = 32;
    const rows = 12;

    const cellW = width / (cols - 1);
    const cellH = height / (rows - 1);
    const points = {};

    let seed = 42;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const centerY = rows / 2;
        const distFromCenter = Math.abs(r - centerY) / centerY;
        const wave = Math.sin(c / 6) * 30 * (1 - distFromCenter);

        const x = c * cellW + (rand() - 0.5) * cellW * 0.5;
        const y = r * cellH + (rand() - 0.5) * cellH * 0.4 + wave;

        points[`${r}-${c}`] = [x, y];
      }
    }

    const linesList = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const [x1, y1] = points[`${r}-${c}`];
        if (c < cols - 1) linesList.push({ id: `h-${r}-${c}`, x1, y1, x2: points[`${r}-${c + 1}`][0], y2: points[`${r}-${c + 1}`][1] });
        if (r < rows - 1) linesList.push({ id: `v-${r}-${c}`, x1, y1, x2: points[`${r + 1}-${c}`][0], y2: points[`${r + 1}-${c}`][1] });
      }
    }

    const nodeKeys = Object.keys(points);
    const nodeIndices = new Set();
    while (nodeIndices.size < 24 && nodeIndices.size < nodeKeys.length) {
      nodeIndices.add(Math.floor(Math.random() * nodeKeys.length));
    }

    const nodesList = Array.from(nodeIndices).map((idx, i) => {
      const key = nodeKeys[idx];
      const [x, y] = points[key];
      return { id: `node-${i}`, x, y, delay: (i % 5) * 0.4 };
    });

    return { lines: linesList, glowingNodes: nodesList };
  }, []);

  return (
    <svg
      className="infrastructure-viz"
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMid slice"
      width={1600}
      height={500}
    >
      <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {lines.map((line, i) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#FFFFFF"
          strokeWidth="0.8"
          opacity="0.3"
          style={{ animation: `fadeInLine 0.8s ease-out ${Math.min(i * 0.005, 1)}s both` }}
        />
      ))}

      {glowingNodes.map((node) => (
        <circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="#67E8F9"
          opacity="0.8"
          className="mesh-node"
          style={{ animation: `nodePulse 3s ease-in-out infinite ${node.delay}s` }}
        />
      ))}
    </svg>
  );
}
