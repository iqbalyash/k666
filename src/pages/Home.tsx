import { Deposit } from '../components/Deposit.tsx'
import { Features } from '../components/Features.tsx'
import { Hero } from '../components/Hero.tsx'
import { Lobby } from '../components/Lobby.tsx'
import { Faq, getFaqJsonLd } from '../components/Faq.tsx'
import { Media } from '../components/Media.tsx'
import { PageMeta } from '../components/ui.tsx'
import { Vip } from '../components/Vip.tsx'

export function Home() {
  const origin = typeof window === 'undefined' ? '' : window.location.origin

  return (
    <>
      <PageMeta
        title="K666 Game Download APK | Real Earning App in Pakistan"
        description="Download K666 Game APK latest version 2026 in Pakistan. Enjoy real-money games like Aviator, Teen Patti & Slots with instant JazzCash & EasyPaisa withdrawals!"
        jsonLd={getFaqJsonLd(origin)}
      />
      <Hero />
      <Lobby />
      <Features />
      <Deposit />
      <Vip />
      <Media />
      <Faq />
    </>
  )
}
