import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"
import type { ComponentProps } from "react"

interface MediaBannerProps extends ComponentProps<"section"> {}

const MediaBanner: React.FC<MediaBannerProps> = ({ className = "", ...props }) => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/clarecreated/?hl=en",
      img: "/instagram.png",
      followers: "100k+",
      vibe: "daily stories + photo dumps",
      accentClass: "from-[#ffe3fa]/80 via-white/80 to-[#c2ffec]/70",
      size: 96,
      handle: "@clarecreated",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@claredodo",
      img: "/tiktok.webp",
      followers: "60k+",
      vibe: "fast recipes",
      accentClass: "from-[#c2ffec]/85 via-white/80 to-[#ffe7a0]/70",
      size: 64,
      handle: "@claredodo",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@clarecreated",
      img: "/Youtube_logo.png",
      followers: "80+",
      vibe: "shorts recipes + vlogs",
      accentClass: "from-[#ffe7a0]/80 via-white/80 to-[#f6a8cd]/70",
      size: 76,
      handle: "@clarecreated",
    },
  ]

  return (
    <section
      id="socials"
      className={`relative px-4 pb-16 pt-6 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] border border-white/50 bg-white/70 p-6 shadow-[0_35px_90px_rgba(24,39,35,0.18)] sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> stay connected
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              socials
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              grab inspo, see the behind-the-scenes, and join thousands of food friends who try the recipes in real time.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="rounded-full border border-white/50 bg-white/80 px-4 py-2 shadow-sm">
              ✨ 3 platforms • new drops weekly
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-[28px] border border-white/60 bg-gradient-to-br ${social.accentClass} p-5 shadow-[0_25px_60px_rgba(47,58,52,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:border-primary/40`}
              aria-label={`Follow Clare on ${social.name}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-white/80 shadow-inner sm:h-20 sm:w-20">
                  <Image
                    src={social.img}
                    alt={`${social.name} logo`}
                    width={social.size}
                    height={social.size}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{social.name}</p>
                  <p className="text-lg font-semibold text-foreground">{social.handle}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-white/70 px-3 py-1 text-foreground">{social.followers}</span>
                <span>{social.vibe}</span>
              </div>
              <div className="mt-5 flex items-center text-sm font-semibold text-primary">
                hop in <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaBanner
