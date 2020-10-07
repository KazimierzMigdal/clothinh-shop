import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, MenuItemTitle, MenuItemSubtitle } from './menu-item.styles.js' 

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => {
    return (
        <MenuItemContainer 
            size = {size ? true : false}  
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer imageUrl={imageUrl} />
            <ContentContainer >
                <MenuItemTitle >{title.toUpperCase()}</MenuItemTitle>
                <MenuItemSubtitle >SHOP NOW</MenuItemSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);