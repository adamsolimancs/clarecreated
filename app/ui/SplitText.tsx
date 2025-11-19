// Credit to ReactBits.dev
'use client';
import { useRef, useEffect, useState, useMemo, type CSSProperties } from "react";
import { gsap } from "gsap";
import type { TweenVars } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: string
  from?: TweenVars
  to?: TweenVars
  threshold?: number
  rootMargin?: string
  textAlign?: CSSProperties["textAlign"]
  onLetterAnimationComplete?: () => void
  lockWords?: string[]
}

const defaultFrom: TweenVars = { opacity: 0, y: 40 }
const defaultTo: TweenVars = { opacity: 1, y: 0 }

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = defaultFrom,
  to = defaultTo,
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign,
  onLetterAnimationComplete,
  lockWords = [],
}: SplitTextProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const animationCompletedRef = useRef(false)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
  const lastWidthRef = useRef(0)
  const [reflowKey, setReflowKey] = useState(0)
  const normalizedLocks = useMemo<string[]>(
    () =>
      (Array.isArray(lockWords) ? lockWords : [])
        .map((word) => word?.toString().trim().toLowerCase())
        .filter((word): word is string => Boolean(word)),
    [lockWords]
  )
  const normalizedSplitType = useMemo(() => {
    if (!normalizedLocks.length) return splitType;
    const tokens = `${splitType}`
      .split(",")
      .map((token) => token.trim())
      .filter(Boolean);
    if (!tokens.includes("words")) tokens.push("words");
    return tokens.join(", ");
  }, [splitType, normalizedLocks.length]);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || typeof ResizeObserver === "undefined") {
      return
    }

    const node = ref.current
    const observer = new ResizeObserver((entries) => {
      const entry = entries?.[0]
      if (!entry) return

      const nextWidth = entry.contentRect.width
      if (Math.abs(nextWidth - lastWidthRef.current) > 2) {
        lastWidthRef.current = nextWidth
        setReflowKey((prev) => prev + 1)
      }
    })

    lastWidthRef.current = node.getBoundingClientRect().width
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return

    const el = ref.current

    animationCompletedRef.current = false

    const absoluteLines = splitType === "lines"
    if (absoluteLines) el.style.position = "relative"

    let splitter: GSAPSplitText | null = null
    try {
      splitter = new GSAPSplitText(el, {
        type: normalizedSplitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      })
    } catch (error) {
      console.error("Failed to create SplitText:", error)
      return
    }

    let targets: HTMLElement[] | undefined
    switch (splitType) {
      case "lines":
        targets = splitter.lines
        break
      case "words":
        targets = splitter.words
        break
      case "chars":
        targets = splitter.chars
        break
      default:
        targets = splitter.chars
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation")
      splitter.revert()
      return
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity"
    })

    if (normalizedLocks.length && splitter.words?.length) {
      splitter.words.forEach((wordEl) => {
        const normalizedWord = wordEl.textContent
          ?.replace(/[^\p{L}\p{N}]/gu, "")
          .toLowerCase()

        if (normalizedWord && normalizedLocks.includes(normalizedWord)) {
          wordEl.style.whiteSpace = "nowrap"
          wordEl.style.display = "inline-block"
        }
      })
    }

    const startPct = (1 - threshold) * 100
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin ?? "-100px")
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0
    const marginUnit = marginMatch ? marginMatch[2] || "px" : "px"
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`
    const start = `top ${startPct}%${sign}`

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        })
        onLetterAnimationComplete?.()
      },
    })

    tl.set(targets, { ...from, immediateRender: false, force3D: true })
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    })

    return () => {
      tl.kill()
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill()
        scrollTriggerRef.current = null
      }
      gsap.killTweensOf(targets)
      if (splitter) {
        splitter.revert()
      }
    }
  }, [
    text,
    delay,
    duration,
    ease,
    normalizedSplitType,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
    normalizedLocks,
    reflowKey,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
        ...(textAlign ? { textAlign } : {}),
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
