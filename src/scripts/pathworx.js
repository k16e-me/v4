import _unslash from '@scripts/unslash'

export default function _paths(path) {
    let strippedPath = _unslash(path.pathname)
    const
        pathname = strippedPath.split('/'),
        isCollection = () => pathname.length === 3,
        isCollectionChild = () => pathname.length === 4,
        collection = () => pathname[1],
        collectionParent = () => `${pathname[1]}/${pathname[2]}`

    return {
        isCollection, isCollectionChild, collection, collectionParent
    }
}