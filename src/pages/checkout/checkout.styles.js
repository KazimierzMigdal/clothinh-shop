import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
    max-width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
`

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const CheckoutHeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;
    text-align:center;

    &:first-child {
        text-align: start;
    }

    &:last-child {
        text-align: end;
    }
`

export const PaymentContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    width: 100%;
`

export const Payment = styled.div`
    margin: auto 0;
`

export const Price = styled.span`
    font-size: 36px;
`

export const Worning = styled.div`
    text-align: center;
    color: red;
    font-weight: bold;
    font-size: 24px;
    margin-top: 40px; 
`