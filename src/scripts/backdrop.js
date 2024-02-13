import {
    _overlay, _setOverlay, _unsetOverlay, _sheet, _unsetSheet
} from './store'
import { _q, _ql } from './snips'

export default function _backdrop() {
    if (!_q('[data-backdrop]')) return

    const
        body = document.body,
        backdrop = _q('[data-backdrop]'),
        on = () => {
            backdrop.classList.remove('opacity-0', 'invisible')
            backdrop.classList.add('opacity-70')
            body.style.overflow = 'hidden'
        },
        off = () => {
            backdrop.classList.add('opacity-0')
            backdrop.classList.remove('opacity-70')
            setTimeout(() => backdrop.classList.add('invisible'), 300)
            body.style.overflow = ''
            _unsetOverlay()
            _unsetSheet()
        }

    _overlay.subscribe(value => value ? on() : off())
    _sheet.subscribe(value => value ? on() : off())
    backdrop.addEventListener('click', off)
}