import React from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ShopingCountContainer, ShopingIconContainer } from './cart-icon.styles.js';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js';
import { selectCartItemCount } from '../../redux/cart/cart.selectors.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <CartIconContainer onClick={toggleCartHidden} >
        <ShopingIconContainer as={ShoppingIcon} />
        <ShopingCountContainer className='item-count'>{itemCount}</ShopingCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);