import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) =>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51HUSBNH0b31LsSrMCIkiHm3fnKZd2MDeB8HSMxoz97zvIFxQMcem6Zr1EQYPxxkjxql87O07Amx5NNPergrzar7l00jKAjh3AP'

    const onToken = token =>{
        console.log(token);
        alert('Payment Successfull')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='Cloathing Shop'
            billingAddress
            shippingAdrress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total price is ${price}$`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;