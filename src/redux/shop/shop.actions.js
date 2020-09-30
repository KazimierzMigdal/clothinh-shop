import ShopActionTypes from './shop.types.js'

export const updateCollections = ( collectionMap ) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionMap
})