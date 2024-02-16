import { gsap } from 'gsap'
import { _ql, _q } from './snips'

export default function _zaps() {
    const
        tl = gsap.timeline({ ease: 'back.out', duration: 0.3 }),
        header = _q('[data-header-main]'),
        title = _q('[data-title]')

    tl.from(title, { yPercent: -24, autoAlpha: 0 })
    tl.from(header, { yPercent: 48, autoAlpha: 0 })
}