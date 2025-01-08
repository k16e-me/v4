import _scroll from '../scroll'
import { _q, _ql } from '../snips'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function _backbar() {
    if (!_q('[data-backbar]')) return

    const
        backbar = _q('[data-backbar]'),
        scroll = (backbar?.nextElementSibling?.getBoundingClientRect().height / 2) ?? 250,
        showBackbar = gsap.from(backbar, {
            yPercent: -100,
            autoAlpha: 0,
            ease: 'sine.out',
            duration: 0.3,
            scrollTrigger: {
                start: scroll,
                toggleActions: 'play none none reverse'
            }
        })
}