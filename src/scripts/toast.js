import { _q, _ql, _empty } from './snips'
import _gsap from './gsap'

const g = _gsap()

export default function _runToast() {
    const
        toast = _q('[data-toast]'),
        p = _q('[data-toast-value]'),
        close = _q('[data-toast-close]')

    close.addEventListener('click', dismiss)

    function dismiss() { g.slideOut(toast) }
    function display(msg) {
        p.textContent = msg
        g.slideIn(toast)
        setTimeout(() => dismiss(), 5000)
    }

    return { dismiss, display }
}