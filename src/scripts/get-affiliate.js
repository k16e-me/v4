import { _q, _empty } from './snips'
import _siblings from './siblings'

export default function _getAffiliate() {
    if (import.meta.env.SSR) return
    if (!_q('[data-first-option="affiliate"]')) return

    const
        text = 'Recommend for me!',
        option = _q('[data-first-option="affiliate"]'),
        affiliate = _empty(localStorage.affiliate) ? text : localStorage.affiliate

    option.innerText = affiliate

    if (affiliate !== text) {
        const siblings = _siblings(option)
        siblings.map(el => {
            if (el.innerText === affiliate) el.innerText = text
        })
    }
}