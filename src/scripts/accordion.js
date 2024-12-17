import _siblings from '@scripts/siblings'
import { _ql, _q } from '@scripts/snips'

export default function _accordion() {
    if (!_q('.accordion')) return

    const menus = _ql('.accordion')

    menus.forEach(i => {
        const trigger = _q('.accordion__button', i)
        const icon = _q('.accordion__icon', i)
        const content = _q('.accordion__content', i)

        trigger.addEventListener('click', e => {
            e.preventDefault()

            if (!i.classList.contains('is-active')) {
                expand(i, trigger, content, icon)

                const actives = _siblings(i).filter(j => j.classList.contains('is-active'))

                actives.forEach(k => {
                    const trigger = _q('.accordion__button', k)
                    const icon = _q('.accordion__icon', k)
                    const content = _q('.accordion__content', k)

                    collapse(k, trigger, content, icon)
                })
            } else {
                collapse(i, trigger, content, icon)
            }

            return false
        })
    })

    function expand(menu, trigger, content, icon) {
        menu.classList.add('is-active')
        trigger.setAttribute('aria-expanded', 'true')
        content.classList.remove('hidden')
        content.style.maxHeight =
            content.scrollHeight + 'px'
        icon.classList.add('rotate-180')
    }

    function collapse(menu, trigger, content, icon) {
        menu.classList.remove('is-active')
        trigger.setAttribute('aria-expanded', 'false')
        content.style.maxHeight = '0px'
        icon.classList.remove('rotate-180')
        setTimeout(() => {
            content.classList.add('hidden')
        }, 350)
    }
}