export default function _random(min, max) {
    if (max == null) {
        max = min
        min = 0
    }
    return min + Math.floor(Math.random() * (max - min + 1))
}

/**
    * Return a random integer between min and max (inclusive).
    * https://underscorejs.org/docs/modules/random.html
*/