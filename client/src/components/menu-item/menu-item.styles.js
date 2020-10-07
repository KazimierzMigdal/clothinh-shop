import styled, { css } from 'styled-components'


const getMenuItemSize = props =>{
    return props.size ? css`min-height:400px;` : css`min-height: 240px;`
}

export const MenuItemContainer = styled.div`
    min-width: 30%;
    ${getMenuItemSize}
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: calc(0.25*25px);
    overflow: hidden;
    cursor: pointer;
    
    @media (max-width:580px) {
      width: 100%;
    }

    @media (max-width:1110px){
      &:nth-last-child(-n+3){
        width: 100%;
      }
    }
`

export const BackgroundImageContainer =  styled.div`
    background-image: url('${props => props.imageUrl}');
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transform: scale(1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    ${MenuItemContainer}:hover & {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    opacity: 0.6;
    position: absolute;
    transition: opacity 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    ${MenuItemContainer}:hover & {
        opacity: 0.9;
        transition: opacity 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`

export const MenuItemTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const MenuItemSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`