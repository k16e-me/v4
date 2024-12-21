import _unslash from '@scripts/unslash'

export default function _paths(path) {
    let strippedPath = _unslash(path.pathname)

    const
        pathArr = strippedPath.split('/'),
        isCollection = () => pathArr.length === 3,
        isCollectionChild = () => pathArr.length === 4,
        collection = () => pathArr[1],
        collectionParent = () => pathArr.length === 4 ? `${pathArr[1]}/${pathArr[2]}` : collection()

    return {
        isCollection, isCollectionChild, collection, collectionParent
    }
}