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
        tl = gsap.timeline({ duration: 0.4, ease: 'back.in', repeat: -1 })

    let
        activeIdx = 0,
        activeWord = words[activeIdx],
        nextWord = null

    tl.from(words, {
        yPercent: -100,
        stagger: 2,
        delay: 0
    })
    tl.to(words, {
        yPercent: 100,
        stagger: 2
    }, '<+=2')

    function setNextWord() {
        nextWord = words[getNewWordIndex(activeWord)]
        switchWords()
        console.log(nextWord)
    }

    function switchWords() {
        activeWord = nextWord
    }

    function getNewWordIndex(el) {
        let idx = words.indexOf(el) + 1
        if (idx >= words.length) idx = 0
        return idx
    }
}