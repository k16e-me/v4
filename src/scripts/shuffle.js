export default function _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const
            j = Math.floor(Math.random() * (i + 1)),
            t = arr[i]

        arr[i] = arr[j]
        arr[j] = t
    }
    return arr
}