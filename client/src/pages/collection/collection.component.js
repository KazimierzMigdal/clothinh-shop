import React from 'react';
import { connect } from 'react-redux'

import { CollectionPageContainer, CollectionTitle, CollectionItems } from './collection.styles.js'

import CollectionItem from '../../components/colletion-item/collection-item.component.js';

import { selectCollection } from '../../redux/shop/shop.selectors.js'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return(
        <CollectionPageContainer >
            <CollectionTitle >{title.toUpperCase()}</CollectionTitle>
            <CollectionItems >
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItems>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);