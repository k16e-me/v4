import { gsap } from 'gsap'
import { _ql, _q } from './snips'

export default function _zaps() {
    const
        tl = gsap.timeline({ ease: 'back.out', duration: 0.3 }),
        header = _q('[data-header]'),
        above = _q('[data-entry="above"]'),
        below = _ql('[data-entry="below"]')

    tl.from(above, { yPercent: -12, autoAlpha: 0 })
    tl.from(header, { yPercent: 12, autoAlpha: 0 })
    tl.from(below, { yPercent: 12, autoAlpha: 0 })
}