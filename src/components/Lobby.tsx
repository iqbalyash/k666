import { useId, useState } from 'react'
import { SectionHead } from './ui.tsx'

type Category = 'hot' | 'mini' | 'slots' | 'cards' | 'fishing' | 'live' | 'sports'

type Game = {
  id: string
  title: string
  provider: string
  emoji: string
  art: string
}

type Section = {
  id: Category
  heading: string
  games: readonly Game[]
}

const tabs: { id: Category; label: string }[] = [
  { id: 'hot', label: '🔥 Hot' },
  { id: 'mini', label: '🎮 Mini Games' },
  { id: 'slots', label: '🎰 Slots' },
  { id: 'cards', label: '🎴 Cards' },
  { id: 'fishing', label: '🐟 Fishing' },
  { id: 'live', label: '💃 Live Casino' },
  { id: 'sports', label: '⚽ Sports' },
]

const sections: Section[] = [
  {
    id: 'hot',
    heading: '🔥 Hot & Aviator / Crash Games',
    games: [
      {
        id: 'aviator',
        title: 'Aviator',
        provider: 'WG, 2J, SPRIBE',
        emoji: '✈️',
        art: 'from-[#0f2747] via-[#dc2626] to-[#f59e0b]',
      },
      {
        id: 'chicken-road',
        title: 'Chicken Road 2.0',
        provider: 'INOUT',
        emoji: '🐔',
        art: 'from-[#7c2d12] via-[#ea580c] to-[#facc15]',
      },
    ],
  },
  {
    id: 'slots',
    heading: '🎰 Popular Slots',
    games: [
      {
        id: 'fortune-garuda-500',
        title: 'Fortune Garuda 500',
        provider: 'JILI Slots',
        emoji: '🦅',
        art: 'from-[#7f1d1d] via-[#b45309] to-[#fbbf24]',
      },
      {
        id: 'crazy-777',
        title: 'Crazy 777',
        provider: 'JILI Slots',
        emoji: '🎰',
        art: 'from-[#4c1d95] via-[#7c3aed] to-[#f59e0b]',
      },
      {
        id: 'fortune-gems-3',
        title: 'Fortune Gems 3',
        provider: 'JILI Slots',
        emoji: '💎',
        art: 'from-[#064e3b] via-[#059669] to-[#67e8f9]',
      },
      {
        id: 'fortune-gems-2',
        title: 'Fortune Gems 2',
        provider: 'JILI Slots',
        emoji: '💠',
        art: 'from-[#134e4a] via-[#0d9488] to-[#a7f3d0]',
      },
      {
        id: 'money-coming',
        title: 'Money Coming',
        provider: 'JILI Slots',
        emoji: '💸',
        art: 'from-[#14532d] via-[#16a34a] to-[#bef264]',
      },
      {
        id: 'fortune-dragon',
        title: 'Fortune Dragon',
        provider: 'PG Soft Slots',
        emoji: '🐲',
        art: 'from-[#7f1d1d] via-[#dc2626] to-[#facc15]',
      },
      {
        id: 'piggy-bank',
        title: 'Piggy Bank',
        provider: 'JDB Slots',
        emoji: '🐷',
        art: 'from-[#9d174d] via-[#ec4899] to-[#fecdd3]',
      },
      {
        id: 'pp-slots',
        title: 'PP Slots',
        provider: 'Pragmatic Play',
        emoji: '🔮',
        art: 'from-[#1e1b4b] via-[#4338ca] to-[#22d3ee]',
      },
      {
        id: 'fc-slots',
        title: 'FC Slots',
        provider: 'FC',
        emoji: '⭐',
        art: 'from-[#7c2d12] via-[#f97316] to-[#fde047]',
      },
    ],
  },
  {
    id: 'mini',
    heading: '🎮 Mini & Blockchain Games',
    games: [
      {
        id: 'spribe-games',
        title: 'Spribe Games',
        provider: 'Spribe',
        emoji: '🎲',
        art: 'from-[#0f172a] via-[#1d4ed8] to-[#38bdf8]',
      },
      {
        id: 'wg-blockchain',
        title: 'WG Blockchain',
        provider: 'WG',
        emoji: '⛓️',
        art: 'from-[#111827] via-[#0f766e] to-[#5eead4]',
      },
      {
        id: 'inout-games',
        title: 'INOUT Games',
        provider: 'INOUT',
        emoji: '🕹️',
        art: 'from-[#3f1d0a] via-[#c2410c] to-[#fdba74]',
      },
      {
        id: 'jili-blockchain',
        title: 'JILI Blockchain',
        provider: 'JILI',
        emoji: '🪙',
        art: 'from-[#422006] via-[#ca8a04] to-[#fef08a]',
      },
      {
        id: 'twoj-games',
        title: '2J Games',
        provider: '2J',
        emoji: '⚡',
        art: 'from-[#1e3a8a] via-[#2563eb] to-[#facc15]',
      },
    ],
  },
  {
    id: 'cards',
    heading: '🎴 Cards & Table Games',
    games: [
      {
        id: 'andar-bahar',
        title: 'Andar Bahar',
        provider: 'JILI Cards',
        emoji: '🃏',
        art: 'from-[#1a2e1a] via-[#166534] to-[#86efac]',
      },
      {
        id: 'teen-patti',
        title: 'Teen Patti',
        provider: 'JILI Cards',
        emoji: '🎴',
        art: 'from-[#3b0764] via-[#7e22ce] to-[#f0abfc]',
      },
      {
        id: 'dragon-tiger',
        title: 'Dragon Tiger',
        provider: 'JILI Cards',
        emoji: '🐉',
        art: 'from-[#7f1d1d] via-[#dc2626] to-[#fbbf24]',
      },
      {
        id: 'dice',
        title: 'Dice',
        provider: 'JILI Cards',
        emoji: '🎲',
        art: 'from-[#1e293b] via-[#334155] to-[#e2e8f0]',
      },
      {
        id: 'wg-cards',
        title: 'WG Cards',
        provider: 'WG',
        emoji: '♠️',
        art: 'from-[#052e16] via-[#15803d] to-[#bbf7d0]',
      },
      {
        id: 'kingmidas',
        title: 'KingMidas',
        provider: 'KingMidas',
        emoji: '👑',
        art: 'from-[#713f12] via-[#eab308] to-[#fef9c3]',
      },
      {
        id: 'dragoon-soft-cards',
        title: 'Dragoon Soft Cards',
        provider: 'Dragoon Soft',
        emoji: '🐉',
        art: 'from-[#1c1917] via-[#b91c1c] to-[#f59e0b]',
      },
      {
        id: 'mw-cards',
        title: 'MW Cards',
        provider: 'MW',
        emoji: '♥️',
        art: 'from-[#4c0519] via-[#be123c] to-[#fda4af]',
      },
      {
        id: 'hb-cards',
        title: 'HB Cards',
        provider: 'HB',
        emoji: '♣️',
        art: 'from-[#172554] via-[#1d4ed8] to-[#93c5fd]',
      },
    ],
  },
  {
    id: 'fishing',
    heading: '🐟 Fishing Arcade',
    games: [
      {
        id: 'star-hunter',
        title: 'Star Hunter',
        provider: 'FC Fishing',
        emoji: '🌟',
        art: 'from-[#082f49] via-[#0284c7] to-[#facc15]',
      },
      {
        id: 'jili-fishing',
        title: 'JILI Fishing',
        provider: 'JILI',
        emoji: '🎣',
        art: 'from-[#164e63] via-[#0891b2] to-[#67e8f9]',
      },
      {
        id: 'wg-fishing',
        title: 'WG Fishing',
        provider: 'WG',
        emoji: '🐠',
        art: 'from-[#042f2e] via-[#0f766e] to-[#5eead4]',
      },
      {
        id: 'jdb-fishing',
        title: 'JDB Fishing',
        provider: 'JDB',
        emoji: '🐡',
        art: 'from-[#1e3a8a] via-[#2563eb] to-[#7dd3fc]',
      },
      {
        id: 'yellowbat-fishing',
        title: 'YellowBat Fishing',
        provider: 'YellowBat',
        emoji: '🦇',
        art: 'from-[#422006] via-[#ca8a04] to-[#fde047]',
      },
      {
        id: 'mg-fishing',
        title: 'MG Fishing',
        provider: 'MG',
        emoji: '🐟',
        art: 'from-[#0c4a6e] via-[#0369a1] to-[#bae6fd]',
      },
    ],
  },
  {
    id: 'live',
    heading: '💃 Live Dealer Casino',
    games: [
      {
        id: 'evo-live',
        title: 'Evolution Gaming',
        provider: 'EVO Live',
        emoji: '🎥',
        art: 'from-[#111827] via-[#1f2937] to-[#d4af37]',
      },
      {
        id: 'sexy-live',
        title: 'SEXY Live',
        provider: 'SEXY Live',
        emoji: '💃',
        art: 'from-[#4a044e] via-[#db2777] to-[#fb7185]',
      },
      {
        id: 'pp-live',
        title: 'Pragmatic Play Live',
        provider: 'PP Live',
        emoji: '♣️',
        art: 'from-[#1e1b4b] via-[#6d28d9] to-[#c4b5fd]',
      },
    ],
  },
  {
    id: 'sports',
    heading: '⚽ Sportsbook',
    games: [
      {
        id: '9wickets',
        title: '9Wickets Sports',
        provider: 'Cricket',
        emoji: '🏏',
        art: 'from-[#14532d] via-[#16a34a] to-[#86efac]',
      },
      {
        id: 'im-sports',
        title: 'IM Sports',
        provider: 'Basketball',
        emoji: '🏀',
        art: 'from-[#7c2d12] via-[#ea580c] to-[#fdba74]',
      },
      {
        id: 'fb-sports',
        title: 'FB Sports',
        provider: 'Football/Soccer',
        emoji: '⚽',
        art: 'from-[#1e3a8a] via-[#2563eb] to-[#93c5fd]',
      },
    ],
  },
]

