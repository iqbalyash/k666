import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'
import { Modals } from './Modals.tsx'
import type { ModalName } from './ui.tsx'

export function Layout() {
  const { pathname, hash } = useLocation()
  const [modal, setModal] = useState<ModalName | null>(null)

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="relative isolate flex min-h-svh scroll-smooth flex-col bg-[linear-gradient(180deg,#0d3b2e_0%,#031711_100%)] text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgb(234_179_8_/_0.08),transparent_55%),radial-gradient(900px_500px_at_-10%_20%,rgb(74_222_128_/_0.08),transparent_50%)]"
        aria-hidden="true"
      />

      <a
        href="#content"
        className="absolute top-[-4rem] left-4 z-30 rounded-lg bg-[#eab308] px-4 py-2.5 font-semibold text-[#031711] focus:top-4"
      >
        Skip to content
      </a>

      <Header />
      <main id="content" className="flex-1">
        <Outlet context={{ openModal: setModal }} />
      </main>
      <Footer />
      <Modals open={modal} onClose={() => setModal(null)} />
    </div>
  )
}
