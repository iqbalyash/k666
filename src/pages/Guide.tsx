import type { ReactNode } from 'react'
import { Features } from '../components/Features.tsx'
import { APK_URL, PageMeta } from '../components/ui.tsx'

const toc = [
  { id: 'account', label: '1. Account' },
  { id: 'guide-games', label: '2. Catalog' },
  { id: 'guide-bonuses', label: '3. Rewards' },
  { id: 'guide-vip', label: '4. VIP' },
  { id: 'guide-referral', label: '5. Referral' },
  { id: 'guide-banking', label: '6. Banking' },
  { id: 'guide-support', label: '7. Support' },
]

const accountFeatures = [
  {
    title: 'Flexible Registration Options',
    body: 'Register quickly using either a local mobile phone number (+92 Pakistan country code default) or a valid email address.',
  },
  {
    title: 'Authentication Controls',
    body: 'Choose between traditional password setup or instant SMS/email Verification Codes for account access.',
  },
  {
    title: 'Social & Quick Sign-In',
    body: 'One-click integration allowing users to bind and log in via Google, Facebook, or Telegram.',
  },
  {
    title: 'Demo Mode',
    body: 'Free-to-play mode accessible directly from the login/registration interface, allowing users to practice games without risking real balance.',
  },
  {
    title: 'Account Safety & Verification',
    body: 'Mandatory 18+ age verification and mobile phone SMS verification to protect player accounts and enforce security.',
  },
]

const catalog = [
  {
    emoji: '🔥',
    title: 'Hot & Crash / Aviator Games',
    body: 'Features the popular Aviator crash game powered by multiple top providers (WG, 2J, SPRIBE) alongside Chicken Road 2.0 by INOUT.',
  },
  {
    emoji: '🎰',
    title: 'Slot Games',
    body: 'JILI Slots (Fortune Garuda 500, Crazy 777, Fortune Gems 2, Fortune Gems 3, Money Coming), PG Soft Slots (Fortune Dragon), JDB Slots (Piggy Bank), plus libraries from Pragmatic Play (PP), FC, and WG Slots.',
  },
  {
    emoji: '🎮',
    title: 'Mini Games & Blockchain',
    body: 'Fast-paced mini and crypto-style games hosted by Spribe, WG, INOUT, JILI, 2J, and JDB.',
  },
  {
    emoji: '🎴',
    title: 'Cards & Table Games',
    body: 'Traditional favorites including Andar Bahar, Teen Patti, and Dice by JILI, plus table options from WG Cards, KingMidas, Dragoon Soft, MW Cards, and HB Cards.',
  },
  {
    emoji: '🐟',
    title: 'Fishing Arcade Games',
    body: 'Action shooter fishing games like Star Hunter (FC Fishing) alongside JILI, WG, JDB, YellowBat, and MG Fishing titles.',
  },
  {
    emoji: '💃',
    title: 'Live Casino Dealers',
    body: 'Real-time live streaming casino tables hosted by Evolution Gaming (EVO Live), SEXY Live, and Pragmatic Play Live (PP Live).',
  },
  {
    emoji: '⚽',
    title: 'Sportsbook Betting',
    body: 'Live sports coverage including 9Wickets Sports (Cricket focus), IM Sports (Basketball), and FB Sports (Soccer/Football).',
  },
]

const rewards = [
  ['New Player Bonus', 'Instant signup bonus upon creating an account.', 'Rs 70.00'],
  [
    'App Download Reward',
    'Bonus credited for installing the official app and funding your wallet.',
    'Rs 100.00',
  ],
  [
    'Newplayer Mission Chests',
    'Complete SMS verification, payment binding, and first deposit to unlock reward chests.',
    'Progressive milestones (-100 to -700)',
  ],
  [
    'First Deposit Percentage Match',
    'Deposit Rs 1,000 or more to qualify for high-tier percentage match bonuses.',
    '30%+ Match (Up to Rs 50,000–100,000 total event max)',
  ],
  [
    'Daily Check-In',
    'Log in every day to claim increasing daily streak rewards.',
    'Tiered daily cash credit',
  ],
  [
    'Spin Wheel Events',
    'Share event spins on daily, weekly, and monthly scales.',
    'Daily (up to Rs 300), Weekly (up to Rs 666), Monthly (up to Rs 10,000)',
  ],
  [
    'Lucky 6 Celebration',
    'Monthly cash prize drops occurring on the 6th, 16th, and 26th of every month.',
    'Special cash drops from Rs 10 to Rs 1,000,000',
  ],
  [
    'Loss Relief (Cashback)',
    'Automatic cashback protection on net game losses.',
    'Up to 8% Game Loss Cashback',
  ],
  [
    'Social Media Redeem Codes',
    'Exclusive redeem codes dropped on WhatsApp, Telegram, and Facebook.',
    'Redeem codes valued from Rs 10 to Rs 66,666',
  ],
]

