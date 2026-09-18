import { useState, type FormEvent } from 'react'
import { inputClass, PageHero, PageMeta } from '../components/ui.tsx'

const desks = [
  {
    label: 'Keeper support',
    detail: 'Launchers, keys, and drowned-mile incidents.',
    href: 'mailto:support@housemeridian.example',
    value: 'support@housemeridian.example',
  },
  {
    label: 'Press',
    detail: 'Stills, trailers, and House interviews.',
    href: 'mailto:press@housemeridian.example',
    value: 'press@housemeridian.example',
  },
  {
    label: 'Correspondence',
    detail: 'Partnerships, casting, and quiet bargains.',
    href: 'mailto:desk@housemeridian.example',
    value: 'desk@housemeridian.example',
  },
]

export function Contact() {
  const [note, setNote] = useState('')
  const [locked, setLocked] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    setNote(`Received, ${name || 'Keeper'}. The desk will answer before last bell.`)
    setLocked(true)
  }

  return (
    <div className="grove-section px-[6vw] pt-8 pb-20">
      <PageMeta title="Contact — K666" />
      <PageHero
        kicker="The desk"
        title="Write, and the house will answer."
        lede="A short letter is enough. No ticket numbers, no maze. Tell us which district failed you, which key never arrived, or which house still claims your name."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.75fr)] lg:gap-12">
        <form className="panel p-6 md:p-8" onSubmit={onSubmit} noValidate={false}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                placeholder="Ione Vale"
                disabled={locked}
                className={inputClass}
              />
            </label>
            <label className="grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
              Correspondence
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@vesper.night"
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
                Choose a desk
              </option>
              <option value="support">Keeper support</option>
              <option value="press">Press</option>
              <option value="partnerships">Correspondence</option>
            </select>
          </label>
          <label className="mt-4 grid gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#4ade80]">
            Message
            <textarea
              name="message"
              required
              minLength={12}
              rows={7}
              placeholder="The Amber Quay would not take my key…"
              disabled={locked}
              className={`${inputClass} resize-y min-h-[10rem]`}
            />
          </label>
          <button
            type="submit"
          className="btn btn-gold mt-6 w-full md:w-auto md:min-w-[12rem]"
            disabled={locked}
          >
            Send letter
          </button>
          {note ? (
            <p className="mt-4 text-[0.92rem] font-semibold text-[#4ade80]" role="status">
              {note}
            </p>
          ) : (
            <p className="mt-4 text-[0.82rem] text-white/70">Replies leave the desk between 18:00 and 06:00 Vesper time.</p>
          )}
        </form>

        <aside className="space-y-4">
          {desks.map((desk) => (
            <a
              key={desk.label}
              href={desk.href}
              className="panel block p-6 transition hover:border-[#eab308]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#4ade80]">{desk.label}</p>
              <p className="mt-2 text-xl font-bold text-white">{desk.value}</p>
              <p className="mt-2 leading-relaxed text-white/80">{desk.detail}</p>
            </a>
          ))}
          <div className="panel p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#4ade80]">Studio</p>
            <p className="mt-2 text-xl font-bold text-white">House Meridian</p>
            <p className="mt-2 leading-relaxed text-white/80">
              The Glass Nave, Amber Quay
              <br />
              Vesper · by appointment after first bell
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
