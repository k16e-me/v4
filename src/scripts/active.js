import { _ql, _q, _empty } from './snips'
import _slugify from './slugify'
import _siblings from './siblings'

export default function _active() {
    if (!_q('[data-anchor]')) return

    const
        navA = _ql('[data-anchor]'),
        currLoc = _slugify(location.pathname),
        parent = location.pathname.split('/')[1],
        activeA = navA.filter(a => (a.dataset.anchor === currLoc || parent.includes(a.dataset.anchor)))

    if (!_empty(activeA)) {
        navA.map(a => a.classList.remove('active'))
        activeA.map(a => a.classList.add('active'))
    } else {
        navA.map(a => a.classList.remove('active'))
    }
}