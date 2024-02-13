export default function _mobile() {
    const
        media = '(max-width: 1023px)',
        mql = window.matchMedia(media)

    let
        screen = false,
        listener = () => mql.matches ? screen = true : screen = false

    listener()
    mql.addEventListener('change', listener)
    return screen
}