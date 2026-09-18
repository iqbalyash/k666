import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { RegisterModal } from './RegisterModal.tsx'
import { PlayBadge, type ModalName } from './ui.tsx'

function Shell({
  open,
  onClose,
  wide,
  narrow,
  children,
}: {
  open: boolean
  onClose: () => void
  wide?: boolean
  narrow?: boolean
  children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const width = wide
    ? 'w-[min(44rem,calc(100vw-2rem))]'
    : narrow
      ? 'w-[min(28rem,calc(100vw-1.5rem))]'
      : 'w-[min(32rem,calc(100vw-2rem))]'

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className={`m-auto border-0 bg-transparent p-0 text-inherit backdrop:bg-black/70 backdrop:backdrop-blur-sm ${width}`}
    >
      {children}
    </dialog>
  )
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-transparent text-[1.3rem] text-white"
      aria-label="Close"
      onClick={onClose}
    >
      ×
    </button>
  )
}

function RegisterDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Shell open={open} onClose={onClose} narrow>
      {open ? <RegisterModal onClose={onClose} /> : null}
    </Shell>
  )
}

function DownloadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [note, setNote] = useState('')

  useEffect(() => {
    if (!open) setNote('')
  }, [open])

  const queue = (platform: string) => {
    setNote(`Preparing the ${platform} launcher…`)
    window.setTimeout(() => {
      setNote(`K666-${platform}.bin queued. Keep the hour.`)
    }, 700)
  }

  return (
    <Shell open={open} onClose={onClose}>
      <div className="panel overflow-hidden px-7 pt-7 pb-6">
        <CloseButton onClose={onClose} />
        <p className="kicker">Download</p>
        <h2 className="pr-8 text-[2.1rem] font-bold text-white">Install the eclipse client.</h2>
        <p className="mt-3 mb-5 leading-relaxed text-white/80">
          A 4.2 GB launcher. Gold-thread DRM, no always-online tax during private hours.
        </p>
        <div className="grid gap-3">
          {['windows', 'macos', 'linux'].map((platform) => (
            <button
              key={platform}
              type="button"
              className="btn btn-glass"
              onClick={() => queue(platform)}
            >
              {platform === 'macos' ? 'macOS' : platform[0].toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>
        {note ? <p className="mt-3.5 text-[0.88rem] font-semibold text-[#4ade80]">{note}</p> : null}
      </div>
    </Shell>
  )
}

function TrailerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Shell open={open} onClose={onClose} wide>
      <div className="panel overflow-hidden px-7 pt-7 pb-6">
        <CloseButton onClose={onClose} />
        <p className="kicker">Trailer</p>
        <h2 className="pr-8 text-[2.1rem] font-bold text-white">Gilded Hour</h2>
        <div
          className="relative my-4 h-64 rounded-[0.8rem] [background:radial-gradient(circle_at_60%_40%,rgb(234_179_8_/_0.3),transparent_32%),linear-gradient(140deg,#124a3a,#031711)]"
          role="img"
          aria-label="Stylized trailer still of the drowned city"
        >
          <PlayBadge large />
        </div>
        <p className="leading-relaxed text-white/80">
          Cinematic slice — audio forthcoming. The city prefers silence until launch.
        </p>
      </div>
    </Shell>
  )
}

export function Modals({
  open,
  onClose,
}: {
  open: ModalName | null
  onClose: () => void
}) {
  return (
    <>
      <RegisterDialog open={open === 'register'} onClose={onClose} />
      <DownloadModal open={open === 'download'} onClose={onClose} />
      <TrailerModal open={open === 'trailer'} onClose={onClose} />
    </>
  )
}
