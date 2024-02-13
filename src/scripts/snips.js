// Selectors
const
    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _transition = () => new Array('transition', 'duration-200', 'ease-linear'),
    _padY = () => new Array('py-8', 'sm:py-12', 'lg:py-24'),
    _padB = () => new Array('pb-8', 'sm:pb-12', 'lg:pb-24'),
    _padT = () => new Array('pt-8', 'sm:pt-12', 'lg:pt-24'),
    _gradientLight = () => new Array('bg-gradient-to-b', 'from-white', 'via-accent-50', 'to-white'),
    _gradientSurface = () => new Array('bg-gradient-to-b', 'from-white', 'via-surface-50', 'to-white'),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1,
    _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()


const _scrollToTopOffset = (target, offset = 56) => {
    // Credit here @ https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
    const
        topOffset = offset,
        elPos = Math.round(target.getBoundingClientRect().top),
        offsetPos = (elPos + window.scrollY) - topOffset

    window.scrollTo({ top: offsetPos })
}


const _empty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    )
}


const _encode = data => {
    return (
        Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    )
}



// Exports
export {
    _body, _empty, _q, _ql, _transition, _padY, _padB, _padT, _gradientLight, _gradientSurface, _scrollToTopOffset, _even, _odd, _capitalize, _encode
}