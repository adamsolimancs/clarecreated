"use client";

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/app/ui/components/button"
import { ExternalLink, Percent, ShoppingBag } from "lucide-react"
import styles from "./promotions.module.css"
import ShinyText from "./components/ShinyText.js"

const promotions = [
  {
    title: "Kitchen & Apartment Essentials",
    description: "Discover my favorite cooking tools and home staples that make cooking enjoyable and efficient.",
    url: "https://www.amazon.com/shop/clarecreated?ref_=cm_sw_r_apin_aipsfshop_aipsfclarecreated_FS00Z55XDWZD69JDJX76&language=en_US",
    icon: ShoppingBag,
    color: styles.bgAccentPink,
    buttonText: "Shop my Amazon",
    badge: "amazon storefront",
    detail: "new finds + restocks added weekly",
  },
  {
    title: "NuGo Discount Code",
    description: "Get exclusive discounts on my favorite protein bars and healthy snacks to fuel your day.",
    url: "https://nugonutrition.com/Clare",
    icon: Percent,
    color: styles.bgAccentYellow,
    buttonText: "Save on NuGo",
    badge: "code: nugonutrition.com/Clare",
    detail: "chocolate pretzel, cookie dough + more",
  },
  {
    title: "Caraway Kitchenware",
    description: "10% off high-quality kitchenware with code \"clare\" so your stovetop looks as good as it cooks.",
    url: "https://rstr.co/caraway/47874",
    icon: ShoppingBag,
    color: styles.bgAccentMint,
    buttonText: "Shop Caraway",
    badge: "code: CLARE",
    detail: "non-toxic ceramic cookware & bakeware",
  },
]

const PromotionsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`${styles.promotionSection} ${isVisible ? styles.promotionSectionVisible : ""}`}
      id="promos"
      aria-labelledby="favorite-deals-heading"
    >
      <div className={styles.promotionContainer}>
        <div className={styles.promotionHeader}>
          <p className={styles.promotionEyebrow}>exclusive recs</p>
          <h2 id="favorite-deals-heading" className={styles.promotionTitle}>
            my favorite deals
          </h2>
          <ShinyText
            text="check out my handpicked recommendations and exclusive deals"
            disabled={false}
            speed={2}
            className={styles.promotionSubtitle}
          />
          <p className={styles.promotionLead}>
            highly curated, obsessively tested, and casually chic kitchen faves. no clutter—just staples that elevate your
            cooking, your space, and your snack drawer.
          </p>
        </div>

        <div className={styles.promotionGrid}>
          {promotions.map((promo, index) => (
            <div
              key={promo.title}
              className={styles.promotionCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.promotionBadge}>{promo.badge}</div>

              <Link
                href={promo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.promotionIcon} ${promo.color}`}
                aria-label={`${promo.title} link`}
              >
                <promo.icon className={styles.textAccentForeground} />
              </Link>

              <div className={styles.promotionCopy}>
                <h3 className={styles.promotionCardTitle}>{promo.title}</h3>
                <p className={styles.promotionCardDesc}>{promo.description}</p>
                <p className={styles.promotionMeta}>{promo.detail}</p>
              </div>

              <Button asChild className={styles.promotionBtn}>
                <Link
                  href={promo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.promotionBtnInner}
                >
                  {promo.buttonText}
                  <ExternalLink aria-hidden="true" className={styles.externalIcon} />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromotionsSection
