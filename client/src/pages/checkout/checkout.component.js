import React from 'react'
import { connect } from 'react-redux'
import{ createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component.js'
import StripeButton from '../../components/stripe-button/stripe-button.component.js'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js'

import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlock, PaymentContainer, Payment, Price, Worning } from './checkout.styles.js';

const CheckoutPage = ({ cartItems, total}) =>(
    <CheckoutPageContainer >
        <CheckoutHeaderContainer >
            <CheckoutHeaderBlock >
                Product
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock >
            Product
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock >
            Product
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock >
            Product
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock >
            Product
            </CheckoutHeaderBlock>
        </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem=> (
                    <CheckoutItem cartItem={cartItem} key={cartItem.id} />
                ))
            }
        <PaymentContainer >
            <Payment>
                <StripeButton price={total} />
            </Payment>
            <Price >TOTAL: {total}$</Price>
        </PaymentContainer>
        <Worning >
            *Please use the fallowing test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </Worning>       
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);