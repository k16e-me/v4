export default function _scroll(...scrollEvents) {
    let
        lastKnownScrollPosition = 0,
        ticking = false

    document.addEventListener('scroll', () => {
        lastKnownScrollPosition = window.scrollY

        if (!ticking) {
            window.requestAnimationFrame(() => {
                scrollEvents.map(evt => evt(lastKnownScrollPosition))
                ticking = false
            })

            ticking = true
        }
    })
}