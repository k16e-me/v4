import { _ql, _q } from './snips'

export default function _prefilters() {
    if (
        !_q('a') || !_q('p b')
    ) return

    if (_q('a')) _ql('a').map(a => (a.pathname === '/home' ? a.pathname = '' : false))
    if (_q('p b')) _ql('p b').map(b => (b.classList.add('text-dark-950', 'font-semibold')))
}