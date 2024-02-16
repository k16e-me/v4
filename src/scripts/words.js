import { _q, _ql } from './snips'
import gsap from 'gsap'
import _gsap from './gsap'
import _siblings from './siblings'

const g = _gsap()

export default function _words() {
    if (!_q('[data-words]')) return

    /**
        * section loads blank
        * or gsap kicks in immediately slides one word in
        * word slid in gets a .in class
        * cyclicalize array, so there's always a prev el
        * prev el to .in gets a .in class and slides in
        * while current word gets a .out class and slides out
        * loop
    */
    const
        words = _ql('[data-words]'),
        delay = 3000,
        tl = gsap.timeline({ duration: 0.4 }),
        activeIdx = 0,
        activeWord = _q('[data-words].active')

    tl.from(activeWord, { y: 48, scale: 0.9, ease: 'back.in', autoAlpha: 0 })
    // loop()

    function loop() {

        setTimeout(() => {

            loop()
        }, delay)
    }

    function setActiveWord(el) {

    }

    function getNewWordIndex(el) {
        let idx = el.activeIdx + 1
        if (idx >= el.words.length) idx = 0
        return idx
    }
}