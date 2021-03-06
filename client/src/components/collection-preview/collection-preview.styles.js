import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const CollectionPreviewComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    width: 100%;
`

export const CollectionTitleLink = styled(Link)`
    font-size: 28px;
    margin-bottom: calc(0.5*25px);
`

export const PreviewContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: calc(0.25*25px);
    @media (max-width:1110px){
        grid-template-columns: repeat(3, 33%);
        max-height: 350px;
        overflow: hidden;
    }   

    @media (max-width:880px){
        grid-template-columns: repeat(2, 50%);
        max-height: calc(2*350px + 2*0.25*25px);
        overflow: hidden;
    }   

    @media (max-width:580px){
        grid-template-columns: 100%;
    }
`