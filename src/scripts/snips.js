// Selectors
const
    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _transition = () => new Array('transition', 'duration-200', 'ease-out'),
    _py = () => new Array('py-16', 'sm:py-20', 'lg:py-[5.35rem]'),
    _pb = () => new Array('pb-16', 'sm:pb-20', 'lg:pb-[5.35rem]'),
    _pt = () => new Array('pt-16', 'sm:pt-20', 'lg:pt-[5.35rem]'),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1,
    _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    _contrast = () => new Array('contrast-[1.2]', 'brightness-[.75]'),
    _empty = value => {
        return (
            value === undefined ||
            value === null ||
            (typeof value === 'object' && Object.keys(value).length === 0) ||
            (typeof value === 'string' && value.trim().length === 0)
        )
    }


// Exports
export {
    _body, _q, _ql, _transition, _py, _pb, _pt, _even, _odd, _capitalize, _contrast, _empty
}