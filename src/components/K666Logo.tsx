import { useId } from 'react'

export function K666Logo({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const bg = `${uid}-bg`
  const gold = `${uid}-gold`
  const glow = `${uid}-glow`

  return (
    <svg
      width={80}
      height={40}
      viewBox="0 0 220 110"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`${uid}-title ${uid}-desc`}
      className={className}
    >
      <title id={`${uid}-title`}>K666</title>
      <desc id={`${uid}-desc`}>Real Earning App</desc>
      <defs>
        <linearGradient id={bg} x1="110" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#092c22" />
          <stop offset="100%" stopColor="#031711" />
        </linearGradient>
        <linearGradient id={gold} x1="110" y1="18" x2="110" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff7cc" />
          <stop offset="38%" stopColor="#facc15" />
          <stop offset="72%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <filter id={glow} x="-20%" y="-80%" width="140%" height="280%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="1"
        y="1"
        width="218"
        height="108"
        rx="12"
        fill={`url(#${bg})`}
        stroke="#eab308"
        strokeWidth="2"
      />
      <text
        x="110"
        y="64"
        textAnchor="middle"
        fill={`url(#${gold})`}
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="44"
        fontWeight="700"
        letterSpacing="1.2"
      >
        K666
      </text>
      <text
        x="110"
        y="88"
        textAnchor="middle"
        fill="#4ade80"
        filter={`url(#${glow})`}
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3.6"
      >
        REAL EARNING APP
      </text>
    </svg>
  )
}
