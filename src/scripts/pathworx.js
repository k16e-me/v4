export default function _paths(path) {
    const
        pathname = path.pathname.split('/'),
        isCollection = () => pathname.length === 3,
        isCollectionChild = () => pathname.length === 4,
        collection = () => pathname[1],
        collectionParent = () => pathname.length === 2 ? `${pathname[1]}/${pathname[2]}` : pathname[1]

    return {
        isCollection, isCollectionChild, collection, collectionParent
    }
}