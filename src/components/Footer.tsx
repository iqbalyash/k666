import { Link } from 'react-router-dom'
import { K666Logo } from './K666Logo.tsx'

const links = [
  { to: '/guide', label: 'Guide' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/disclaimer', label: 'Disclaimer' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#eab308]/20 bg-[#031711] px-[6vw] py-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="text-[#eab308]">
          <K666Logo />
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Assisting pages">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/70 hover:text-[#4ade80]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mt-8 text-[0.78rem] text-white/60">
        © 2026 House Meridian. A work of fiction. No keepers were forgotten in the making of this
        hour.
      </p>
    </footer>
  )
}
