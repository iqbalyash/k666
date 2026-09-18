import { useId, useState } from 'react'
import { SectionHead } from './ui.tsx'

const CURRENT_VIP = 1
const NEXT_VIP = 2
const CURRENT_DEPOSIT = 0
const CURRENT_BET = 0
const NEXT_DEPOSIT = 500
const NEXT_BET = 800

const levels = [
  { level: 0, bonus: 0 },
  { level: 1, bonus: 13 },
  { level: 2, bonus: 27 },
  { level: 3, bonus: 83 },
  { level: 4, bonus: 228 },
  { level: 5, bonus: 665 },
  { level: 6, bonus: 1_429 },
  { level: 7, bonus: 3_358 },
  { level: 8, bonus: 6_648 },
  { level: 9, bonus: 15_297 },
  { level: 10, bonus: 52_597 },
  { level: 11, bonus: 87_497 },
  { level: 12, bonus: 162_997 },
  { level: 13, bonus: 549_997 },
  { level: 14, bonus: 919_997 },
  { level: 15, bonus: 1_529_997 },
] as const

function formatRs(value: number) {
  return `Rs ${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function isElite(level: number) {
  return level >= 10
}

function ProgressTrack({
  label,
  current,
  target,
}: {
  label: string
  current: number
  target: number
}) {
  const pct = Math.min(100, Math.round((current / target) * 100))
  const copy = `${current.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} / ${target.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${label}`

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-3 text-[0.82rem]">
        <span className="text-white/70">{copy}</span>
        <span className="text-sun tabular-nums">{pct}%</span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-black/40"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={copy}
      >
        <div
          className="h-full rounded-full bg-sun shadow-[0_0_14px_rgb(234_179_8_/_0.45)]"
          style={{ width: `${Math.max(pct, 0)}%` }}
        />
      </div>
    </div>
  )
}

export function Vip() {
  const tableCaption = useId()
  const [selected, setSelected] = useState(CURRENT_VIP)
  const preview = levels[selected]

  return (
    <section id="vip" className="grove-section px-[6vw] py-[5.5rem]">
      <SectionHead
        kicker="House ranks"
        title="VIP loyalty program."
        copy="Track your desk, unlock upgrade drops, and climb the cumulative bonus ladder through VIP 15."
      />

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] px-5 py-5 text-white backdrop-blur-sm md:px-7 md:py-6">
        <article className="rounded-xl border border-sun/20 bg-grove-card px-4 py-5 md:px-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-[1.15rem] font-semibold tracking-wide text-sun">Your VIP Progress</h3>
            <p className="rounded-full border border-sun/40 bg-sun px-3 py-1 text-[0.78rem] font-semibold tracking-[0.14em] text-grove uppercase shadow-[0_0_18px_rgb(234_179_8_/_0.35)]">
              VIP {CURRENT_VIP}
            </p>
          </div>

          <p className="mt-4 rounded-lg border border-sun/25 bg-grove px-3.5 py-3 text-[0.92rem] leading-relaxed text-white">
            {`VIP ${CURRENT_VIP} active. Bet ${formatRs(NEXT_BET)} to reach VIP ${NEXT_VIP}.`}
          </p>

          <div className="mt-4 grid gap-4">
            <ProgressTrack label="Deposit" current={CURRENT_DEPOSIT} target={NEXT_DEPOSIT} />
            <ProgressTrack label="Bets" current={CURRENT_BET} target={NEXT_BET} />
          </div>
        </article>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-xl border border-sun/25 bg-grove-card px-4 py-4">
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-[#4ade80] uppercase">
              Level-up bonuses
            </p>
            <p className="mt-1.5 text-[0.95rem] leading-snug font-medium text-white">
              Instant upgrade drops as you climb VIP 1 to VIP 15
            </p>
          </article>
          <article className="rounded-xl border border-sun/25 bg-grove-card px-4 py-4">
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-[#4ade80] uppercase">
              Weekly rebates
            </p>
            <p className="mt-1.5 text-[0.95rem] leading-snug font-medium text-white">
              Recurring cashback and rebate perks at each VIP desk
            </p>
          </article>
          <article className="rounded-xl border border-sun/25 bg-grove-card px-4 py-4">
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-[#4ade80] uppercase">
              Priority withdrawals
            </p>
            <p className="mt-1.5 text-[0.95rem] leading-snug font-medium text-white">
              Faster payout review as your loyalty tier rises
            </p>
          </article>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-sun/20 bg-grove-card">
          <p id={tableCaption} className="sr-only">
            VIP levels and cumulative total bonus in PKR
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left" aria-labelledby={tableCaption}>
              <thead className="bg-grove-deep/80 text-[0.72rem] tracking-[0.08em] text-sun uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold md:px-5">VIP Level</th>
                  <th className="px-4 py-3 text-right font-semibold md:px-5">
                    Cumulative Total Bonus (PKR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {levels.map((row) => {
                  const elite = isElite(row.level)
                  const current = row.level === CURRENT_VIP
                  const active = row.level === selected
                  return (
                    <tr
                      key={row.level}
                      className={`cursor-pointer border-t transition ${
                        elite
                          ? 'border-sun/50 bg-sun/12 shadow-[inset_0_0_0_1px_rgb(234_179_8_/_0.45),inset_0_0_28px_rgb(234_179_8_/_0.16)]'
                          : 'border-white/10'
                      } ${
                        active
                          ? elite
                            ? 'bg-sun/22'
                            : 'bg-sun/14'
                          : elite
                            ? 'hover:bg-sun/18'
                            : 'hover:bg-white/5'
                      }`}
                      onClick={() => setSelected(row.level)}
                    >
                      <td className="px-4 py-3 md:px-5">
                        <button
                          type="button"
                          aria-pressed={active}
                          onClick={() => setSelected(row.level)}
                          className={`text-[0.95rem] font-semibold ${elite ? 'text-sun drop-shadow-[0_0_10px_rgb(234_179_8_/_0.55)]' : 'text-sun'}`}
                        >
                          VIP {row.level}
                        </button>
                        {current ? (
                          <span className="ml-2 rounded-full bg-sun px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-[0.12em] text-grove uppercase">
                            Current
                          </span>
                        ) : null}
                        {elite ? (
                          <span className="ml-2 rounded-full border border-sun/50 px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-[0.12em] text-sun uppercase">
                            Elite
                          </span>
                        ) : null}
                      </td>
                      <td
                        className={`px-4 py-3 text-right font-medium tabular-nums md:px-5 ${
                          elite ? 'text-sun' : 'text-amber-200'
                        }`}
                      >
                        {formatRs(row.bonus)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-[0.88rem] text-sun" role="status">
          VIP {preview.level} selected · Cumulative Total Bonus {formatRs(preview.bonus)}
          {isElite(preview.level) ? ' · Elite tier' : ''}
        </p>
      </div>
    </section>
  )
}
