import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.js';

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) =>(
    <div className='collection-overview'>
        {
            collections.map( ({ id, ...otherCollectionProps })=> (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview)