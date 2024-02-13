import {
    _q, _ql
} from './snips'

export default function _flipper () {
    if (!_q('[data-flipper]')) return

    const
        faces = _ql('[data-flipper="face"]'),
        backs = _ql('[data-flipper="back"]'),
        close = ['translate-y-0', 'scale-1'],
        open = ['translate-y-full', 'scale-90']

    faces[0].classList.add('translate-y-full')

    faces.map(i => {
        i.addEventListener('click', e => {
            const otherFaces = faces.filter(i => (i !== e.target))

            i.classList.remove(...close)
            i.classList.add(...open)
            otherFaces.map(i => i.classList.remove(...open))
        })
    })
    backs.map(i => {
        i.addEventListener('click', e => {
            const backface = e.target.previousElementSibling

            backface.classList.remove(...open)
            backface.classList.add(...close)
        })
    })
}