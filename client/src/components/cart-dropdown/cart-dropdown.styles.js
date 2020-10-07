import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 220px;
    max-height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 70px;
    right: 32px;
    z-index: 5;
`

export const CartDropdownEmptyMessage = styled.span`
    font-size: 18px;
    margin: auto;
`

export const CardDropdownItemContainer = styled.div`
    min-height: 50px;
    max-height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`
