import { _ql, _q } from './snips'

export default function _brief() {
    if (_q('a[href="/contact"]')) {
        const
            contacts = _ql('a[href="/contact"]')

        contacts.map(contact => {
            contact.setAttribute('data-cal-link', 'k16e.co/brief')
            contact.setAttribute('data-cal-namespace', '')
            contact.setAttribute('data-cal-config', '{ "layout": "month_view" }')

            contact.href = 'javascript:void(0)'
        })
    }
}