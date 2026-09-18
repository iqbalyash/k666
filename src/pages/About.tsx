import type { ReactNode, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, PageMeta } from '../components/ui.tsx'

function HomeLink({ children }: { children: ReactNode }) {
  return (
    <Link
      to="/"
      className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 transition hover:text-[#86efac] hover:decoration-[#86efac]"
    >
      {children}
    </Link>
  )
}

const offerings = [
  {
    title: 'Official & Verified Downloads',
    body: (
      <>
        Direct access to the official, safe, and unaltered <HomeLink>K666</HomeLink> APK files for
        Android devices, completely free from third-party malware or modified scripts.
      </>
    ),
    icon: DownloadIcon,
  },
  {
    title: 'Comprehensive Player Guides',
    body: 'Step-by-step tutorials covering account creation, mobile verification, deposit methods via local channels (JazzCash, EasyPaisa, Raast), and seamless cash-out procedures.',
    icon: GuideIcon,
  },
  {
    title: 'Game Mechanics & Strategies',
    body: 'Educational overviews detailing RTP percentages, game rules, and tips for popular titles like Aviator, Fortune Gems 3, Teen Patti, and live casino tables.',
    icon: StrategyIcon,
  },
  {
    title: 'Latest Updates & News',
    body: 'Real-time updates regarding platform maintenance, new game releases, promotional campaigns, Member Days, and VIP tier updates.',
    icon: NewsIcon,
  },
] as const

const guidelines = [
  {
    title: 'Entertainment First',
    body: 'Real-money games should be played purely for recreation. Never treat gaming as a primary source of income or a solution for debt.',
    icon: EntertainmentIcon,
  },
  {
    title: 'Budget & Limit Control',
    body: 'We advocate setting strict personal daily or weekly wagering limits before logging into the app, and sticking to them regardless of winning or losing streaks.',
    icon: BudgetIcon,
  },
  {
    title: 'Never Chase Losses',
    body: 'Chasing lost funds leads to reckless decision-making. Know when to walk away and take breaks.',
    icon: PauseIcon,
  },
  {
    title: 'Underage Prevention',
    body: (
      <>
        <HomeLink>K666</HomeLink> is strictly intended for individuals aged 18 years and older. We
        strictly discourage underage access or platform participation.
      </>
    ),
    icon: AgeIcon,
  },
] as const

const iconWrap =
  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#eab308]/30 bg-[#031711] text-[#eab308]'

export function About() {
  return (
    <article className="grove-section px-[6vw] pt-8 pb-20">
      <PageMeta
        title="About K666 App Portal | k666app.net.pk"
        description="About k666app.net.pk — the official informational resource and verified download portal for the K666 mobile gaming platform in Pakistan."
      />

      <PageHero kicker="About Us" title="About K666 App Portal" />

      <section
        id="about-intro"
        className="mx-auto max-w-3xl space-y-5 pb-16 text-[1.05rem] leading-[1.75] text-white/80 md:pb-20"
      >
        <p>
          Welcome to <HomeLink>k666app.net.pk</HomeLink>, your premier informational resource and
          official download portal for the <HomeLink>K666</HomeLink> mobile gaming platform in
          Pakistan. We serve as a dedicated bridge between players and the official{' '}
          <HomeLink>K666</HomeLink> gaming ecosystem.
        </p>
        <p>
          Our mission is simple: to provide a safe, transparent, and comprehensive hub where users
          can access verified app downloads, in-depth gameplay guides, and up-to-date platform
          insights.
        </p>
      </section>

      <section id="what-we-provide" className="mx-auto max-w-6xl scroll-mt-28 pb-16 md:pb-20">
        <h2 className="mb-8 text-center text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">
          What We Provide
        </h2>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {offerings.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.title}>
                <article className="flex h-full gap-4 rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] p-5 backdrop-blur-sm transition hover:border-[#eab308] sm:p-6">
                  <span className={iconWrap}>
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.12rem] font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="responsible-gaming" className="mx-auto max-w-6xl scroll-mt-28 pb-16 md:pb-20">
        <h2 className="mb-5 text-center text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">
          Our Commitment to Safe & Responsible Gaming
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-[1.05rem] leading-[1.75] text-white/80">
          At <HomeLink>k666app.net.pk</HomeLink>, we firmly believe that real-money gaming should
          remain a form of entertainment—never a financial burden. We actively promote healthy
          gaming habits and encourage all players to exercise discipline when interacting with
          online gaming platforms.
        </p>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {guidelines.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.title}>
                <article className="flex h-full gap-4 rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] p-5 backdrop-blur-sm transition hover:border-[#eab308] sm:p-6">
                  <span className={iconWrap}>
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.12rem] font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="disclaimer" className="mx-auto max-w-3xl scroll-mt-28">
        <h2 className="mb-6 text-center text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">
          Disclaimer & Independence Notice
        </h2>
        <p className="panel px-6 py-8 text-[1.05rem] leading-[1.75] text-white/80 md:px-10 md:py-10">
          <HomeLink>k666app.net.pk</HomeLink> operates as an independent informational authority,
          community resource, and digital gateway. We do not operate, host, or directly manage the
          underlying game servers or financial transactions of the <HomeLink>K666</HomeLink>{' '}
          platform. All trade names, logos, trademarks, and game titles are the property of their
          respective official brand owners.
        </p>
      </section>
    </article>
  )
}

function iconProps(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    className: 'h-6 w-6',
    'aria-hidden': true as const,
    ...props,
  }
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M12 3.5v11.2M8.2 11.2 12 15l3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 18.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function GuideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M5 5.2c1.6-.8 3.4-.8 5 0L12 6l2-.8c1.6-.8 3.4-.8 5 0V17c-1.6-.8-3.4-.8-5 0L12 18l-2-.8c-1.6-.8-3.4-.8-5 0V5.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 6.2v11.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function StrategyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M5 16.5 9.2 12l3.2 3.2L19 8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.5 8.5H19v4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NewsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M5 8.5c0-1.4 2.4-3 7-3s7 1.6 7 3v8.2c0 1.4-2.4 2.8-7 2.8s-7-1.4-7-2.8V8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M5 12.2c0 1.4 2.4 2.6 7 2.6s7-1.2 7-2.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 9.2h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function EntertainmentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M8 15.2c.8 1 2.3 1.8 4 1.8s3.2-.8 4-1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10.2" r="1.1" fill="currentColor" />
      <circle cx="15" cy="10.2" r="1.1" fill="currentColor" />
      <rect x="3.5" y="6" width="17" height="12.5" rx="3.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function BudgetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M3.5 8.5h17A1.5 1.5 0 0 1 22 10v8.5A1.5 1.5 0 0 1 20.5 20h-17A1.5 1.5 0 0 1 2 18.5v-10A1.5 1.5 0 0 1 3.5 7h12.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="14.2" r="1.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 9.4v5.2M14 9.4v5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function AgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconProps(props)}>
      <path
        d="M12 3.5 5.5 6v5.4c0 4.1 2.7 7.2 6.5 8.6 3.8-1.4 6.5-4.5 6.5-8.6V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 13.4V10h2.1c1.1 0 1.8.6 1.8 1.6s-.7 1.8-1.8 1.8H8.6Zm5.6-3.4 1.7 6.4 1.7-6.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
