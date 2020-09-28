import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartDropdownContainer, CartDropdownEmptyMessage, CardDropdownItemContainer } from './cart-dropdown.styles.js';

import CustomButton from '../custom-button/custom-button.component.js'
import CartItem from '../cart-item/cart-item.component.js';

import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer >
        <CardDropdownItemContainer >
            {   
                cartItems.length ?
                (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
                ) : (
                    <CartDropdownEmptyMessage className='empty-message'>Your cart is empty</CartDropdownEmptyMessage>
                )
            }
        </CardDropdownItemContainer>
        {
            cartItems.length ? 
            (
                <CustomButton onClick={() => {
                    history.push('/checkout'); 
                    dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
                </CustomButton>
            ): null
        }
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));