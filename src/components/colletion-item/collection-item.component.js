import React from 'react'

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions.js';

import CostomButton from '../custom-button/custom-button.component.js'

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) =>{
    const {imageUrl, name, price} = item
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <CostomButton inverted onClick={() => addItem(item)}> Add to cart</CostomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);