export default function _paths(path) {
    const
        pathname = () => path.pathname.split('/'),
        isCollection = () => pathname().length == 3,
        isCollectionChild = () => pathname().length == 4,
        collection = () => pathname()[1],
        collectionParent = () => `${pathname()[1]}/${pathname()[2]}`

    return {
        pathname, isCollection, isCollectionChild, collection, collectionParent
    }
}