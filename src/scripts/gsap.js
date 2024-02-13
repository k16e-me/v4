import { gsap } from 'gsap'

export default function _gsap() {
    let tl = () => gsap.timeline({
        defaults: {
            autoAlpha: 1,
            duration: 0.3,
            ease: 'circ.out'
        }
    })

    const
        moveX = (el, props) => tl().to(el, { ...props }),
        slideOut = (el, props) => tl().to(el, { autoAlpha: 0, y: 48, ease: 'back.in', ...props }),
        slideIn = (el, props) => tl().to(el, { y: 0, ease: 'back.out', ...props }),
        slideTop = (el, props) => tl().to(el, { y: 0, ...props }),
        slideBottom = (el, props) => tl().to(el, { autoAlpha: 0, duration: 0.2, y: '100%', ease: 'circ.in' }),
        slideOff = (el, props) => tl().to(el, { y: 0, ease: 'back.out', ...props }),
        on = (el, props) => tl().to(el, { duration: .5 }),
        off = (el, props) => tl().to(el, { opacity: 0, visibility: 0, duration: .5 })

    return { moveX, slideOut, slideIn, slideTop, slideBottom, slideOff, on, off }
}