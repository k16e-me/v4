import { _ql, _q } from './snips'

export default function _brief() {
    const
        trigger = _q('a[href="/contact"]'),
        contacts = _ql('a[href="/contact"]'),
        origin = import.meta.env.DEV ? 'localhost:' : 'https://v4.k16e.co',
        pathname = new URL(`${origin}/brief`),
        calAttrs = (el) => {
            el.setAttribute('data-cal-link', 'k16e.co/brief')
            el.setAttribute('data-cal-namespace', '')
            el.setAttribute('data-cal-config', '{ "layout": "month_view" }')
        },
        clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        })

    contacts.map(contact => {
        contact.href = 'javascript:void(0)'
        calAttrs(contact)
    })

    if (location.pathname === '/brief') {
        location.replace('/')
    }
}