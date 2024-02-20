import _hue from './hue'

export default function _shade(hex) {
    const
        { hue } = _hue(hex),
        pastel = () => `hsl(${hue}, 96%, 93%)`,
        light = () => `hsl(${hue}, 38%, 56%)`,
        dark = () => `hsl(${hue - 1}, 83%, 14%)`

    return {
        pastel,
        light,
        dark
    }
}