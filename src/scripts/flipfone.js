import {
    _q, _ql
} from './snips'
import _siblings from './siblings'
import _gsap from './gsap'

const g = _gsap()

export default function _flipfone() {
    if (!_q('[data-flipfone]') || import.meta.env.SSR) return

    const
        flipfones = _ql('[data-flipfone]'),
        progressbar = _q('[data-progressbar]'),
        flips = _ql('[data-flipfone-content]'),
        initialWidth = 100 / flips.length

    let progressbarWidth = initialWidth

    g.moveX(progressbar, { width: `${progressbarWidth}%` })

    flipfones.map(el => {
        const
            flipfone = el,
            buttons = _ql('button', el)

        buttons.map((button, idx) => {
            button.addEventListener('click', e => { showFlip(e, flips, idx) })
        })
    })

    function showFlip(event, flips, currentIdx) {
        const
            toggle = event.target,
            flip = flips.find(flip => (flip.dataset.flipfoneContent === toggle.dataset.flipfoneToggle))

        progressbarWidth = (currentIdx + 1) * initialWidth
        g.moveX(progressbar, { width: `${progressbarWidth}%`, delay: 0.25 })

        toggle.classList.add('active')
        _siblings(toggle).map(sib => sib.classList.remove('active'))

        _siblings(flip).map(el => g.slideOut(el))
        g.slideIn(flip, { delay: 0.25 })
    }
}