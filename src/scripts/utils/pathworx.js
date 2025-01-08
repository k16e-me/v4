import _unslash from '@scripts/unslash'

export const _paths = path => {
    let strippedPath = _unslash(path.pathname)

    const pathArr = strippedPath.split('/')
    const isCollection = () => pathArr.length === 3
    const isCollectionChild = () => pathArr.length === 4
    const collection = () => pathArr[1]
    const collectionParent = () => pathArr.length === 4 ? `${pathArr[1]}/${pathArr[2]}` : collection()

    return {
        isCollection, isCollectionChild, collection, collectionParent
    }
}