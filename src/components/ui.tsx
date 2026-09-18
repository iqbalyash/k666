import { useEffect, type ReactNode } from 'react'

export type ModalName = 'register' | 'download' | 'trailer'

export const APK_URL = 'https://dw1annwvs170h.cloudfront.net/?id=370726138'

export const inputClass =
  'w-full rounded-lg border border-[#eab308]/20 bg-[rgba(18,74,58,0.6)] px-3.5 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 hover:border-[#eab308]/50 focus:border-[#eab308] focus:shadow-[0_0_0_1px_#eab308] disabled:opacity-60'

export function PageMeta({
  title,
  description,
  jsonLd,
}: {
  title: string
  description?: string
  jsonLd?: Record<string, unknown>
}) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])

  useEffect(() => {
    if (!description) return
    const existing = document.querySelector('meta[name="description"]')
    const previous = existing?.getAttribute('content') ?? ''
    if (existing) existing.setAttribute('content', description)
    return () => {
      if (existing) existing.setAttribute('content', previous)
    }
  }, [description])

  const serializedJsonLd = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    if (!serializedJsonLd) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'k666-faq-schema'
    script.text = serializedJsonLd
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [serializedJsonLd])

  return null
}

export function Mark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 4.8 43.2 16v16L24 43.2 4.8 32V16L24 4.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M24 13.2 34.8 19.6v8.8L24 34.8 13.2 28.4v-8.8L24 13.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path
        d="M18.8 17.2V31h2.35l5.35-6.85V31H28.8V17.2h-2.3L21.2 24V17.2H18.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-5 w-5">
      <path fill="currentColor" d="M8.5 6.8v10.4L18 12 8.5 6.8Z" />
    </svg>
  )
}

export function PlayBadge({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`absolute inset-0 m-auto grid place-items-center rounded-full bg-[#eab308] text-[#031711] shadow-[0_8px_20px_rgb(234_179_8_/_0.28)] ${
        large ? 'h-[4.6rem] w-[4.6rem]' : 'h-[4.2rem] w-[4.2rem]'
      }`}
    >
      <PlayIcon />
    </span>
  )
}

export function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string
  title: string
  copy?: string
}) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      <p className="kicker">{kicker}</p>
      <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white">{title}</h2>
      {copy ? (
        <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-white/80">{copy}</p>
      ) : null}
    </header>
  )
}

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string
  title: string
  lede?: ReactNode
}) {
  return (
    <header className="mx-auto max-w-3xl pt-6 pb-12 text-center md:pt-10 md:pb-16">
      <p className="kicker">{kicker}</p>
      <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.12] text-white">{title}</h1>
      {lede ? (
        <div className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/80">{lede}</div>
      ) : null}
    </header>
  )
}
