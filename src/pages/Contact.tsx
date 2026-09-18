import { useState, type FormEvent } from 'react'
import { inputClass, PageHero, PageMeta } from '../components/ui.tsx'

export function Contact() {
  const [note, setNote] = useState('')
  const [locked, setLocked] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    setNote(`Received, ${name || 'there'}. We usually reply within a few hours.`)
    setLocked(true)
  }

  return (
    <div className="grove-section px-[6vw] pt-8 pb-20">
      <PageMeta
        title="Contact — K666"
        description="Got questions about K666? Reach out to us anytime—we usually respond in just a few hours."
      />
      <PageHero
        kicker="Contact"
        title="Got questions about K666?"
        lede="Reach out to us anytime—we usually respond in just a few hours."
      />

      <form className="panel mx-auto max-w-3xl p-6 md:p-8" onSubmit={onSubmit} noValidate={false}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              placeholder="Your name"
              disabled={locked}
              className={inputClass}
            />
          </label>
          <label className="grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@email.com"
              disabled={locked}
              className={inputClass}
            />
          </label>
        </div>
        <label className="mt-4 grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
          Subject
          <select
            name="subject"
            required
            disabled={locked}
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            <option value="general">General question</option>
            <option value="account">Account & app</option>
            <option value="payments">Payments</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="mt-4 grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
          Message
          <textarea
            name="message"
            required
            minLength={12}
            rows={7}
            placeholder="How can we help?"
            disabled={locked}
            className={`${inputClass} min-h-[10rem] resize-y`}
          />
        </label>
        <button
          type="submit"
          className="btn btn-gold mt-6 w-full md:w-auto md:min-w-[12rem]"
          disabled={locked}
        >
          Send message
        </button>
        {note ? (
          <p className="mt-4 text-[0.92rem] font-semibold text-[#4ade80]" role="status">
            {note}
          </p>
        ) : (
          <p className="mt-4 text-[0.82rem] text-white/70">
            We usually respond in just a few hours.
          </p>
        )}
      </form>
    </div>
  )
}
