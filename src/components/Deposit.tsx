import { useId, useState } from 'react'
import { SectionHead } from './ui.tsx'

type Rail = 'online' | 'crypto'
type Method = 'jazzcash' | 'easypaisa' | 'sadapay' | 'raast' | 'usdt'

const methods: {
  id: Method
  name: string
  href?: string
  hot?: boolean
  bonus?: string
  rail: Rail
}[] = [
  { id: 'jazzcash', name: 'JazzCash', href: 'https://jazzcash.com.pk', hot: true, rail: 'online' },
  { id: 'easypaisa', name: 'EasyPaisa', href: 'https://easypaisa.com.pk', hot: true, rail: 'online' },
  { id: 'sadapay', name: 'SadaPay', href: 'https://sadapay.pk', rail: 'online' },
  { id: 'raast', name: 'Raast', rail: 'online' },
  { id: 'usdt', name: 'USDT', bonus: '+5%', rail: 'crypto' },
]

const MIN = 100
const MAX = 100_000

const tiers = [
  { amount: 100, bonus: 20 },
  { amount: 500, bonus: 40 },
  { amount: 1000, bonus: 80, badge: '30% Match Eligible' },
  { amount: 5000, bonus: 200 },
  { amount: 10000, bonus: 700 },
  { amount: 30000, bonus: 1200 },
  { amount: 50000, bonus: 2800 },
  { amount: 100000, bonus: 6500, badge: 'Max Bonus Tier' },
] as const

function formatRs(value: number, decimals = 0) {
  return `Rs ${value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`
}

function bonusLabel(bonus: number) {
  return `+${formatRs(bonus, 2)} Bonus`
}

function RefreshIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${spinning ? 'animate-spin' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0 1 12.7-5.4L20 9.2M19.5 12a7.5 7.5 0 0 1-12.7 5.4L4 14.8M20 4.8v4.4h-4.4M4 19.2v-4.4h4.4"
      />
    </svg>
  )
}

