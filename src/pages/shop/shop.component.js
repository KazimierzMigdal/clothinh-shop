import React from 'react';
import { Route } from 'react-router-dom'

import { ShopPageContainer } from './shop.styles.js';

import CollectionPage from '../collection/collection.component.js'
import CollectionOverview from '../../components/collection-overview/collection-overview.component.js';


const ShopPage = ({ match }) => (
    <ShopPageContainer >
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
)

export default ShopPage