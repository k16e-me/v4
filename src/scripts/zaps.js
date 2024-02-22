import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { _ql, _q } from './snips'

gsap.registerPlugin(ScrollTrigger)

export default function _zaps() {
    const
        tl = gsap.timeline({ ease: 'back.out', duration: 0.3 }),
        header = _q('[data-header]'),
        above = _q('[data-entry="above"]'),
        below = _ql('[data-entry="below"]')

    _q('[data-entry="above"]') && tl.from(above, { yPercent: -12, autoAlpha: 0 })
    _q('[data-header]') && tl.from(header, { yPercent: 12, autoAlpha: 0 })
    _q('[data-entry="below"]') && tl.from(below, {
        yPercent: 12,
        autoAlpha: 0
    })

    // below.map(e => {
    //     ScrollTrigger.create({
    //         trigger: e,
    //         toggleActions: 'play pause resume pause',
    //         onEnter: () => console.log('enter'),
    //         onLeave: () => console.log('leave')
    //     })
    // })
}