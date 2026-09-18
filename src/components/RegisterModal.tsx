import { useEffect, useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

type Channel = 'phone' | 'email'
type Auth = 'password' | 'code'

const fieldClass =
  'rounded-lg border border-white/10 bg-grove-card px-3.5 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 hover:border-sun/50 focus:border-sun focus:shadow-[0_0_0_1px_var(--color-sun)] disabled:opacity-55'

function Segmented<T extends string>({
  value,
  onChange,
  options,
  labelledBy,
  disabled,
}: {
  value: T
  onChange: (value: T) => void
  options: { id: T; label: string }[]
  labelledBy: string
  disabled?: boolean
}) {
  return (
    <div
      role="tablist"
      aria-labelledby={labelledBy}
      className="grid grid-cols-2 rounded-lg bg-black/30 p-1"
    >
      {options.map((option) => {
        const active = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={disabled}
            className={`rounded-md px-2 py-2 text-[0.78rem] font-medium transition disabled:opacity-60 ${
              active
                ? 'bg-sun text-[#0d3b2e] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.35)]'
                : 'text-white/70 hover:text-white'
            }`}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

function SocialIcon({ brand }: { brand: 'google' | 'facebook' | 'telegram' }) {
  if (brand === 'google') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-.9 2.3-1.9 3l3.1 2.4c1.8-1.7 2.9-4.1 2.9-7 0-.7-.1-1.3-.2-1.9H12Z" />
        <path fill="#34A853" d="M6.6 14.1 5.5 15l-2.5 1.9A11.96 11.96 0 0 0 12 24c3.2 0 5.9-1 7.9-2.8l-3.1-2.4c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3Z" />
        <path fill="#4A90E2" d="M3 6.1A11.94 11.94 0 0 0 0 12c0 2.1.5 4.1 1.4 5.9L6.6 14c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8L3 6.1Z" />
        <path fill="#FBBC05" d="M12 4.8c1.7 0 3.3.6 4.5 1.7L19.3 4C17.2 2 14.7 1 12 1 7.4 1 3.4 3.6 1.4 7.3L6.6 11C7.4 8.5 9.3 4.8 12 4.8Z" />
      </svg>
    )
  }
  if (brand === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#1877F2"
          d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18 4.3 23 10 24v-8.4H7V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.6H14V24c5.7-.9 10-5.9 10-11.9Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#229ED9"
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm5.5 8.2-1.8 8.6c-.1.6-.5.8-1 .5l-2.8-2.1-1.4 1.3c-.1.2-.3.3-.6.3l.2-2.9 5.2-4.7c.2-.2 0-.3-.3-.1l-6.5 4.1-2.8-.9c-.6-.2-.6-.6.1-.9l10.9-4.2c.5-.1 1 .3.8 1Z"
      />
    </svg>
  )
}

export function RegisterModal({
  onClose,
}: {
  onClose: () => void
}) {
  const channelLabel = useId()
  const authLabel = useId()
  const [channel, setChannel] = useState<Channel>('phone')
  const [auth, setAuth] = useState<Auth>('password')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [accepted, setAccepted] = useState(true)
  const [cooldown, setCooldown] = useState(0)
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (cooldown <= 0) return
    const timer = window.setTimeout(() => setCooldown((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [cooldown])

  const identifier = channel === 'phone' ? `+92 ${phone}`.trim() : email.trim()

  const sendCode = () => {
    if (channel === 'phone' && phone.replace(/\D/g, '').length < 10) {
      setError('Enter a valid mobile number after +92.')
      return
    }
    if (channel === 'email' && !email.includes('@')) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setCooldown(60)
    setNote(`Code sent to ${identifier}.`)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    if (channel === 'phone' && phone.replace(/\D/g, '').length < 10) {
      setError('Enter a 10-digit number after +92.')
      return
    }
    if (channel === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (auth === 'password' && password.length < 8) {
      setError('Password must be at least eight characters.')
      return
    }
    if (auth === 'code' && code.replace(/\D/g, '').length !== 6) {
      setError('Enter the six-digit verification code.')
      return
    }
    if (!accepted) {
      setError('Confirm you are over 18 and agree to the User Agreement.')
      return
    }
    setLocked(true)
    setNote(`Welcome to K666. Rs 70.00 Sign-Up Bonus is ready.`)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative max-h-[min(92svh,48rem)] overflow-y-auto rounded-2xl border border-[#eab308]/20 bg-[#0d3b2e] px-5 py-5 text-white md:px-6"
    >
      <button
        type="button"
        className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full text-[1.35rem] leading-none text-white/80 hover:bg-grove-card hover:text-sun"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>

      <h2 className="pr-8 text-[1.15rem] font-semibold leading-snug text-white">
        K666 Account Registration / Login
      </h2>

      <p id={channelLabel} className="mt-5 mb-2 text-[0.72rem] font-medium tracking-[0.08em] text-white/70 uppercase">
        Registration method
      </p>
      <Segmented
        labelledBy={channelLabel}
        value={channel}
        onChange={(value) => {
          setChannel(value)
          setError('')
          setNote('')
        }}
        disabled={locked}
        options={[
          { id: 'phone', label: 'Phone Number' },
          { id: 'email', label: 'Email' },
        ]}
      />

      {channel === 'phone' ? (
        <label className="mt-3 grid gap-1.5 text-[0.78rem] text-white/70">
          Phone Number
          <span className="flex overflow-hidden rounded-lg border border-white/10 bg-grove-card focus-within:border-sun focus-within:shadow-[0_0_0_1px_var(--color-sun)]">
            <span className="grid shrink-0 place-items-center border-r border-white/10 px-3 text-[0.95rem] font-medium text-white">
              +92
            </span>
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              required
              disabled={locked}
              placeholder="3001234567"
              value={phone}
              onChange={(event) => setPhone(event.target.value.replace(/[^\d\s]/g, ''))}
              className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base text-white outline-none placeholder:text-white/40 disabled:opacity-55"
            />
          </span>
        </label>
      ) : (
        <label className="mt-3 grid gap-1.5 text-[0.78rem] text-white/70">
          Email
          <input
            type="email"
            autoComplete="email"
            required
            disabled={locked}
            placeholder="you@k666.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldClass} w-full`}
          />
        </label>
      )}

      <p id={authLabel} className="mt-5 mb-2 text-[0.72rem] font-medium tracking-[0.08em] text-white/70 uppercase">
        Verification / Password
      </p>
      <Segmented
        labelledBy={authLabel}
        value={auth}
        onChange={(value) => {
          setAuth(value)
          setError('')
          setNote('')
        }}
        disabled={locked}
        options={[
          { id: 'password', label: 'Password' },
          { id: 'code', label: 'Verification Code' },
        ]}
      />

      {auth === 'password' ? (
        <label className="mt-3 grid gap-1.5 text-[0.78rem] text-white/70">
          Password
          <input
            type="password"
            autoComplete="current-password"
            required={auth === 'password'}
            minLength={8}
            disabled={locked}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={`${fieldClass} w-full`}
          />
        </label>
      ) : (
        <div className="mt-3 flex gap-2">
          <label className="grid min-w-0 flex-1 gap-1.5 text-[0.78rem] text-white/70">
            Verification Code
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required={auth === 'code'}
              disabled={locked}
              maxLength={6}
              placeholder="6-digit code"
              value={code}
              onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
              className={`${fieldClass} w-full`}
            />
          </label>
          <button
            type="button"
            disabled={locked || cooldown > 0}
            onClick={sendCode}
            className="mt-auto h-[3.05rem] shrink-0 rounded-lg bg-sun px-3 text-[0.78rem] font-semibold text-[#0d3b2e] hover:brightness-110 disabled:opacity-50"
          >
            {cooldown > 0 ? `${cooldown}s` : 'Send Code'}
          </button>
        </div>
      )}

      <label className="mt-4 flex items-start gap-3 text-[0.88rem] leading-relaxed text-white">
        <input
          type="checkbox"
          required
          checked={accepted}
          disabled={locked}
          onChange={(event) => setAccepted(event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-sun"
        />
        <span>
          I am over 18 years old and agree to the{' '}
          <Link
            to="/disclaimer"
            onClick={onClose}
            className="whitespace-nowrap text-sun underline underline-offset-4"
          >
            User Agreement
          </Link>
          .
        </span>
      </label>

      <p className="mt-4 rounded-lg border border-sun/40 bg-grove-card px-3.5 py-3 text-[0.92rem] leading-relaxed text-white">
        🎁 Register now and receive an instant Rs 70.00 Sign-Up Bonus!
      </p>

      {error ? (
        <p className="mt-3 text-[0.88rem] text-sun" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={locked}
        className="mt-4 w-full rounded-lg bg-sun py-3 text-[0.88rem] font-semibold text-[#0d3b2e] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] transition hover:brightness-110 disabled:opacity-60"
      >
        Register / Login
      </button>
      {note ? (
        <p className="mt-3 text-[0.88rem] text-sun" role="status">
          {note}
        </p>
      ) : null}

      <div className="mt-5">
        <p className="mb-3 text-center text-[0.82rem] text-white/60">Or sign in using:</p>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              ['google', 'Google'],
              ['facebook', 'Facebook'],
              ['telegram', 'Telegram'],
            ] as const
          ).map(([brand, label]) => (
            <button
              key={brand}
              type="button"
              disabled={locked}
              aria-label={label}
              onClick={() => setNote(`Opening ${label}… finish there, then return.`)}
              className="flex h-11 items-center justify-center gap-1.5 rounded-lg bg-grove-card text-[0.78rem] text-white transition hover:bg-[#165544]"
            >
              <SocialIcon brand={brand} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
        <button
          type="button"
          disabled={locked}
          onClick={() => {
            setLocked(true)
            setNote('Demo mode is live. Play without an account.')
          }}
          className="rounded-lg bg-grove-card px-3 py-3 text-[0.82rem] text-white hover:bg-[#165544] disabled:opacity-60"
        >
          🎮 Try Demo Mode
        </button>
        <Link
          to="/contact"
          onClick={onClose}
          className="rounded-lg bg-grove-card px-3 py-3 text-center text-[0.82rem] text-white hover:bg-[#165544]"
        >
          🎧 24/7 Customer Service
        </Link>
      </div>
    </form>
  )
}
