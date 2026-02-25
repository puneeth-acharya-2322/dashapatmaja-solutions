import { useEffect } from 'react'

/**
 * Hook that watches elements with [data-scroll-anim] and [data-scroll-scale]
 * using IntersectionObserver and adds .anim-in when they enter the viewport.
 * This replaces Webflow IX2 scroll animations.
 */
export function useScrollAnimation(ref) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-anim], [data-scroll-scale]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger by index if multiple siblings
            const siblings = Array.from(entry.target.parentElement?.children || [entry.target])
            const idx = siblings.indexOf(entry.target)
            setTimeout(() => {
              entry.target.classList.add('anim-in')
            }, idx * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

/**
 * Animate counting numbers when they enter the viewport.
 * Works with any element that has data-count-to attribute.
 */
export function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count-to]')
    if (!counters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.dataset.countTo, 10)
            const duration = 1500
            const start = Date.now()
            const tick = () => {
              const elapsed = Date.now() - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              el.textContent = Math.round(eased * target)
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    counters.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
