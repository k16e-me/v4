import { _q, _ql } from './snips'
import gsap from 'gsap'
import _gsap from './gsap'
import _siblings from './siblings'

const g = _gsap()

export default function _words() {
    if (!_q('[data-words]')) return

    const
        words = _ql('[data-words]'),
        delay = 3000,
        tl = gsap.timeline({ duration: 0.4, ease: 'back.in', repeat: -1 })

    tl.from(words, {
        autoAlpha: 0,
        scale: 0.8,
        yPercent: -100,
        stagger: 2
    })
    tl.to(words, {
        autoAlpha: 0,
        scale: 0.8,
        yPercent: 100,
        stagger: 2
    }, '<+=2')
}