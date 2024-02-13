import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { _q, _ql } from './snips'
import _gsap from './gsap'
import _slugify from './slugify'

gsap.registerPlugin(Flip)
const g = _gsap()

export default function _fuzzySearch() {
    if (!_q('[data-fuzzy-search]')) return

    let typingTimer
    const
        wrapper = _q('[data-fuzzy-search]'),
        input = _q('input', wrapper),
        entries = _ql(`[data-list-${wrapper.dataset.list}] > *`),
        typeInterval = 150,
        allText = 'All Partners',
        firstOpt = _q('[data-first-option="all-partners"]'),
        select = _q('#partners', wrapper)

    firstOpt.textContent = allText

    select.addEventListener('change', e => {
        input.value = ''
        action(e.target, entries)
    })
    input.addEventListener('keyup', () => {
        select.value = select.options[0].value
        action(input, entries)
    })

    function show(item) { item.style.display = 'block' }
    function hide(item) { item.style.display = 'none' }
    function showAll(arr) { arr.map(el => show(el)) }

    function search(input, list) {
        const
            query = input.value.toLowerCase().trim(),
            state = Flip.getState(list)

        list.map(el => {
            const
                cdn1 = el.textContent.toLowerCase(),
                cdn2 = _q('[data-partner]', el).dataset.partner

            if (cdn1.includes(query) || cdn2.includes(query)) {
                show(el)

            }
            else if (query === _slugify(allText)) showAll(list)
            else hide(el)
        })

        Flip.from(state, {
            scale: true,
            ease: 'power1.inOut',
            absoluteOnLeave: true,
            prune: true,
            absolute: true,
            fade: true,
            simple: true,
            onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }),
            onLeave: els => gsap.to(els, { opacity: 0, scale: 0 })
        })
    }

    function action(input, list) {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(search(input, list), typeInterval)
    }
}