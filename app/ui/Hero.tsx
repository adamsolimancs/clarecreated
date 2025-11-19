'use client';

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/ui/components/button"
import { Camera, PlayCircle, Sparkles, UtensilsCrossed } from "lucide-react"
import SplitText from "@/app/ui/SplitText"
import { useCallback } from "react"
import { smoothScrollToId } from "@/app/lib/scroll"

const stats = [
  { label: "unique recipes created", value: "150+", detail: "" },
  { label: "weekly viewers", value: "50k+", detail: "across TikTok + IG + YT" },
  { label: "community favorite", value: "lifestyle content", detail: "" },
]

const highlightCards = [
  {
    title: "overnight oats",
    description: "Chilled jars stacked with creamy oats, fresh fruit, and crunchy toppings for effortless mornings.",
    tags: ["breakfast", "easy recipes"],
    accent: "from-[#caf8e3]/90 to-[#fef9d7]/80",
    href: "https://www.youtube.com/watch?v=5iqJQA_yg7c&list=PLcd5X5BBJ-1yDRK9vbBUlbpa1saOFqwH2&pp=0gcJCbAEOCosWNin"
  },
  {
    title: "bagels",
    description: "Chewy, golden bagels baked at home with playful toppings for your favorite coffee chats.",
    tags: ["yum", "coffee chats"],
    accent: "from-[#f6a8cd]/80 to-[#ffe7a0]/70",
    href: "https://www.youtube.com/watch?v=9qiBJXXQWG4&list=PLcd5X5BBJ-1wHZzdZxdM4NbsLLDHZoUBI"
  },
]

const floatingNotes = [
  { title: "new reel", detail: "2 ingredient watermelon sorbet", icon: Camera, href: "https://www.instagram.com/p/DMqJknqMbhZ/" },
  { title: "new reel", detail: "cucumber spiral salad", icon: UtensilsCrossed, href: "https://www.instagram.com/p/DPAJ-WdDn31/" },
  { title: "new short", detail: "homemade matcha lemonade recipe", icon: Sparkles, href: "https://www.youtube.com/shorts/tXpueeUKVO4" },
]

const heroLockedWords = ["clarecreated"]

const Hero = () => {
  const handleHeroAnimationComplete = () => {
    console.log("Hero animation completed")
  }

  const handleScrollToPromos = useCallback(() => {
    smoothScrollToId("promos", { offset: 12 })
  }, [])

  return (
    <section className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 mx-auto h-32 max-w-6xl rounded-full bg-gradient-to-r from-[#c2ffec]/40 via-[#ffe3fa]/35 to-transparent blur-3xl opacity-70" />
      <div className="noise-panel mx-auto grid max-w-6xl gap-10 rounded-[32px] border border-white/40 bg-white/70 p-6 text-center shadow-[0_45px_120px_rgba(30,64,45,0.18)] sm:p-10 sm:text-left lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-center space-y-6 text-center sm:items-start sm:text-left">
          <SplitText
            text="welcome to clarecreated!"
            className="text-balance text-3xl font-bold leading-tight text-center sm:text-left sm:text-5xl lg:text-6xl"
            delay={8}
            duration={1.6}
            ease="elastic.out(1, 0.4)"
            splitType="chars"
            from={{ opacity: 0, y: 24 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.15}
            rootMargin="-80px"
            onLetterAnimationComplete={handleHeroAnimationComplete}
            lockWords={heroLockedWords}
          />

          <p className="text-base text-center text-muted-foreground sm:text-left sm:text-lg lg:text-xl">
            hi, i'm clare! i share fun & yummy recipes, baking/cooking hacks, and lifestyle content. follow me on social media for more!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button asChild size="lg" className="shadow-[0_20px_50px_rgba(47,122,98,0.35)]">
              <Link href="https://www.instagram.com/clarecreated/?hl=en" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/10 bg-white/70 text-foreground hover:bg-white/90"
              onClick={handleScrollToPromos}
              type="button"
              aria-controls="promos"
            >
              Shop favorite deals
            </Button>
          </div>

          <div className="grid w-full gap-4 rounded-2xl border border-white/50 bg-white/60 p-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/80">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2">
            {highlightCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch the ${card.title} series`}
                className={`relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br ${card.accent} p-4 shadow-[0_20px_40px_rgba(70,46,88,0.15)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">series</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{card.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full flex-col gap-4 rounded-[28px] border border-white/40 bg-gradient-to-br from-white/80 via-[#f6fff8]/70 to-[#f7ecff]/80 p-4 shadow-[0_45px_100px_rgba(53,79,72,0.18)] sm:mx-0">
          <div className="relative overflow-hidden rounded-[24px] border border-white/40 bg-white/60 p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f9fff7] to-[#fff0fb]">
              <Image
                src="/clare.jpeg"
                alt="Clare smiling in the kitchen"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <Link
              className="absolute left-3 top-3 rounded-2xl bg-white/85 px-4 py-2 text-xs text-foreground shadow-xl backdrop-blur sm:left-5 sm:top-5 sm:px-5 sm:py-3 sm:text-sm"
              href="https://open.spotify.com/playlist/0t1WOwhBf6SQaeguY3VqiR?si=6e55b04e5df9470a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">playlist</p>
              <p className="text-sm font-semibold sm:text-base">kitchen dance party</p>
            </Link>
          </div>

          <div className="grid gap-3">
            {floatingNotes.map((note) => (
              <Link
                key={note.href ?? note.title}
                href={note.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${note.title}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/40 bg-white/80 p-4 text-center shadow-[0_15px_30px_rgba(32,42,40,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/40 sm:flex-row sm:items-start sm:text-left"
              >
                <div className="rounded-full bg-primary/10 p-2">
                  <note.icon className="h-4 w-4 text-primary transition-transform duration-200 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{note.title}</p>
                  <p className="text-xs text-muted-foreground">{note.detail}</p>
                  <span className="mt-1 inline-flex items-center justify-center text-[0.65rem] uppercase tracking-[0.3em] text-primary/80">
                    watch now
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-primary/30 bg-white/60 p-4 text-sm text-muted-foreground">
            <PlayCircle className="h-5 w-5 text-primary" />
            <span>watch weekly drops on TikTok + youtube shorts</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
