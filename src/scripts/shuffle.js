import _sample from './sample'

export default function _shuffle(obj) {
    return _sample(obj, Infinity)
}

/**
    * Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
    * https://underscorejs.org/docs/modules/shuffle.html
*/