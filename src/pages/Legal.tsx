import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/ui.tsx'

const proseClass =
  'prose max-w-4xl mx-auto prose-invert prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:text-white prose-h1:mb-4 prose-h1:text-[clamp(2rem,5vw,3.4rem)] prose-h1:leading-[1.12] prose-h2:mt-12 prose-h2:text-[1.5rem] prose-p:text-[1.05rem] prose-p:leading-[1.75] prose-p:text-white/80 prose-a:font-semibold prose-a:text-[#4ade80] prose-a:no-underline hover:prose-a:text-[#86efac] hover:prose-a:underline hover:prose-a:underline-offset-4 prose-strong:text-white prose-li:text-white/80 prose-ul:my-4'

function LegalShell({
  title,
  description,
  kicker,
  heading,
  metaLine,
  children,
}: {
  title: string
  description: string
  kicker: string
  heading: string
  metaLine?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="grove-section px-[6vw] pt-8 pb-20">
      <PageMeta title={title} description={description} />
      <div className={proseClass}>
        <p>
          <Link to="/">← Back to Home</Link>
        </p>
        <header>
          <p className="kicker not-prose">{kicker}</p>
          <h1>{heading}</h1>
          {metaLine ? (
            <p className="!mt-3 text-[0.95rem] font-semibold text-[#4ade80]">{metaLine}</p>
          ) : null}
        </header>
        {children}
      </div>
    </article>
  )
}

export function Disclaimer() {
  return (
    <LegalShell
      title="Disclaimer & Legal Notice | k666app.net.pk"
      description="Disclaimer and legal notice for k666app.net.pk — an independent educational portal and download directory for the K666 gaming application."
      kicker="Legal Notice"
      heading="Disclaimer & Legal Notice"
    >
      <section>
        <h2>Informational Purpose Only</h2>
        <p>
          The website accessible at <Link to="/">k666app.net.pk</Link> is an independent educational
          portal and download directory. The content provided on this website—including guides, game
          reviews, RTP statistics, and instructions—is strictly for general informational and
          entertainment purposes.
        </p>
      </section>

      <section>
        <h2>Platform Independence & Trademarks</h2>
        <p>
          <Link to="/">k666app.net.pk</Link> is not owned, operated, or directly affiliated with the
          official developers, operators, or financial service providers of the{' '}
          <Link to="/">K666</Link> gaming application. All product names, logos, trademarks, and
          registered brands mentioned on this website belong to their respective owners. Reference
          to these brands does not imply endorsement or official affiliation.
        </p>
      </section>

      <section>
        <h2>Financial & Entertainment Advice</h2>
        <p>
          We do not offer financial, investment, or legal advice. Real-money online gaming involves
          financial risk, and players may lose part or all of their deposited funds. Users are
          solely responsible for managing their personal finances, setting budgets, and playing
          within their means. <Link to="/">k666app.net.pk</Link> is not liable for any financial
          losses incurred on third-party platforms.
        </p>
      </section>

      <section>
        <h2>External Links & Third-Party Applications</h2>
        <p>
          Our website contains links to third-party websites and downloadable APK files. While we
          strive to ensure all hosted links are safe and free from malicious software, we do not
          control third-party servers and accept no liability for the practices, terms, or privacy
          policies of external platforms.
        </p>
      </section>

      <section>
        <h2>Age Restriction Notice</h2>
        <p>
          Participation in real-money gaming on the <Link to="/">K666</Link> app is strictly
          intended for individuals aged 18 years or older (or the applicable legal age of majority
          in your jurisdiction). <Link to="/">k666app.net.pk</Link> strictly discourages underage
          access.
        </p>
      </section>
    </LegalShell>
  )
}

export function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy | k666app.net.pk"
      description="Privacy Policy for k666app.net.pk — the types of information collected by our informational directory and how we use it."
      kicker="Legal Notice"
      heading="Privacy Policy"
      metaLine={
        <>
          Effective Date: January 1, 2026
          <br />
          Website Domain: <Link to="/">k666app.net.pk</Link>
        </>
      }
    >
      <p>
        At <Link to="/">k666app.net.pk</Link>, accessible from{' '}
        <Link to="/">https://k666app.net.pk</Link>, protecting the privacy of our visitors is one of
        our main priorities. This Privacy Policy document outlines the types of information
        collected and recorded by our portal and how we use it.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p>
          Because <Link to="/">k666app.net.pk</Link> is an informational directory, we do not require
          user registration or financial account creation directly on our website.
        </p>
        <ul>
          <li>
            <strong>Log Files:</strong> Like most standard web servers, we collect standard log file
            data, including internet protocol (IP) addresses, browser type, Internet Service Provider
            (ISP), date/time stamp, referring/exit pages, and number of clicks.
          </li>
          <li>
            <strong>Contact Information:</strong> If you reach out to us via email or contact forms,
            we collect your name, email address, and the contents of your inquiry to respond to your
            request.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cookies and Web Beacons</h2>
        <p>
          <Link to="/">k666app.net.pk</Link> uses standard cookies to store information about
          visitors&apos; preferences, optimize user experience, and analyze web traffic patterns. You
          can choose to disable cookies through your individual browser options.
        </p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the collected data strictly to:</p>
        <ul>
          <li>Maintain and optimize page loading performance across mobile and desktop devices.</li>
          <li>Analyze visitor trends and improve website navigational usability.</li>
          <li>Prevent spam, security threats, and unauthorized web scraping activities.</li>
        </ul>
      </section>

      <section>
        <h2>Third-Party Links & Gaming Platforms</h2>
        <p>
          Our site provides download links to the <Link to="/">K666</Link> application and external
          resources. Once you click an external link or download the APK, you are subject to the
          privacy practices and security terms of those respective third-party applications. We
          strongly recommend reviewing their privacy policies upon account creation.
        </p>
      </section>

      <section>
        <h2>Data Protection Rights (GDPR / Local Data Privacy Compliance)</h2>
        <p>
          We do not sell, trade, or transfer your personally identifiable information to outside
          parties. Every visitor retains the right to request access to or deletion of any personal
          communications sent to our support email address.
        </p>
      </section>

      <section>
        <h2>Updates to This Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Changes take
          effect immediately upon being posted to this page.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions or require further information regarding our Privacy Policy, contact
          us at <Link to="/contact">https://k666app.net.pk/contact</Link>
        </p>
      </section>
    </LegalShell>
  )
}