export function Lobby() {
  const tabLabel = useId()
  const [category, setCategory] = useState<Category>('hot')
  const [selected, setSelected] = useState('aviator')
  const visible = sections.filter((section) => section.id === category)
  const activeGame = visible.flatMap((section) => section.games).find((game) => game.id === selected)

  const selectTab = (id: Category) => {
    setCategory(id)
    const first = sections.find((section) => section.id === id)?.games[0]
    if (first) setSelected(first.id)
  }

  return (
    <section id="games" className="grove-section px-[6vw] py-[5.5rem]">
      <SectionHead
        kicker="Games"
        title="Game lobby."
        copy="Jump into Hot & Crash titles like Aviator, Slots such as Fortune Gems 3, Cards including Teen Patti and Andar Bahar, Fishing like Star Hunter, Live Casino tables, and a full Sportsbook."
      />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] px-4 py-5 text-white backdrop-blur-sm sm:px-6 md:px-7 md:py-6">
        <p id={tabLabel} className="mb-3 text-[0.72rem] font-medium tracking-[0.1em] text-white/70 uppercase">
          Categories
        </p>
        <div
          role="tablist"
          aria-labelledby={tabLabel}
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => {
            const active = category === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectTab(tab.id)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[0.82rem] font-semibold whitespace-nowrap transition ${
                  active
                    ? 'bg-sun text-grove shadow-[0_8px_20px_rgb(234_179_8_/_0.28)]'
                    : 'border border-white/10 bg-grove-card text-white hover:border-sun/50'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {visible.map((section) => (
          <div key={section.id} className="mt-6">
            <h3 className="mb-3 text-[1.05rem] font-semibold text-sun">{section.heading}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {section.games.map((game) => {
                const active = selected === game.id
                return (
                  <button
                    key={game.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected(game.id)}
                    className={`overflow-hidden rounded-xl border text-left transition ${
                      active
                        ? 'border-sun shadow-[0_10px_24px_rgb(234_179_8_/_0.28)]'
                        : 'border-white/10 hover:border-sun/60'
                    }`}
                  >
                    <div className={`relative aspect-[4/3] bg-gradient-to-br ${game.art}`}>
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgb(255_255_255_/_0.32),transparent_46%)]"
                        aria-hidden="true"
                      />
                      <span className="absolute inset-0 grid place-items-center text-[2.6rem] drop-shadow-[0_8px_16px_rgb(0_0_0_/_0.45)]">
                        {game.emoji}
                      </span>
                      {section.id === 'hot' ? (
                        <span className="absolute top-2 left-2 rounded-full bg-[#ff2d2d] px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-[0.12em] text-white uppercase">
                          Hot
                        </span>
                      ) : null}
                    </div>
                    <div className={`px-3 py-2.5 ${active ? 'bg-sun text-grove' : 'bg-grove-card'}`}>
                      <span className="block text-[0.9rem] font-semibold">{game.title}</span>
                      <span className={`mt-0.5 block text-[0.72rem] ${active ? 'text-grove/75' : 'text-white/65'}`}>
                        {game.provider}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {activeGame ? (
          <p className="mt-5 text-[0.88rem] text-sun" role="status">
            {activeGame.title} — {activeGame.provider}
          </p>
        ) : null}
      </div>
    </section>
  )
}
