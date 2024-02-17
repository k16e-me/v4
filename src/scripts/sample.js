import _random from './random'

export default function _sample(arr, n, guard) {
    if (n == null || guard) {
        return arr[_random(arr.length - 1)]
    }

    let
        length = arr.length,
        last = length - 1

    n = Math.max(Math.min(n, length), 0)

    for (let i = 0; i < n; i++) {
        let
            rand = _random(i, last),
            temp = arr[i]
        arr[i] = arr[rand]
        arr[rand] = temp
    }
    return arr.slice(0, n)
}

/**
    * Sample n random values from a collection using the modern version of the Fisher-Yates shuffle.
    * https://underscorejs.org/docs/modules/sample.html
*/