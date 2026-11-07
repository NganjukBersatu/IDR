const SEL = [
  'section:not(.hs) h2', 'section:not(.hs) .lead', '.card', '.tc', '.step',
  '.stats .wrap>div', '.faq details', '.ctab', '.logo-box', '.pts li',
  '.plans-box', '.fb', '.tw', '.sol', '.more',
].map((x) => 'main ' + x).join(',')

export function setupReveal(router) {
  const root = document.documentElement
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  root.classList.add('js')

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
  )

  function scan() {
    document.querySelectorAll(SEL).forEach((el) => {
      if (el.dataset.rv) return
      el.dataset.rv = '1'
      const i = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0
      el.style.setProperty('--d', Math.min(i, 5) * 70 + 'ms')
      el.classList.add('rv')
      io.observe(el)
    })
  }

  router.isReady().then(() => setTimeout(scan, 150))
  router.afterEach(() => setTimeout(scan, 150))
}