import type { ReactNode, SVGProps } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SectionHead } from './ui.tsx'

const homeCards = [
  {
    title: '24/7 Payment Support',
    href: '#guide-banking',
    description:
      'Deposit and withdraw around the clock with JazzCash, EasyPaisa, SadaPay, Raast, local bank transfers, and USDT.',
    icon: WalletIcon,
  },
  {
    title: 'Zero Payout Fees',
    href: '#guide-banking',
    description:
      'K666 charges 0% platform withdrawal fees, so you receive the exact amount requested aside from any e-wallet network charge.',
    icon: FeeIcon,
  },
  {
    title: 'High RTP Titles',
    href: '#guide-games',
    description:
      'Play high-demand crash, slot, and table games including Aviator, Fortune Gems 3, Teen Patti, and live dealer tables.',
    icon: GamepadIcon,
  },
  {
    title: 'Instant Registration',
    href: '#account',
    description:
      'Create an account in seconds with phone (+92), email, or Google, Facebook, and Telegram login, then unlock welcome rewards.',
    icon: GiftIcon,
  },
  {
    title: 'Platform Security',
    href: '#guide-support',
    description:
      'Bound mobile SMS verification, encrypted transactions, and 24/7 Urdu and English support keep account activity protected.',
    icon: ShieldIcon,
  },
] as const

const guideCards = [
  {
    title: 'Local PKR Wallet Integration',
    href: '#guide-banking',
    description:
      'Seamlessly deposit and withdraw funds directly using JazzCash, EasyPaisa, or local bank transfers without international card fees.',
    icon: WalletIcon,
  },
  {
    title: 'Multi-Provider Game Lobby',
    href: '#guide-games',
    description:
      'Access 100+ titles including Aviator, JILI Slots, Teen Patti, Live Casino dealers, and 9Wickets Cricket sportsbook.',
    icon: GamepadIcon,
  },
  {
    title: 'Rs 70 Sign-Up & Deposit Bonuses',
    href: '#guide-bonuses',
    description:
      'Get an instant Rs 70.00 signup gift, an extra Rs 100.00 app reward, and up to a 30% first deposit match bonus.',
    icon: GiftIcon,
  },
  {
    title: '16-Tier VIP Loyalty Program',
    href: '#guide-vip',
    description:
      'Level up from VIP 0 to VIP 15 through gameplay to unlock cumulative cash rewards reaching up to Rs 1,529,997.00.',
    icon: CrownIcon,
  },
  {
    title: 'Rs 666 Referral & Agent Payouts',
    href: '#guide-referral',
    description:
      'Earn up to Rs 2,000 per invited friend alongside up to 3.0% daily commission streams from your downline betting volume.',
    icon: UsersIcon,
  },
  {
    title: '24/7 Support & Security',
    href: '#guide-support',
    description:
      'Enjoy peace of mind with SMS/email account verification, no annoying ads, and 24/7 direct in-app and WhatsApp customer service.',
    icon: ShieldIcon,
  },
] as const

function GuideAnchor({
  hash,
  className,
  children,
}: {
  hash: string
  className?: string
  children: ReactNode
}) {
  const { pathname } = useLocation()
  const to = pathname === '/guide' ? hash : `/guide${hash}`

  if (pathname === '/guide') {
    return (
      <a href={hash} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

const iconClass = 'h-6 w-6'

function iconProps(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    className: iconClass,
    'aria-hidden': true as const,
    ...props,
  }
}

function FeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M12 8.2c-1.7 0-2.8.9-2.8 2 0 2.6 5.6 1.2 5.6 3.6 0 1.2-1.3 2-3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M3.5 8.5h17A1.5 1.5 0 0 1 22 10v8.5A1.5 1.5 0 0 1 20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-10A1.5 1.5 0 0 1 3.5 7h12.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7 6.8 4.2A1.5 1.5 0 0 1 8.7 4h8.4A1.5 1.5 0 0 1 18.6 5.8V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.25" cy="14.25" r="1.15" fill="currentColor" />
    </svg>
  )
}

function GamepadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M7.2 8.5h9.6A5.2 5.2 0 0 1 22 13.7c0 2.3-1.4 4.6-3.6 5.2-.8.2-1.5-.2-1.9-.8l-1-1.6H8.5l-1 1.6c-.4.6-1.1 1-1.9.8C3.4 18.3 2 16 2 13.7A5.2 5.2 0 0 1 7.2 8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5v-2M7 12.5h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="15.2" cy="12.2" r="0.85" fill="currentColor" />
      <circle cx="17.3" cy="14.1" r="0.85" fill="currentColor" />
    </svg>
  )
}

function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M4 11h16v8.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5V11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M3.5 8h17v3h-17V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 8v13" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 8c0-2-1.3-4-3.4-4C6.4 4 6 6.2 8.2 7.4L12 8Zm0 0c0-2 1.3-4 3.4-4C17.6 4 18 6.2 15.8 7.4L12 8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M4 16.5 3 7.5l5.2 4.2L12 5.5l3.8 6.2L21 7.5l-1 9H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M5 19.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="12.2" r="0.9" fill="currentColor" />
    </svg>
  )
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.6 18.5c.7-3 2.7-4.7 5.4-4.7s4.7 1.7 5.4 4.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M16.1 13.9c2.1.3 3.7 1.8 4.3 4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M12 3.5 5.5 6v5.4c0 4.1 2.7 7.2 6.5 8.6 3.8-1.4 6.5-4.5 6.5-8.6V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.4c0-1.2.9-2 2.1-2.4.9-.3 1.7.1 2.1.6.3.4.4.9.2 1.4-.4.9-1.6 1.3-2.2 1.8v.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 11.2v2.3a1.8 1.8 0 0 0 1.1 1.6M15.6 11.2v2.3a1.8 1.8 0 0 1-1.1 1.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Features({
  id = 'features',
  variant = 'home',
}: {
  id?: string
  variant?: 'home' | 'guide'
}) {
  const cards = variant === 'guide' ? guideCards : homeCards
  return (
    <section id={id} className="grove-section scroll-mt-28 px-[6vw] py-[5.5rem]">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="KEY HIGHLIGHTS"
          title="Why Choose K666 Game?"
          copy={
            variant === 'guide'
              ? 'Explore top features designed for Pakistani gamers, featuring instant bonuses, local payment integration, and a vast game catalog.'
              : '24/7 local payments, zero platform payout fees, high RTP titles, instant registration, and account security built for Pakistani players.'
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="flex min-w-0 flex-col rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] p-6 backdrop-blur-sm transition hover:border-[#eab308] hover:bg-[rgba(18,74,58,0.78)]"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#eab308]/30 bg-[#031711] text-[#eab308]">
                  <Icon />
                </span>
                <h3 className="text-[1.12rem] font-bold text-white">{card.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-white/80">
                  {card.description}
                </p>
                <GuideAnchor
                  hash={card.href}
                  className="mt-5 inline-flex items-center text-[0.92rem] font-semibold text-[#4ade80] transition hover:text-[#86efac]"
                >
                  Learn More in Guide →
                </GuideAnchor>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#eab308]/30 bg-[#031711] px-5 py-6 sm:flex-row sm:items-center md:px-8">
          <p className="max-w-xl text-[1.05rem] font-semibold text-white">
            Want a complete breakdown of wagering rules, bonus terms, and VIP levels?
          </p>
          <GuideAnchor
            hash="#full-guide-section"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#eab308] px-6 py-3.5 text-center text-[0.92rem] font-semibold text-[#031711] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] transition hover:brightness-110"
          >
            Jump to Full Guide
          </GuideAnchor>
        </div>
      </div>
    </section>
  )
}
