import { useState, type PointerEvent } from 'react'
import { APK_URL } from './ui.tsx'

export function Hero() {
  const [tilt, setTilt] = useState('')

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt(`rotateX(${y * -10}deg) rotateY(${x * 12}deg)`)
  }

  return (
    <section
      id="hero"
      className="grove-section grid min-h-[calc(100svh-4.6rem)] items-center gap-[4vw] px-[6vw] py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:py-[5.5rem]"
    >
      <div className="flex flex-col">
        <h1 className="max-w-[22ch] text-[clamp(1.85rem,4.4vw,3.4rem)] font-bold leading-[1.12] text-white">
          K666 Game Download APK Latest Version 2026 | Real Earning App in Pakistan
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/80">
          The K666 platform has emerged as a feature-rich mobile gaming platform in Pakistan,
          combining interactive casino-style titles, sports betting, and real-money gaming options.
          Designed with an intuitive interface, fast local payment integration, and a comprehensive
          reward ecosystem, K666 delivers a seamless mobile gaming experience. This guide covers
          everything you need to know—from registration procedures and first-deposit match tiers to
          VIP progression and game catalogs.
        </p>
        <div id="register" className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <a
            href={APK_URL}
            className="btn btn-gold min-w-[10.5rem] px-7 py-3.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
          <a
            id="download"
            href={APK_URL}
            className="btn btn-glass min-w-[10.5rem] px-7 py-3.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
        </div>
        <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-[#eab308]/20 pt-6 md:gap-5">
          {[
            ['Game Name', 'K666 Game'],
            ['Version', '1.1.5'],
            ['File Size', '7.32 MB'],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-[0.68rem] font-semibold tracking-[0.12em] text-[#4ade80] uppercase md:tracking-[0.16em]">
                {label}
              </dt>
              <dd className="mt-1.5 text-[1.35rem] font-bold text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="grid min-h-64 place-items-center perspective-[900px] lg:min-h-[28rem]"
        onPointerMove={onMove}
        onPointerLeave={() => setTilt('')}
      >
        <a
          href={APK_URL}
          className="transform-3d block overflow-hidden rounded-[20%] border border-[#eab308]/25 shadow-[0_0_80px_rgb(234_179_8_/_0.18)] transition-transform duration-300"
          style={{ transform: tilt }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download K666 APK"
        >
          <img
            src="/K666%20Game.jpeg"
            alt="K666 Game Official"
            width={180}
            height={180}
            className="block h-[min(18rem,70vw)] w-[min(18rem,70vw)] object-cover"
          />
        </a>
      </div>
    </section>
  )
}
