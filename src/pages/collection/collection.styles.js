import styled from 'styled-components'


export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CollectionTitle = styled.h2`
    font-size: 28px;
    margin-bottom: calc(0.5*25px);
`

export const CollectionItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: calc(0.25*25px);
    
    @media (max-width:1110px){
        grid-template-columns: 1fr 1fr 1fr;
    }   

    @media (max-width:880px){
        grid-template-columns: 1fr 1fr;
    }   

    @media (max-width:580px){
        grid-template-columns: 1fr;
    }
`
