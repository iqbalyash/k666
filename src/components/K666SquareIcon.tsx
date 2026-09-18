import { useId } from 'react'

type Size = number | string

export function K666SquareIcon({
  width = 180,
  height = width,
  className,
}: {
  width?: Size
  height?: Size
  className?: string
}) {
  const uid = useId().replace(/:/g, '')
  const bg = `${uid}-bg`
  const gold = `${uid}-gold`
  const glow = `${uid}-glow`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`${uid}-title ${uid}-desc`}
      className={className}
    >
      <title id={`${uid}-title`}>K666</title>
      <desc id={`${uid}-desc`}>Official app icon</desc>
      <defs>
        <radialGradient id={bg} cx="46%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#0d4a38" />
          <stop offset="100%" stopColor="#041c14" />
        </radialGradient>
        <linearGradient id={gold} x1="256" y1="72" x2="256" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff7cc" />
          <stop offset="36%" stopColor="#facc15" />
          <stop offset="72%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <filter id={glow} x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="10"
        y="10"
        width="492"
        height="492"
        rx="98.4"
        fill={`url(#${bg})`}
        stroke="#eab308"
        strokeWidth="14"
      />
      <g fill={`url(#${gold})`}>
        <path d="M148 214V154l52 44 56-86 56 86 52-44v60H148Z" />
        <rect x="140" y="210" width="232" height="28" rx="6" />
        <rect x="128" y="234" width="256" height="22" rx="8" />
        <circle cx="148" cy="150" r="16" />
        <circle cx="256" cy="108" r="20" />
        <circle cx="364" cy="150" r="16" />
      </g>
      <text
        x="256"
        y="348"
        textAnchor="middle"
        fill={`url(#${gold})`}
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="92"
        fontWeight="700"
        letterSpacing="4"
      >
        K666
      </text>
      <rect x="146" y="392" width="220" height="52" rx="26" fill="#031711" stroke="#4ade80" strokeWidth="3" />
      <text
        x="256"
        y="427"
        textAnchor="middle"
        fill="#4ade80"
        filter={`url(#${glow})`}
        fontFamily="Sora, system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="4.5"
      >
        OFFICIAL
      </text>
    </svg>
  )
}
