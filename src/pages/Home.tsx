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
        description="K666 Game Download — play Aviator, Fortune Gems 3, Teen Patti, and sportsbook titles with JazzCash, EasyPaisa, and VIP rewards in Pakistan."
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
