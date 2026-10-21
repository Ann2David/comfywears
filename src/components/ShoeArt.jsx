export function SneakerArt({ tone = '#E39A2D', className = '' }) {
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="146" rx="104" ry="8" fill="rgba(28,26,23,0.08)" />
      <path
        d="M28 108c6-22 26-30 46-34 16-3 26-12 38-22 10-8 22-12 34-9 10 3 14 12 24 15 14 4 26 2 38 10 10 7 14 20 12 33-2 12-12 20-24 21H40c-8 0-14-6-12-14z"
        fill={tone}
      />
      <path
        d="M28 108c6-22 26-30 46-34 16-3 26-12 38-22 10-8 22-12 34-9 10 3 14 12 24 15"
        fill="none"
        stroke="rgba(28,26,23,0.18)"
        strokeWidth="3"
      />
      <path d="M40 118h156c6 0 10 6 8 12-2 7-9 12-17 12H52c-9 0-16-6-18-14z" fill="#1C1A17" />
      <g stroke="#1C1A17" strokeWidth="3" strokeLinecap="round">
        <line x1="96" y1="70" x2="118" y2="88" />
        <line x1="110" y1="62" x2="132" y2="82" />
        <line x1="124" y1="56" x2="146" y2="76" />
      </g>
      <circle cx="196" cy="86" r="5" fill="#1C1A17" />
    </svg>
  );
}

export function HeelArt({ tone = '#93A480', className = '' }) {
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="146" rx="90" ry="8" fill="rgba(28,26,23,0.08)" />
      <path
        d="M56 96c0-18 10-30 26-38 20-10 44-12 64-6 12 4 18 12 18 22v20c0 8-6 14-14 14H70c-8 0-14-5-14-12z"
        fill={tone}
      />
      <path d="M150 108v-30c6 2 12 8 12 20 0 8-4 14-12 10z" fill="rgba(28,26,23,0.15)" />
      <path d="M74 108c-2 10-4 20-2 30 1 6 6 10 12 10h6c4 0 6-4 4-8-6-11-8-22-8-32z" fill="#1C1A17" />
      <rect x="70" y="106" width="86" height="10" rx="3" fill="#1C1A17" />
      <path
        d="M56 96c0-18 10-30 26-38 20-10 44-12 64-6"
        fill="none"
        stroke="rgba(28,26,23,0.18)"
        strokeWidth="3"
      />
      <circle cx="120" cy="78" r="4" fill="#1C1A17" opacity="0.5" />
    </svg>
  );
}