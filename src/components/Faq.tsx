import { Link } from 'react-router-dom'
import { SectionHead } from './ui.tsx'

type FaqBlock = { label: string; copy: string }

type FaqItem = {
  question: string
  answer?: string
  lead?: string
  blocks?: FaqBlock[]
  contactLink?: boolean
}

type FaqGroup = {
  title: string
  items: FaqItem[]
}

const groups: FaqGroup[] = [
  {
    title: 'General',
    items: [
      {
        question: 'How do I create a new account on K666?',
        answer:
          'Open the app or official site, tap Register, and choose to sign up using your phone number (+92 prefix), email address, or one-click social authentication (Google, Facebook, or Telegram). Enter the required details, confirm the OTP verification code, and your account will be activated immediately.',
      },
      {
        question: 'Is registration free, and do I get a sign-up bonus?',
        answer:
          'Yes, account registration is completely free. Newly registered players receive an instant Rs 70.00 sign-up reward directly in their platform wallet upon completing basic profile setup.',
      },
    ],
  },
  {
    title: 'Banking & Withdrawals',
    items: [
      {
        question: 'Which local Pakistani payment channels are supported?',
        answer:
          'K666 natively integrates with popular local payment providers including JazzCash, EasyPaisa, SadaPay, Raast, and direct local bank transfers. Cryptocurrency payments (USDT) are also supported with an additional +5% deposit bonus.',
      },
      {
        question: 'What are the deposit limits and processing times?',
        blocks: [
          {
            label: 'Limits',
            copy: 'Minimum deposit starts at Rs 200 up to a maximum of Rs 100,000 per transaction.',
          },
          {
            label: 'Processing Time',
            copy: 'Wallet deposits via JazzCash and EasyPaisa are processed instantly.',
          },
        ],
      },
      {
        question: 'How long do withdrawals take, and are there any payout fees?',
        blocks: [
          {
            label: 'Processing Time',
            copy: 'Standard withdrawal requests are typically verified and disbursed within 4 minutes to a few hours, depending on network load.',
          },
          {
            label: 'Fees',
            copy: 'K666 charges 0% platform withdrawal fees. You receive the exact amount requested, minus any nominal standard transaction fee imposed by your e-wallet provider.',
          },
        ],
      },
    ],
  },
  {
    title: 'Gameplay & Security',
    items: [
      {
        question: 'What types of games are available on the platform?',
        lead: 'The lobby features over 500+ game variations categorized into:',
        blocks: [
          { label: 'Crash Games', copy: 'Aviator (powered by Spribe, WG, 2J).' },
          { label: 'Slots', copy: 'Titles from JILI (Fortune Gems 3), PG Soft, and Pragmatic Play.' },
          { label: 'Cards & Table Games', copy: 'Teen Patti, Andar Bahar, and Dragon Tiger.' },
          { label: 'Live Casino', copy: 'Live-streamed Baccarat, Roulette, and Blackjack.' },
          { label: 'Sportsbook', copy: 'Cricket (9Wickets), Football (FB Sports), and Basketball (IM Sports).' },
        ],
      },
      {
        question: 'Is my money and personal account data secure on K666?',
        answer:
          'Yes. All account activity requires bound mobile SMS verification and end-to-end transaction encryption. To ensure security, never share your account login credentials or OTP codes with anyone.',
      },
    ],
  },
  {
    title: 'Rewards',
    items: [
      {
        question: 'What is the turnover (wagering requirement) for promotional bonuses?',
        answer:
          'Bonus funds generally carry a 15x wagering requirement on designated slot, crash, and arcade games before withdrawal authorization is granted.',
      },
      {
        question: 'How do I contact official customer support if I face an issue?',
        lead: 'Customer support is available 24/7 directly in Urdu and English through:',
        blocks: [
          {
            label: 'In-App Live Chat',
            copy: 'Tap the floating support icon in the lobby for instant help.',
          },
          {
            label: 'WhatsApp & Telegram',
            copy: 'Official direct messaging channels accessible inside the Help Center.',
          },
          {
            label: 'Email',
            copy: 'Send formal queries to us at the contact form.',
          },
        ],
        contactLink: true,
      },
    ],
  },
]

const faqs = groups.flatMap((group) => group.items)

function schemaText(item: FaqItem, origin: string) {
  const parts: string[] = []
  if (item.lead) parts.push(item.lead)
  if (item.answer) parts.push(item.answer)
  if (item.blocks) {
    parts.push(item.blocks.map((block) => `${block.label}: ${block.copy}`).join(' '))
  }
  if (item.contactLink) parts.push(`Contact form: ${origin}/contact`)
  return parts.join(' ')
}

function FaqAnswer({ item }: { item: FaqItem }) {
  return (
    <>
      {item.lead ? <p>{item.lead}</p> : null}
      {item.answer ? <p>{item.answer}</p> : null}
      {item.blocks ? (
        <ul className={item.lead || item.answer ? 'mt-3 space-y-2' : 'space-y-2'}>
          {item.blocks.map((block) => (
            <li key={block.label}>
              <span className="font-semibold text-white">{block.label}:</span>{' '}
              {item.contactLink && block.label === 'Email' ? (
                <>
                  Send formal queries to us at the{' '}
                  <Link to="/contact" className="font-semibold text-[#4ade80] hover:text-[#86efac]">
                    contact form
                  </Link>
                  .
                </>
              ) : (
                block.copy
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export function getFaqJsonLd(origin = '') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${origin}/#faq`,
    url: `${origin}/#faq`,
    inLanguage: 'en',
    name: 'K666 Frequently Asked Questions',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: schemaText(item, origin),
      },
    })),
  }
}

export function Faq() {
  let questionNumber = 0

  return (
    <section id="faq" className="grove-section px-[6vw] py-[5.5rem]">
      <SectionHead
        kicker="FAQ"
        title="Frequently asked questions."
        copy="Clear answers on registration, local deposits, gameplay, bonuses, and 24/7 support for K666 players in Pakistan."
      />

      <div className="mx-auto grid max-w-6xl gap-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-[0.78rem] font-semibold tracking-[0.16em] text-[#4ade80] uppercase">
              {group.title}
            </h3>
            <div className="grid gap-3">
              {group.items.map((item) => {
                questionNumber += 1
                const number = questionNumber
                return (
                  <details key={item.question} className="group panel open:border-[#eab308]">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 md:px-6 [&::-webkit-details-marker]:hidden">
                      <h4 className="text-[1.02rem] font-bold text-white">
                        <span className="mr-2 text-[#4ade80]">Q{number}:</span>
                        {item.question}
                      </h4>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#eab308]/30 text-lg leading-none text-[#eab308] transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="border-t border-[#eab308]/15 px-5 pt-3 pb-5 leading-relaxed text-white/80 md:px-6">
                      <FaqAnswer item={item} />
                    </div>
                  </details>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
