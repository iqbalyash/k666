import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { APK_URL } from './ui.tsx'
import { K666Logo } from './K666Logo.tsx'

const homeLinks = [
  { to: { pathname: '/', hash: 'games' }, id: 'games', label: 'Games' },
  { to: { pathname: '/', hash: 'features' }, id: 'features', label: 'Features' },
  { to: { pathname: '/', hash: 'deposit' }, id: 'deposit', label: 'Deposit' },
  { to: { pathname: '/', hash: 'vip' }, id: 'vip', label: 'VIP' },
  { to: { pathname: '/', hash: 'media' }, id: 'media', label: 'Media' },
  { to: { pathname: '/', hash: 'faq' }, id: 'faq', label: 'FAQ' },
] as const

const pageLinks = [
  { to: '/guide', label: 'Guide' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

const navClass = (active: boolean) =>
  `text-[0.74rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap ${
    active ? 'text-[#eab308]' : 'text-white/70 hover:text-white'
  }`

export function Header() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-20 flex items-center justify-between gap-6 px-[6vw] py-[1.1rem] backdrop-blur-[22px] backdrop-saturate-[1.2] transition ${
        scrolled
          ? 'border-b border-[#eab308]/20 bg-[#031711]/88'
          : 'border-b border-transparent bg-[#031711]/45'
      }`}
    >
      <Link to="/" className="shrink-0 text-gold" aria-label="K666 home">
        <K666Logo />
      </Link>

      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full border border-[#eab308]/30 bg-transparent lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="flex flex-col gap-[0.22rem]">
          <span className="block h-px w-3.5 bg-white" />
          <span className="block h-px w-3.5 bg-white" />
        </span>
      </button>

      <nav
        id="site-nav"
        className={`items-center gap-5 ${
          menuOpen
            ? 'absolute inset-x-[6vw] top-full z-30 mt-px flex flex-col items-stretch gap-3.5 rounded-2xl border border-[#eab308]/20 bg-[#031711]/97 p-4 shadow-[0_28px_70px_rgb(0_0_0_/_0.45)] backdrop-blur-lg'
            : 'hidden lg:flex'
        }`}
      >
        {homeLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            onClick={closeMenu}
            className={navClass(onHome && active === link.id)}
          >
            {link.label}
          </Link>
        ))}
        {pageLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) => navClass(isActive)}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href={APK_URL}
          className="btn btn-gold px-4 py-2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Download APK
        </a>
      </nav>
    </header>
  )
}
