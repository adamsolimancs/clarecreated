type ScrollOptions = {
  offset?: number
}

export const smoothScrollToId = (targetId: string, options: ScrollOptions = {}) => {
  if (typeof window === "undefined" || typeof document === "undefined") return

  const element = document.getElementById(targetId)
  if (!element) return

  const { offset = 0 } = options
  const elementTop = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: elementTop,
    behavior: "smooth",
  })
}
