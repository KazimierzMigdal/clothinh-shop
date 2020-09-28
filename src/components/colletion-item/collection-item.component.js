import React from 'react'
import { connect } from 'react-redux';

import { CollectionItemFooterContainer,
    CollectionItemContainer,
    CollectionItemImageContainer,
    CollectionItemName,
    CollectionItemPrice,
    CustomButtonContainer } from './collection-item.styles.js'

import { addItem } from '../../redux/cart/cart.actions.js';


const CollectionItem = ({ item, addItem }) =>{
    const {imageUrl, name, price} = item
    return (
        <CollectionItemContainer >
            <CollectionItemImageContainer imageUrl={imageUrl} />
            <CollectionItemFooterContainer >
                <CollectionItemName >{name}</CollectionItemName>
                <CollectionItemPrice >{price}$</CollectionItemPrice>
            </CollectionItemFooterContainer>
            <CustomButtonContainer onClick={() => addItem(item)}> Add to cart</CustomButtonContainer>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);