export function Deposit() {
  const railLabel = useId()
  const amountId = useId()
  const [rail, setRail] = useState<Rail>('online')
  const [method, setMethod] = useState<Method>('jazzcash')
  const [amount, setAmount] = useState(1000)
  const [custom, setCustom] = useState('1000')
  const [balance, setBalance] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const [note, setNote] = useState('')

  const selected = tiers.find((tier) => tier.amount === amount)
  const bonus = selected?.bonus ?? 0
  const extra = rail === 'crypto' ? Math.round(amount * 0.05) : 0
  const methodName = methods.find((item) => item.id === method)?.name ?? 'JazzCash'

  const selectTier = (value: number) => {
    setAmount(value)
    setCustom(String(value))
    setNote('')
  }

  const onCustomChange = (value: string) => {
    const digits = value.replace(/[^\d]/g, '')
    setCustom(digits)
    setNote('')
    const next = Number(digits)
    if (tiers.some((tier) => tier.amount === next)) {
      setAmount(next)
    } else {
      setAmount(Number.isFinite(next) ? next : 0)
    }
  }

  const refresh = () => {
    setRefreshing(true)
    window.setTimeout(() => {
      setBalance(0)
      setRefreshing(false)
    }, 700)
  }

  const deposit = () => {
    if (amount < MIN || amount > MAX) {
      setNote(`Enter an amount between ${formatRs(MIN)} and ${formatRs(MAX)}.`)
      return
    }
    const extraLine = extra ? ` plus ${formatRs(extra, 2)} crypto extra` : ''
    setNote(
      `${formatRs(amount)} queued via ${methodName}. ${bonusLabel(bonus)}${extraLine} credited after the desk confirms.`,
    )
  }

  return (
    <section id="deposit" className="grove-section px-[6vw] py-[5.5rem]">
      <SectionHead
        kicker="The vault"
        title="Deposit & payment."
        copy="Choose a desk, pick a tier, or type a custom amount. First deposits from Rs 1,000 unlock the 30% match."
      />

      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] px-5 py-5 text-white backdrop-blur-sm md:px-7 md:py-6">
        <div className="flex items-center justify-between gap-3 rounded-xl bg-grove-card px-4 py-3">
          <p className="text-[0.95rem] font-medium">
            Wallet Balance: <span className="text-sun">{formatRs(balance, 2)}</span>
          </p>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-[#4ade80] hover:bg-black/20"
            aria-label="Refresh wallet balance"
            onClick={refresh}
          >
            <RefreshIcon spinning={refreshing} />
          </button>
        </div>

        <p id={railLabel} className="mt-5 mb-2 text-[0.72rem] font-medium tracking-[0.1em] text-white/70 uppercase">
          Payment method
        </p>
        <div
          role="tablist"
          aria-labelledby={railLabel}
          className="relative grid grid-cols-2 rounded-lg bg-black/30 p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={rail === 'online'}
            className={`rounded-md py-2.5 text-[0.82rem] font-medium transition ${
              rail === 'online' ? 'bg-sun text-grove' : 'text-white/70 hover:text-white'
            }`}
            onClick={() => {
              setRail('online')
              if (method === 'usdt') setMethod('jazzcash')
            }}
          >
            Online Deposit
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={rail === 'crypto'}
            className={`relative rounded-md py-2.5 text-[0.82rem] font-medium transition ${
              rail === 'crypto' ? 'bg-sun text-grove' : 'text-white/70 hover:text-white'
            }`}
            onClick={() => {
              setRail('crypto')
              setMethod('usdt')
            }}
          >
            Crypto Deposit
            <span className="absolute -top-2.5 right-1 rounded-full bg-[#ff2d2d] px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-wide text-white uppercase shadow-sm">
              +5% Extra Bonus
            </span>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {methods.map((item) => {
            const active = method === item.id
            const className = `relative rounded-xl border px-3 py-3.5 text-center text-[0.95rem] font-semibold transition ${
              active
                ? 'border-sun bg-sun text-grove'
                : 'border-white/10 bg-grove-card text-white hover:border-sun/50'
            }`
            const body = (
              <>
                {item.name}
                {item.hot ? (
                  <span className="absolute -top-1.5 right-2 rounded-full bg-[#ff3b5c] px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-[0.12em] text-white uppercase">
                    HOT
                  </span>
                ) : null}
                {item.bonus ? (
                  <span className="absolute -top-1.5 right-2 rounded-full bg-[#ff2d2d] px-1.5 py-0.5 text-[0.58rem] font-semibold tracking-[0.12em] text-white uppercase">
                    {item.bonus}
                  </span>
                ) : null}
              </>
            )
            const select = () => {
              setMethod(item.id)
              setRail(item.rail)
              setNote('')
            }

            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-pressed={active}
                  onClick={select}
                  className={className}
                >
                  {body}
                </a>
              )
            }

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={select}
                className={className}
              >
                {body}
              </button>
            )
          })}
        </div>

        <p className="mt-5 mb-2 text-[0.72rem] font-medium tracking-[0.1em] text-white/70 uppercase">
          Deposit amount
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tiers.map((tier) => {
            const active = amount === tier.amount
            return (
              <button
                key={tier.amount}
                type="button"
                aria-pressed={active}
                onClick={() => selectTier(tier.amount)}
                className={`relative flex min-h-[5.6rem] flex-col justify-center rounded-xl border px-3 py-3 text-left transition ${
                  active
                    ? 'border-sun bg-sun text-grove shadow-[0_8px_20px_rgb(234_179_8_/_0.28)]'
                    : 'border-white/10 bg-grove-card text-white hover:border-sun/60'
                }`}
              >
                <span className="block text-[0.95rem] font-semibold">{formatRs(tier.amount)}</span>
                <span className={`mt-1 block text-[0.75rem] ${active ? 'text-grove/80' : 'text-sun'}`}>
                  {bonusLabel(tier.bonus)}
                </span>
                {'badge' in tier && tier.badge ? (
                  <span
                    className={`mt-1.5 inline-flex w-fit rounded px-1.5 py-0.5 text-[0.55rem] font-semibold tracking-wide uppercase ${
                      active ? 'bg-grove text-sun' : 'bg-sun text-grove'
                    }`}
                  >
                    {tier.badge}
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>

        <label htmlFor={amountId} className="mt-5 grid gap-1.5 text-[0.82rem] text-white/75">
          Deposit Amount (Rs)
          <input
            id={amountId}
            type="text"
            inputMode="numeric"
            value={custom}
            placeholder="Min 100 ~ Max 100,000"
            onChange={(event) => onCustomChange(event.target.value)}
            className="rounded-lg border border-white/10 bg-grove-card px-3.5 py-3 text-base text-white outline-none placeholder:text-white/40 focus:border-sun"
          />
        </label>

        <p className="mt-4 rounded-xl border border-sun/35 bg-grove-card px-3.5 py-3 text-[0.88rem] leading-relaxed text-white">
          ⚡ First Deposit Special Event: Deposit Rs 1,000+ to get a 30% match bonus up to Rs 50,000!
          Download the mobile app after your deposit for an extra Rs 100.00 reward.
        </p>

        <button
          type="button"
          onClick={deposit}
          className="mt-4 w-full rounded-lg bg-sun py-3.5 text-[1rem] font-semibold text-grove shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] transition hover:brightness-110"
        >
          Deposit Now
        </button>
        {note ? (
          <p className="mt-3 text-[0.88rem] text-sun" role="status">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  )
}
