import ShopActionTypes from './shop.types.js'

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils.js';


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = ( collectionMap ) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage =>({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart())

        collectionRef
        .get()
        .then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionSuccess(collectionMap))
        })
        .catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}