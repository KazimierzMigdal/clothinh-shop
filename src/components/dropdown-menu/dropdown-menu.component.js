import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import { DropdownMenuContainer, DropdownMenuLink } from './dropdown-menu.styles.js'

import { selectDropdownLinks } from '../../redux/dropdown/dropdown.selectors.js';
import { toggleDropdownHidden } from '../../redux/dropdown/dropdown.actions.js';


const DropdownMenu = ({ dropdownLink, history, dispatch}) =>(
    <DropdownMenuContainer >
        {
            dropdownLink.map(dropdownLink => (
                <DropdownMenuLink 
                isShopCategory={dropdownLink.isShopCategory}
                key={dropdownLink.id}
                onClick={() => {
                    history.push(dropdownLink.linkUrl); 
                    dispatch(toggleDropdownHidden())
                }}
                >
                    {dropdownLink.title.toUpperCase()}
                </DropdownMenuLink>
            ))
        }
    </DropdownMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    dropdownLink: selectDropdownLinks,
});

export default withRouter(connect(mapStateToProps)(DropdownMenu));