import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LargeLogoContainer, SmallLogoContainer,  OptionsContainer, OptionContainer, } from './header.styles.js'

import CartDropdown from '../cart-dropdown/cart-dropdowan.component.js'
import CartIcon from '../cart-icon/cart-icon.component.js';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component.js'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { SelectCartHidden } from '../../redux/cart/cart.selectors.js';
import { toggleDropdownHidden } from '../../redux/dropdown/dropdown.actions.js';
import { selectDropdownHidden } from '../../redux/dropdown/dropdown.selectors.js'
import { signOutStart } from '../../redux/user/user.action.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';


const Header = ({ currentUser, cartHidden, dropdownHidden, toggleDropdownHidden, signOutStart}) =>(
    <HeaderContainer>
        <LargeLogoContainer to='/' >
            <Logo />
        </LargeLogoContainer>
        <SmallLogoContainer onClick={toggleDropdownHidden} >
            <Logo />
        </SmallLogoContainer>
        <OptionsContainer >
            <OptionContainer to='/shop' >
                SHOP
            </OptionContainer>
            <OptionContainer to='/shop' >
                CONTACT
            </OptionContainer>
            <CartIcon />
            {
                currentUser ?
                (
                    <OptionContainer as='div' onClick={signOutStart} >
                        SIGN OUT
                    </OptionContainer>
                ):(
                    <OptionContainer to='/signin' >
                        SIGN IN
                    </OptionContainer>
                )
            }
        </OptionsContainer>
        { cartHidden ? null : <CartDropdown /> }
        { dropdownHidden ? null : <DropdownMenu /> }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: SelectCartHidden,
    dropdownHidden: selectDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleDropdownHidden: () => dispatch(toggleDropdownHidden()),
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 