import _hue from './hue'

export default function _shade(hex) {
    const
        { h } = _hue(hex),
        pastel = () => 'hsl(' + h + ', 100%, 90%)'

    return {
        pastel
    }
}