const vipOverview = [
  {
    title: 'Automated Tier Progression',
    body: 'Real-money wagering automatically fills the VIP status bar.',
  },
  {
    title: 'Entry Threshold',
    body: 'Upgrading from VIP 0 to VIP 1 requires a Rs 100 deposit and Rs 800 total valid bets.',
  },
  {
    title: 'Total Payout Limit',
    body: '16 distinct VIP levels (VIP 0 to VIP 15) scaling up to a cumulative Rs 1,529,997.00 bonus at VIP 15.',
  },
]

const vipRows = [
  ['VIP 0', 'Account Creation', 'Rs 0.00'],
  ['VIP 1', 'Deposit 100.00 & Bet 800.00', 'Rs 13.00'],
  ['VIP 2–4', 'Dynamic Progress Criteria', 'Rs 27.00 – Rs 228.00'],
  ['VIP 5', 'Dynamic Progress Criteria', 'Rs 665.00'],
  ['VIP 10', 'Dynamic Progress Criteria', 'Rs 52,597.00'],
  ['VIP 15', 'Maximum Tier Reached', 'Rs 1,529,997.00'],
]

const referral = [
  {
    title: 'Instant Invitation Bonus',
    body: 'Receive Rs 666 instantly for inviting qualifying friends.',
  },
  {
    title: 'Referral Bounty',
    body: 'Earn up to Rs 2,000 total per referred active player.',
  },
  {
    title: 'Daily Commission Stream',
    body: 'Earn up to 3.0% daily commission on the wagering activity of invited downline players.',
  },
  {
    title: 'K666 Agency Program',
    body: 'Dedicated management backend for top agents offering daily bonus pools up to Rs 666,666.',
  },
]

const banking = [
  {
    title: 'Supported Payment Channels',
    body: 'Integrated with local mobile e-wallets (JazzCash and EasyPaisa) alongside Cryptocurrency deposit options.',
  },
  {
    title: 'Crypto Deposit Incentive',
    body: 'Depositing via Cryptocurrency automatically grants a +5% extra bonus.',
  },
  {
    title: 'Flexible Deposit Limits',
    body: 'Deposits accepted from a minimum of Rs 100 up to a maximum of Rs 100,000 per transaction.',
  },
  {
    title: 'Bonus Turnover System',
    body: 'Bonus funds require a standard 15x turnover (valid betting volume on designated slot, blockchain, and crash games) prior to withdrawal authorization.',
  },
]

const support = [
  {
    title: '24/7 Live Support',
    body: 'Built-in in-app live chat for real-time customer assistance.',
  },
  {
    title: 'Direct Messaging Channels',
    body: 'Dedicated official support channels on WhatsApp (online 00:00–23:59) and Telegram.',
  },
  {
    title: 'Interactive Help Center',
    body: 'Integrated self-service search hub for resolving common issues regarding passwords, cashout requirements, reloads, and agent setups.',
  },
]

function CtaPair() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={APK_URL}
        className="inline-flex items-center justify-center rounded-lg bg-[#eab308] px-6 py-3.5 text-center text-[0.92rem] font-semibold text-[#031711] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] transition hover:brightness-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download APK Latest Version
      </a>
      <a
        href={APK_URL}
        className="inline-flex items-center justify-center rounded-lg border-2 border-[#4ade80] bg-transparent px-6 py-3.5 text-center text-[0.92rem] font-semibold text-[#4ade80] transition hover:bg-[#4ade80]/10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Account
      </a>
    </div>
  )
}

function GuideSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[clamp(1.45rem,3vw,2rem)] font-bold text-[#eab308]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function FeatureList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-xl border border-[#eab308]/20 bg-[#124a3a] px-4 py-4"
        >
          <p className="font-semibold text-white">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
            {item.title}
          </p>
          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

function DataTable({
  columns,
  rows,
}: {
  columns: [string, string, string]
  rows: string[][]
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#eab308]/25 bg-[#031711]">
      <table className="w-full min-w-[40rem] border-collapse text-left text-[0.9rem]">
        <thead className="bg-[#0d3b2e] text-[0.72rem] tracking-[0.08em] text-[#eab308] uppercase">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 font-semibold whitespace-nowrap">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-white/10">
              <th scope="row" className="px-4 py-3.5 font-semibold whitespace-nowrap text-[#4ade80]">
                {row[0]}
              </th>
              <td className="px-4 py-3.5 text-white/85">{row[1]}</td>
              <td className="px-4 py-3.5 font-medium text-[#eab308]">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Guide() {
  return (
    <article className="bg-[#0d3b2e] text-white">
      <PageMeta title="K666 Game Features Breakdown: Complete Guide" />

      <header className="border-b border-[#eab308]/20 bg-[#031711] px-[6vw] py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.22em] text-[#4ade80] uppercase">
            Features guide
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.12] text-white">
            K666 Game Features Breakdown: Complete Guide
          </h1>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-white/80">
            Explore real-money gaming features, extensive provider catalogs, VIP levels, new player
            rewards, and localized banking options for Pakistani players.
          </p>
          <div className="mt-8">
            <CtaPair />
          </div>
        </div>
      </header>

      <Features id="guide-section" variant="guide" />

      <div id="full-guide-section" className="scroll-mt-28 mx-auto max-w-5xl px-[6vw] py-10 md:py-14">
        <nav
          aria-label="Guide sections"
          className="mb-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-[#eab308]/30 bg-[#124a3a] px-3 py-1.5 text-[0.72rem] font-semibold tracking-wide text-[#eab308] uppercase hover:bg-[#eab308] hover:text-[#031711]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="grid gap-14">
          <GuideSection id="account" title="1. Account Creation & Security Features">
            <p className="mb-5 text-[1.02rem] leading-relaxed text-white/85">
              Getting started on K666 is straightforward, with flexible authentication methods
              designed for security and speed.
            </p>
            <FeatureList items={accountFeatures} />
          </GuideSection>

          <GuideSection id="guide-games" title="2. Extensive Game Catalog & Software Providers">
            <div className="grid gap-3 sm:grid-cols-2">
              {catalog.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#eab308]/20 bg-[#124a3a] px-4 py-4"
                >
                  <h3 className="text-[1.02rem] font-bold text-[#eab308]">
                    <span className="mr-2" aria-hidden="true">
                      {item.emoji}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
                </article>
              ))}
            </div>
          </GuideSection>

          <GuideSection id="guide-bonuses" title="3. Reward System & Promotion Mechanics">
            <DataTable
              columns={['Reward Category', 'Feature Description', 'Payout / Benefit']}
              rows={rewards}
            />
          </GuideSection>

          <GuideSection id="guide-vip" title="4. VIP Loyalty Program">
            <div className="mb-5 grid gap-3 md:grid-cols-3">
              {vipOverview.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#eab308]/25 bg-[#031711] px-4 py-4"
                >
                  <h3 className="font-bold text-[#4ade80]">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
                </article>
              ))}
            </div>
            <DataTable
              columns={['VIP Level', 'Upgrade Requirement', 'Cumulative Total Bonus']}
              rows={vipRows}
            />
          </GuideSection>

          <GuideSection id="guide-referral" title="5. Multi-Tier Referral & Agent Program">
            <div className="grid gap-3 sm:grid-cols-2">
              {referral.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#eab308]/20 bg-[#124a3a] px-4 py-4"
                >
                  <h3 className="font-bold text-[#eab308]">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{item.body}</p>
                </article>
              ))}
            </div>
          </GuideSection>

          <GuideSection id="guide-banking" title="6. Banking & Financial Operations">
            <FeatureList items={banking} />
          </GuideSection>

          <GuideSection id="guide-support" title="7. Customer Service & Support Channels">
            <FeatureList items={support} />
          </GuideSection>
        </div>

        <div className="mt-14 rounded-2xl border border-[#eab308]/30 bg-[#031711] px-5 py-8 md:px-8">
          <p className="text-[1.15rem] font-semibold text-white">Ready to play K666?</p>
          <p className="mt-2 mb-6 text-white/75">
            Download the latest APK or register an account to unlock the Rs 70.00 signup bonus.
          </p>
          <CtaPair />
        </div>
      </div>
    </article>
  )
}
