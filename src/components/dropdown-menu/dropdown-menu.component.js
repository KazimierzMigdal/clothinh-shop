import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDropdownLinks } from '../../redux/dropdown/dropdown.selectors.js';
import { toggleDropdownHidden } from '../../redux/dropdown/dropdown.actions.js';
import { withRouter } from 'react-router-dom'

import './dropdown-menu.styles.scss'

const DropdownMenu = ({ dropdownLink, history, dispatch}) =>(
    <div className='dropdown-menu'>
        {
            dropdownLink.map(dropdownLink => (
                <span 
                className={`dropdown-link ${dropdownLink.isShopCategory ? 'shop-link': ''}`}
                key={dropdownLink.id}
                onClick={() => {
                    history.push(`${dropdownLink.linkUrl}`); 
                    dispatch(toggleDropdownHidden())
                }}
                >
                    {dropdownLink.title.toUpperCase()}
                </span>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    dropdownLink: selectDropdownLinks,
});

export default withRouter(connect(mapStateToProps)(DropdownMenu));