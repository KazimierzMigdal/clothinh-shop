import React from 'react'

import { CartItemContainer, CartItemDetails, CartItemImageContainer, CartItemPrice } from './cart-item.styles.js' 

const CartItem = ({ item: {imageUrl, price, name, quantity}}) =>(
    <CartItemContainer >
        <CartItemImageContainer src={imageUrl} alt='item' />
        <CartItemDetails >
            <CartItemPrice >{name}</CartItemPrice>
            <span >{quantity} x {price}$</span>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem;