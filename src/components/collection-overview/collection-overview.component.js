import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionOverviewContainer }  from './collection-overview.styles.js'

import CollectionPreview from '../collection-preview/collection-preview.component.js';

import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors.js'


const CollectionOverview = ({ collections }) =>(
    <CollectionOverviewContainer >
        {
            collections.map( ({ id, ...otherCollectionProps })=> (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview)