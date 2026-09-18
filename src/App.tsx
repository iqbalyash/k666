import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'
import { Home } from './pages/Home.tsx'
import { Disclaimer, Privacy } from './pages/Legal.tsx'
import { Guide } from './pages/Guide.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Route>
    </Routes>
  )
}
