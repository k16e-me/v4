import { _q, _ql } from './snips'
import gsap from 'gsap'

export default function _words() {
    if (!_q('[data-word]')) return

    const
        words = _ql('[data-word]'),
        pause = _q('[data-pause]'),
        tl = gsap.timeline({ duration: 0.4, ease: 'back.in', repeat: -1 }),
        frCycle = tl.from(words, {
            autoAlpha: 0,
            yPercent: -100,
            scale: 0.7,
            stagger: 2
        }),
        toCycle = tl.to(words, {
            autoAlpha: 0,
            yPercent: 100,
            scale: 0.7,
            stagger: 2
        }, '<+=2')

    if (pause) {
        pause.addEventListener('click', () => {
            frCycle.paused(!frCycle.paused())
        })
    }
}