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
        movement = { y: 48, scale: 0.9, ease: 'back.in', autoAlpha: 0 }

    let
        activeIdx = 0,
        activeWord = words[activeIdx],
        nextWord = null

    tl.from(activeWord, { ...movement })
    loop()

    function loop() {
        setTimeout(() => {
            tl.to(activeWord, {
                ...movement,
                delay: (delay / 1000),
                onComplete: () => setNextWord()
            })
            loop()
        }, delay)
    }

    function setNextWord() {
        nextWord = words[getNewWordIndex(activeWord)]
        // activeWord = nextWord
        // activeIdx++
        console.log(nextWord)
    }

    function getNewWordIndex(el) {
        if (activeIdx >= words.length) activeIdx = 0
        return activeIdx
    }
}