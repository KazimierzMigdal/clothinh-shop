import styled from 'styled-components'

export const CollectionItemFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const CollectionItemContainer = styled.div`
    width: 23vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: calc(0.5*25px);
    
    @media (max-width:1110px){
        width: 30vw;
    }

    @media (max-width:880px){
      width: 45vw;
    }

    @media (max-width:580px){
      width: 100%;
    }
`

export const CollectionItemImageContainer = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url('${props => props.imageUrl}');
    ${CollectionItemContainer}:hover & {
        opacity: 95;
    }
`


export const CollectionItemName = styled.span`
    width: 80%;
    ${CollectionItemContainer}:hover & {
        font-weight: bolder;
    }
`

export const CollectionItemPrice = styled.span`
    width: 10%;
    ${CollectionItemContainer}:hover & {
        font-weight: bolder;
    }
`

export const CustomButtonContainer = styled.button`
    text-transform: uppercase;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    display: none;
    background-color: white;
    color: black;
    font-family: 'Open Sans Condensed';
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 18px;
    font-weight: bolder;
    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
    ${CollectionItemContainer}:hover & {
        opacity: 0.85;
        display: block;
    }

`