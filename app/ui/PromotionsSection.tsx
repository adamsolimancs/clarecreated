import { Button } from "@/app/ui/components/button"
import { ExternalLink, ShoppingBag, Percent } from "lucide-react"
import Link from "next/link"
import styles from './promotions.module.css'
import ShinyText from './components/ShinyText.js';
import { useEffect, useRef, useState } from "react"

const PromotionsSection = () => {
  const promotions = [
    {
      title: "Kitchen & Apartment Essentials",
      description: "Discover my favorite cooking tools and home essentials that make life easier",
      url: "https://www.amazon.com/shop/clarecreated?ref_=cm_sw_r_apin_aipsfshop_aipsfclarecreated_FS00Z55XDWZD69JDJX76&language=en_US",
      icon: ShoppingBag,
      color: styles.bgAccentPink,
      buttonText: "Shop Now"
    },
    {
      title: "NuGo Discount Code",
      description: "Get exclusive discounts on my favorite protein bars and healthy snacks",
      url: "https://nugonutrition.com/Clare",
      icon: Percent,
      color: styles.bgAccentYellow,
      buttonText: "Get Discount"
    }
  ];

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // trigger when 20% of section is visible
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef}
      className={`${styles.promotionSection} ${isVisible ? styles.promotionSectionVisible : ""
        }`}
      id="promos"
    >
      <div className={styles.promotionContainer}>
        <div className={styles.promotionHeader}>
          <h2 className={styles.promotionTitle}>
            my favorite things
          </h2>
          <ShinyText
            text="check out my handpicked recommendations and exclusive deals"
            disabled={false}
            speed={2}
            className={styles.promotionSubtitle}
          />
        </div>

        <div className={styles.promotionGrid}>
          {promotions.map((promo, index) => (
            <div
              key={promo.title}
              className={styles.promotionCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Link href={promo.url} target="_blank" rel="noopener noreferrer" className={`${styles.promotionIcon} ${promo.color}`}>
                <promo.icon className={styles.textAccentForeground} />
              </Link>

              <h3 className={styles.promotionCardTitle}>
                {promo.title}
              </h3>

              <p className={styles.promotionCardDesc}>
                {promo.description}
              </p>

              <Button
                asChild
                className={styles.promotionBtn}
              >
                <Link href={promo.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {promo.buttonText}
                  <ExternalLink style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} />
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