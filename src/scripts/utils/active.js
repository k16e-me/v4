import { _ql, _q, _empty } from './snips'
import { _slugify } from './slugify'

export default function _active() {
    if (!_q('[data-anchor]')) return

    const
        navA = _ql('[data-anchor]'),
        currLoc = _slugify(location.pathname),
        parent = location.pathname.split('/')[1],
        activeA = navA.find(a => (a.dataset.anchor === currLoc || parent.includes(a.dataset.anchor)))

    if (activeA) {
        navA.filter(a => a !== activeA).map(a => removeActive(a))
        addActive(activeA)
    }
    if (activeA == undefined) {
        const home = navA.find(a => a.dataset.anchor === '/')
        addActive(home)
        navA.filter(a => a !== home).map(a => removeActive(a))
    }

    function addActive(el) { el.classList.add('active') }
    function removeActive(el) { el.classList.remove('active') }
}