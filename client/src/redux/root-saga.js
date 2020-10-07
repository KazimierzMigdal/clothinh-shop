import { all, call } from 'redux-saga/effects';

import { cartSagas } from './cart/cart.sagas.js';
import { shopSagas } from './shop/shop.sagas.js';
import { userSagas } from './user/user.sagas.js';


export default function* rootSaga(){
    yield  all([
        call(cartSagas),
        call(shopSagas),
        call(userSagas)
    ])
}