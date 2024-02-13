import { _overlay, _setOverlay, _unsetOverlay, _addAffiliate, _affiliate } from './store'
import { _q, _ql } from './snips'

export default function _modal() {
    if (!_q('[data-modal-trigger]')) return

    const
        trigger = _ql('[data-modal-trigger]'),
        close = _q('[data-modal-close]'),
        modal = _q('[data-modal]'),
        slots = _ql('[data-modal-display]'),
        affilateLinks = _ql('[data-action]') ?? null,
        on = () => {
            modal.classList.remove('translate-x-full', 'opacity-0')
            modal.classList.add('translate-x-0', 'opacity-100')
        },
        off = () => {
            modal.classList.remove('translate-x-0', 'opacity-100')
            modal.classList.add('translate-x-full', 'opacity-0')
            slots.map(el => el.classList.add('sr-only'))
            _unsetOverlay()
        },
        display = (e) => {
            e.preventDefault()

            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.modalDisplay === attr))

            slot.scrollTop = 0
            slot.classList.remove('sr-only')
            _overlay.value ? _unsetOverlay() : _setOverlay()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => display(e)))
    close.addEventListener('click', () => off())

    _overlay.subscribe(value => value ? on() : off())

    if (!affilateLinks) return
    affilateLinks.map(el => {
        el.addEventListener('click', e => {
            e.preventDefault()

            const
                target = e.target,
                affiliate = target.getAttribute('data-affiliate'),
                link = target.getAttribute('data-link')

            _addAffiliate(affiliate)
            off()
            setTimeout(() => location.href = link, 200)
        })
    })
}