import _hue from './hue'

export default function _shade(hex) {
    const
        { hue } = _hue(hex),
        pastel = () => `hsl(${hue}, 97%, 92%)`,
        brand = () => `hsl(${hue}, 100%, 40%)`,
        dark = () => `hsl(${hue - 1}, 73%, 26%)`

    return {
        pastel,
        brand,
        dark
    }
}