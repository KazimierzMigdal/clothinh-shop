import React from 'react';
import { connect } from 'react-redux'

import { ChekoutItemArrow, 
    CheckoutImage, 
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    ChekoutItemNameAndPrice,
    ChekoutItemRemove,
    ChekoutItemQuantity } from './checkout-item.styles.js';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions.js'


const CheckoutItem = ({ cartItem, clearItem, addItem,  removeItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <CheckoutItemContainer >
            <CheckoutItemImageContainer >
                <CheckoutImage  src={imageUrl} alt='item' />
            </CheckoutItemImageContainer>
            <ChekoutItemNameAndPrice >{name}</ChekoutItemNameAndPrice>
            <ChekoutItemQuantity >
                <ChekoutItemArrow onClick={() => removeItem(cartItem)} >&#10094;</ChekoutItemArrow>
                    {quantity}
                <ChekoutItemArrow onClick={() => addItem(cartItem)} >&#10095;</ChekoutItemArrow>
            </ChekoutItemQuantity>
            <ChekoutItemNameAndPrice >{price}$</ChekoutItemNameAndPrice>
            <ChekoutItemRemove onClick={() => clearItem(cartItem)}>&#10005;</ChekoutItemRemove>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem); 