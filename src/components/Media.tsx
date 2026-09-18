import { useEffect, useId, useState, type ReactNode } from 'react'
import { APK_URL, SectionHead } from './ui.tsx'

type Filter = 'all' | 'home' | 'register' | 'deposit' | 'promotions' | 'vip'

type DetailItem = { label: string; copy: string }

type Screen = {
  id: Filter
  filter: Filter
  tab: string
  title: string
  badge: string
  badgeTone: 'green' | 'gold'
  intro?: string
  details: string | DetailItem[]
  href?: string
  cta?: string
  preview: ReactNode
}

const tabs: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Screens' },
  { id: 'home', label: 'Home Lobby' },
  { id: 'register', label: 'Registration' },
  { id: 'deposit', label: 'Deposit & Wallet' },
  { id: 'promotions', label: 'Promotions' },
  { id: 'vip', label: 'VIP Levels' },
]

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-3 pt-4 pb-1 text-[0.48rem] font-semibold text-white/70">
      <span>9:41</span>
      <span className="h-3 w-16 rounded-full bg-black/70" aria-hidden="true" />
      <span>5G ▮▮▮</span>
    </div>
  )
}

function PhoneBezel({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[210px] rounded-[1.85rem] border-[7px] border-[#031711] bg-[#031711] shadow-[0_18px_40px_rgb(0_0_0_/_0.45)]">
      <div className="absolute top-1.5 left-1/2 z-10 h-3 w-[4.2rem] -translate-x-1/2 rounded-full bg-black" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] bg-[#0d3b2e] text-left text-white">
        {children}
      </div>
    </div>
  )
}

function HomeLobbyPreview() {
  return (
    <PhoneBezel>
      <StatusBar />
      <div className="flex items-center justify-between px-3 pb-2">
        <p className="text-[0.7rem] font-bold text-[#eab308]">K666</p>
        <p className="rounded-full bg-[#031711] px-2 py-0.5 text-[0.52rem] font-semibold text-[#4ade80]">
          Rs 1,250.00
        </p>
      </div>
      <div className="mx-3 mb-2 rounded-md bg-[#124a3a] px-2 py-1.5 text-[0.52rem] text-white/50">
        Search games…
      </div>
      <div className="mb-2 flex gap-1 overflow-hidden px-3">
        {['Hot', 'Slots', 'Aviator', 'Sports', 'Cards'].map((tab, index) => (
          <span
            key={tab}
            className={`rounded-full px-1.5 py-0.5 text-[0.42rem] font-semibold ${
              index === 0 ? 'bg-[#eab308] text-[#031711]' : 'bg-[#124a3a] text-white/80'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5 px-3">
        <div className="rounded-md bg-gradient-to-br from-red-700 to-amber-400 p-2">
          <p className="text-[0.85rem]">✈️</p>
          <p className="text-[0.52rem] font-bold">Aviator</p>
        </div>
        <div className="rounded-md bg-gradient-to-br from-purple-800 to-fuchsia-400 p-2">
          <p className="text-[0.85rem]">🎴</p>
          <p className="text-[0.52rem] font-bold">Teen Patti</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 grid grid-cols-5 border-t border-white/10 bg-[#031711] py-1.5 text-center text-[0.38rem] text-white/70">
        {['Home', 'Games', 'Wallet', 'VIP', 'Me'].map((item, index) => (
          <span key={item} className={index === 0 ? 'font-semibold text-[#eab308]' : ''}>
            {item}
          </span>
        ))}
      </div>
    </PhoneBezel>
  )
}

function RegisterPreview() {
  return (
    <PhoneBezel>
      <StatusBar />
      <div className="px-3">
        <p className="text-[0.72rem] font-bold">Create Account</p>
        <p className="mt-0.5 text-[0.48rem] text-[#eab308]">Free Rs 70.00 signup bonus</p>
        <div className="mt-2 grid grid-cols-2 gap-1">
          <span className="rounded bg-[#eab308] py-1 text-center text-[0.48rem] font-semibold text-[#031711]">
            +92 Phone
          </span>
          <span className="rounded bg-[#124a3a] py-1 text-center text-[0.48rem]">Email</span>
        </div>
        <div className="mt-2 rounded bg-[#124a3a] px-2 py-1.5 text-[0.5rem] text-white/50">
          03XX XXXXXXX
        </div>
        <div className="mt-1.5 rounded bg-[#124a3a] px-2 py-1.5 text-[0.5rem] text-white/50">
          SMS OTP code
        </div>
        <p className="mt-2 text-[0.45rem] text-white/80">☑ I am 18+ and accept terms</p>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[0.42rem]">
          {['Google', 'Facebook', 'Telegram'].map((brand) => (
            <span key={brand} className="rounded bg-[#031711] py-1.5">
              {brand}
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-[0.5rem] font-semibold text-[#4ade80]">Demo Mode →</p>
      </div>
    </PhoneBezel>
  )
}

function DepositPreview() {
  return (
    <PhoneBezel>
      <StatusBar />
      <div className="px-3">
        <p className="text-[0.7rem] font-bold">Wallet</p>
        <p className="mt-1 rounded-lg bg-[#031711] px-2 py-2 text-[0.78rem] font-bold text-[#eab308]">
          Rs 500.00
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[0.38rem] font-semibold">
          <span className="rounded bg-[#eab308] py-1.5 text-[#031711]">JazzCash</span>
          <span className="rounded bg-[#124a3a] py-1.5">EasyPaisa</span>
          <span className="relative rounded bg-[#124a3a] py-1.5">
            USDT
            <span className="absolute -top-1 right-0 rounded bg-red-500 px-0.5 text-[0.32rem] text-white">
              +5%
            </span>
          </span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 text-[0.45rem]">
          {['Rs 500', 'Rs 1,000', 'Rs 10,000', 'Rs 100,000'].map((amount) => (
            <span key={amount} className="rounded bg-[#124a3a] py-1.5 text-center">
              {amount}
            </span>
          ))}
        </div>
        <div className="mt-2 rounded bg-[#124a3a] px-2 py-1.5 text-[0.48rem] text-white/50">
          Custom amount
        </div>
        <div className="mt-2 rounded bg-[#eab308] py-1.5 text-center text-[0.52rem] font-bold text-[#031711]">
          Deposit Now
        </div>
      </div>
    </PhoneBezel>
  )
}

function PromotionsPreview() {
  return (
    <PhoneBezel>
      <StatusBar />
      <div className="space-y-1.5 px-3">
        <p className="text-[0.7rem] font-bold">Promotions</p>
        <div className="rounded-md bg-[#031711] px-2 py-1.5">
          <p className="text-[0.48rem] font-semibold text-[#eab308]">Lucky 6 Member Days</p>
          <p className="text-[0.42rem] text-white/70">6th · 16th · 26th — up to Rs 1,000,000</p>
        </div>
        <div className="rounded-md bg-[#124a3a] px-2 py-1.5">
          <p className="text-[0.48rem] font-semibold">7-Day Login Streak</p>
          <div className="mt-1 flex gap-1">
            {Array.from({ length: 7 }, (_, index) => (
              <span
                key={index}
                className={`h-3 flex-1 rounded-sm ${index < 3 ? 'bg-[#4ade80]' : 'bg-[#031711]'}`}
              />
            ))}
          </div>
        </div>
        <div className="rounded-md bg-[#124a3a] px-2 py-1.5 text-[0.45rem]">
          Referral share · <span className="text-[#4ade80]">Rs 2,000 / invite</span>
        </div>
        <div className="rounded-md bg-[#124a3a] px-2 py-1.5 text-[0.45rem]">
          Loss relief tracker · <span className="text-[#eab308]">8% cashback</span>
        </div>
        <div className="rounded bg-[#031711] px-2 py-1.5 text-[0.45rem] text-white/50">
          Redeem code
        </div>
      </div>
    </PhoneBezel>
  )
}

function VipPreview() {
  return (
    <PhoneBezel>
      <StatusBar />
      <div className="px-3">
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-bold">VIP Loyalty</p>
          <span className="rounded-full bg-[#eab308] px-1.5 py-0.5 text-[0.42rem] font-bold text-[#031711]">
            VIP 1
          </span>
        </div>
        <p className="mt-2 text-[0.45rem] text-white/70">Bet Rs 800 to reach VIP 2</p>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#031711]">
          <div className="h-full w-1/3 rounded-full bg-[#eab308]" />
        </div>
        <div className="mt-2 flex justify-between text-[0.7rem]">
          {['👑', '👑', '👑', '👑'].map((crown, index) => (
            <span key={index} className={index === 0 ? '' : 'opacity-35'}>
              {crown}
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 text-[0.4rem]">
          {['Upgrade drop', 'Daily bonus', 'Cashback', 'Agent desk'].map((perk) => (
            <span key={perk} className="rounded bg-[#124a3a] py-1 text-center">
              {perk}
            </span>
          ))}
        </div>
        <div className="mt-2 overflow-hidden rounded border border-[#eab308]/25 text-[0.38rem]">
          {[
            ['VIP 0', 'Rs 0.00'],
            ['VIP 1', 'Rs 13.00'],
            ['VIP 15', 'Rs 1,529,997'],
          ].map(([level, bonus]) => (
            <div key={level} className="flex justify-between border-t border-white/10 px-1.5 py-1 first:border-0">
              <span className="text-[#4ade80]">{level}</span>
              <span className="text-[#eab308]">{bonus}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneBezel>
  )
}

const screens: Screen[] = [
  {
    id: 'home',
    filter: 'home',
    tab: 'Home Lobby',
    title: 'Home Screen — Main Game Lobby',
    badge: 'LIVE DEMO',
    badgeTone: 'green',
    intro: 'The K666 Home Screen is your main dashboard for fast, organized access to all real-money games.',
    details: [
      {
        label: 'Hot & Crash Games',
        copy: 'High-demand titles including Aviator.',
      },
      {
        label: 'Slots',
        copy: 'Popular games such as Fortune Gems 3 and Crazy 777.',
      },
      {
        label: 'Cards & Tables',
        copy: 'Traditional favorites like Teen Patti, Andar Bahar, and Dragon Tiger.',
      },
      {
        label: 'Arcade & Fishing',
        copy: 'Action titles like Star Hunter.',
      },
      {
        label: 'Live Casino & Sports',
        copy: 'Real-time live dealer streaming alongside a full Sportsbook covering Cricket, Football, and Basketball.',
      },
    ],
    href: '#hero',
    cta: 'View Home Screen →',
    preview: <HomeLobbyPreview />,
  },
  {
    id: 'register',
    filter: 'register',
    tab: 'Registration',
    title: 'Registration & Account Auth',
    badge: 'FREE RS 70 BONUS',
    badgeTone: 'gold',
    details: [
      {
        label: 'Flexible Sign-Up',
        copy: 'Register using your phone number (+92 prefix), email address, or instant social login via Google, Facebook, or Telegram.',
      },
      {
        label: 'Account Security',
        copy: 'Verify your account quickly via mobile SMS verification code.',
      },
      {
        label: 'Reward Unlock',
        copy: 'Link your payment method to secure your profile and claim instant welcome rewards.',
      },
    ],
    href: '#register',
    cta: 'Register & Download →',
    preview: <RegisterPreview />,
  },
  {
    id: 'deposit',
    filter: 'deposit',
    tab: 'Deposit & Wallet',
    title: 'Deposit & Local Wallet Interface',
    badge: 'JAZZCASH / EASYPAISA',
    badgeTone: 'gold',
    details: [
      {
        label: 'Live Wallet Balance',
        copy: 'Displays your current available balance (e.g., Rs 500.00).',
      },
      {
        label: 'Payment Method Tabs',
        copy: 'Fast switching between JazzCash, EasyPaisa, and Crypto/USDT (includes a +5% extra bonus).',
      },
      {
        label: 'Quick Deposit Preset Cards',
        copy: 'One-click deposit selections ranging from Rs 500 to Rs 100,000 with instant bonus callouts.',
      },
      {
        label: 'Custom Amount Entry',
        copy: 'Manual input box allowing you to enter any custom deposit amount within flexible minimum and maximum limits.',
      },
    ],
    href: '#deposit',
    cta: 'View Deposit & Wallet →',
    preview: <DepositPreview />,
  },
  {
    id: 'promotions',
    filter: 'promotions',
    tab: 'Promotions',
    title: 'Promotions & Rewards Center',
    badge: 'RS 1,000,000 DROPS',
    badgeTone: 'gold',
    details: [
      {
        label: 'Member Days Banner',
        copy: 'Special events and rewards active on the 6th, 16th, and 26th of every month.',
      },
      {
        label: '7-Day Login Streak',
        copy: 'Daily check-in rewards that scale with continuous logins.',
      },
      {
        label: 'Referral Program',
        copy: 'Earn up to Rs 2,000 for every invited friend via your direct link.',
      },
      {
        label: 'Loss Relief Cashback',
        copy: 'Automatic tracking for up to 8% weekly cashback on net game losses.',
      },
      {
        label: 'Redeem Code Field',
        copy: 'Quick input box to claim promotional gifts and vouchers.',
      },
    ],
    preview: <PromotionsPreview />,
  },
  {
    id: 'vip',
    filter: 'vip',
    tab: 'VIP Levels',
    title: 'VIP Tier & Loyalty Progress',
    badge: 'UP TO RS 1,529,997',
    badgeTone: 'gold',
    details: [
      {
        label: 'VIP Status & Progress',
        copy: 'Live tier badge (VIP 1) with a progress bar tracking remaining wagering requirements (Bet Rs 800 for VIP 2).',
      },
      {
        label: 'Tier Perks Grid',
        copy: 'Quick-view breakdown of unlocked level-up bonuses, weekly rebates, and priority withdrawal benefits.',
      },
      {
        label: 'Cumulative Rewards Table',
        copy: 'Complete mapping of cumulative cash rewards from VIP 0 up to VIP 15 (scaling up to Rs 1,529,997).',
      },
    ],
    href: '#vip',
    cta: 'View VIP Loyalty →',
    preview: <VipPreview />,
  },
]

function badgeClass(tone: Screen['badgeTone']) {
  return tone === 'green'
    ? 'border-[#4ade80]/40 bg-[#4ade80]/15 text-[#4ade80]'
    : 'border-[#eab308]/40 bg-[#eab308]/15 text-[#eab308]'
}

function ScreenDetails({
  intro,
  details,
  className,
}: {
  intro?: string
  details: Screen['details']
  className: string
}) {
  const list =
    typeof details === 'string' ? (
      <p className={intro ? 'mt-2.5' : className}>{details}</p>
    ) : (
      <ul className={`${intro ? 'mt-2.5' : className} space-y-2.5`}>
        {details.map((item) => (
          <li key={item.label}>
            <span className="font-semibold text-white">{item.label}:</span> {item.copy}
          </li>
        ))}
      </ul>
    )

  if (!intro) return list

  return (
    <div className={className}>
      <p>{intro}</p>
      {list}
    </div>
  )
}

export function Media() {
  const tabLabel = useId()
  const [filter, setFilter] = useState<Filter>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const visible = screens.filter((screen) => filter === 'all' || screen.filter === filter)
  const active = openIndex === null ? null : screens[openIndex]

  const close = () => setOpenIndex(null)
  const showPrev = () => {
    setOpenIndex((current) => (current === null ? 0 : (current + screens.length - 1) % screens.length))
  }
  const showNext = () => {
    setOpenIndex((current) => (current === null ? 0 : (current + 1) % screens.length))
  }

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [openIndex])

  return (
    <section id="media" className="grove-section px-[6vw] py-[5.5rem]">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="APP INTERFACE & MEDIA"
          title="Explore K666 App Interface & Features"
          copy="Explore official interface previews of the K666 mobile app—from account creation and game lobby navigation to payment wallets and VIP rewards."
        />

        <div
          role="tablist"
          aria-labelledby={tabLabel}
          className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <span id={tabLabel} className="sr-only">
            Media filters
          </span>
          {tabs.map((tab) => {
            const selected = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(tab.id)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[0.82rem] font-semibold whitespace-nowrap transition ${
                  selected
                    ? 'bg-[#eab308] text-[#031711] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)]'
                    : 'border border-[#1e5242] bg-[#124a3a] text-white hover:border-[#eab308]/60'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((screen) => {
            const index = screens.findIndex((item) => item.id === screen.id)
            const cardClass =
              'group rounded-2xl border border-[#1e5242] bg-[rgba(18,74,58,0.72)] p-5 text-left backdrop-blur-md transition hover:border-[#eab308]'
            const content = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#4ade80] uppercase">
                    {screen.tab}
                  </p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[0.58rem] font-bold tracking-[0.08em] uppercase ${badgeClass(screen.badgeTone)}`}
                  >
                    {screen.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-[1.05rem] font-bold text-white">{screen.title}</h3>
                <div className="mt-4 origin-center transition-transform duration-300 group-hover:scale-105">
                  <div className="pointer-events-none">{screen.preview}</div>
                </div>
                <ScreenDetails
                  intro={screen.intro}
                  details={screen.details}
                  className="mt-4 text-[0.88rem] leading-relaxed text-white/75"
                />
                <p className="mt-4 text-[0.92rem] font-semibold text-[#4ade80]">
                  {screen.cta ?? 'Click to View Full Size 🔍'}
                </p>
              </>
            )

            if (screen.href) {
              return (
                <a key={screen.id} href={screen.href} className={cardClass}>
                  {content}
                </a>
              )
            }

            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setOpenIndex(index)}
                className={cardClass}
              >
                {content}
              </button>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#eab308]/30 bg-[#031711] px-5 py-6 sm:flex-row sm:items-center md:px-8">
          <p className="max-w-xl text-[1.05rem] font-semibold text-white">
            Ready to test the live app interface on your mobile device?
          </p>
          <a
            href={APK_URL}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#eab308] px-6 py-3.5 text-center text-[0.92rem] font-semibold text-[#031711] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] transition hover:brightness-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download K666 APK Latest Version
          </a>
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="media-lightbox-title"
          onClick={close}
        >
          <div
            className="relative grid max-h-[min(92svh,56rem)] w-full max-w-5xl overflow-y-auto rounded-2xl border border-[#1e5242] bg-[#0d3b2e] p-5 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-[#eab308]/30 text-xl text-white hover:bg-[#124a3a]"
              aria-label="Close"
              onClick={close}
            >
              ×
            </button>
            <div className="mx-auto scale-110 py-6 md:scale-125 md:py-10">{active.preview}</div>
            <div className="mt-4 md:mt-0 md:pr-8">
              <span
                className={`inline-flex rounded-full border px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.08em] uppercase ${badgeClass(active.badgeTone)}`}
              >
                {active.badge}
              </span>
              <h3 id="media-lightbox-title" className="mt-3 text-[1.45rem] font-bold text-white">
                {active.title}
              </h3>
              <ScreenDetails
                intro={active.intro}
                details={active.details}
                className="mt-3 text-[1rem] leading-relaxed text-white/80"
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-lg border-2 border-[#4ade80] px-4 py-2.5 text-sm font-semibold text-[#4ade80] hover:bg-[#4ade80]/10"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-lg bg-[#eab308] px-4 py-2.5 text-sm font-semibold text-[#031711] hover:brightness-110"
                >
                  Next →
                </button>
              </div>
              <p className="mt-3 text-[0.78rem] text-white/50">
                {(openIndex ?? 0) + 1} / {screens.length} · Esc to close
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
