import { call, put, takeLatest } from 'redux-saga/effects';

import ShopActionTypes from './shop.types.js';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions.js'

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils.js';


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        )
        yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    )
}