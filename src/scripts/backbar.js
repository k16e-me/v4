import _scroll from './scroll'
import { _q, _ql } from './snips'


export default function _backbar() {
    if (!_q('[data-backbar]')) return

    const
        backbar = _q('[data-backbar]'),
        scroll = Number((Math.round(backbar.nextElementSibling.getBoundingClientRect().height) / 2).toFixed()) ?? 150

    _scroll(activateHeader)

    function activateHeader(scrollOffset) {
        if (scrollOffset > scroll) {
            console.log(`You're past past the threshold!`)
        } else {
            console.log(`You're at the top`)
        }
    }
}