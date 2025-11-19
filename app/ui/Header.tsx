"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { smoothScrollToId } from "@/app/lib/scroll"

type NavTab = {
  name: string
  href: string
  index?: number
}

const tabs: NavTab[] = [
  { name: "recipes", href: "/recipes", index: 1 },
  { name: "about me", href: "/about", index: 2 },
  { name: "socials", href: "#socials" },
  { name: "contact", href: "#footer" },
]

const deriveIndexFromPath = (pathname: string) => {
  if (pathname.startsWith("/recipes")) return 1
  if (pathname.startsWith("/about")) return 2
  return 0
}

const Header = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(() => deriveIndexFromPath(pathname))

  useEffect(() => {
    setActiveTab(deriveIndexFromPath(pathname))
  }, [pathname])

  const handleLocalLink = useCallback((tabIndex?: number) => {
    if (typeof tabIndex === "number") {
      setActiveTab(tabIndex)
    }
  }, [])

  const handleHashNavigation = useCallback(
    (hash: string) => {
      const id = hash.replace("#", "")
      smoothScrollToId(id, { offset: 12 })
    },
    []
  )

  const renderTab = useCallback(
    (tab: NavTab, isActive: boolean) => {
      const sharedClasses = `group relative inline-flex items-center justify-center rounded-full px-4 py-2 transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-primary/20 to-primary/10 text-foreground shadow-lg"
          : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50`

      const label = (
        <span
          className={`whitespace-nowrap transition-transform duration-200 ${
            isActive ? "scale-105" : "group-hover:scale-110"
          } motion-reduce:transform-none`}
        >
          {tab.name}
        </span>
      )

      if (tab.href.startsWith("#")) {
        return (
          <button
            key={tab.name}
            type="button"
            onClick={() => handleHashNavigation(tab.href)}
            className={sharedClasses}
            aria-label={`Scroll to ${tab.name}`}
          >
            {label}
          </button>
        )
      }

      return (
        <Link
          key={tab.name}
          href={tab.href}
          aria-current={isActive ? "page" : undefined}
          onClick={() => handleLocalLink(tab.index)}
          className={sharedClasses}
        >
          {label}
        </Link>
      )
    },
    [handleHashNavigation, handleLocalLink]
  )

  return (
    <header className="relative left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto py-4 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-2xl font-semibold text-foreground md:text-left">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setActiveTab(0)}
            >
              clare<span className="hero-text">created</span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base md:gap-6">
            {tabs.map((tab) => {
              const isActive = typeof tab.index === "number" && activeTab === tab.index
              return renderTab(tab, isActive)
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
