import styled, { css } from 'styled-components'

const defaultLinkPadding = css`
    padding: 5px 5px;
`

const shopLinkPadding = css`
    padding: 5px 50px;
`

const getLinkPadding = props => {
    return props.isShopCategory ? shopLinkPadding : defaultLinkPadding
}

export const DropdownMenuContainer = styled.div`
     position: absolute;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 5px 25px;
    border-bottom: 1px solid black;
    background-color: white;
    top: 70px;
    left: 0px;
    z-index: 4;
`

export const DropdownMenuLink = styled.span`
    font-size: 20px;
    text-decoration: none;
    color: black;
    margin: 0px 0px 10px -5px;
    ${getLinkPadding}  
    cursor: pointer;
    &:hover{
        font-weight: bold;
        background-color: #f7f7f7;
    }
`
