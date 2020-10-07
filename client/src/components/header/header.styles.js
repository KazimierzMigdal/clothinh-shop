import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

const MainLogoStyles = css`
    height: 100%;
    width: 70px;
    margin-top: 25px;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(0.25*25px);
    padding:  0 25px;
`

export const LargeLogoContainer = styled(Link)`
    ${MainLogoStyles}
    @media (max-width: 580px){
        display:none
    }
`

export const SmallLogoContainer = styled.div`
    ${MainLogoStyles}
    @media (min-width: 580px){
        display: none
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top:  calc(0.5*25px);
`

export const OptionContainer = styled(Link)`
    padding: calc(0.5*25px);
    cursor: pointer;
    &:last-child(){
        padding-right: 0;
    }
    @media (max-width: 580px) {
        &:nth-child(-n+2){
        display: none;
        }
    }
`