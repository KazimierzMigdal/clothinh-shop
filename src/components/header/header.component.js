import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component.js';
import CartDropdown from '../cart-dropdown/cart-dropdowan.component.js'
import DropdownMenu from '../dropdown-menu/dropdown-menu.component.js'

import { SelectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { selectDropdownHidden } from '../../redux/dropdown/dropdown.selectors.js'
import { createStructuredSelector } from 'reselect';

import { toggleDropdownHidden } from '../../redux/dropdown/dropdown.actions.js';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils.js'

const Header = ({ currentUser, cartHidden, dropdownHidden, toggleDropdownHidden}) =>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='small-screen-logo-container' onClick={toggleDropdownHidden}>
            <Logo className='logo' />
        </div>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            <CartIcon className='shoping-bag-icon'/>
            {
                currentUser ?
                (<div className='option' onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>)
                :
                (<Link to='/signin' className='option'>
                    SIGN IN
                </Link>)
            }
        </div>
        { cartHidden ? null : <CartDropdown /> }
        { dropdownHidden ? null : <DropdownMenu /> }

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: SelectCartHidden,
    dropdownHidden: selectDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleDropdownHidden: () =>dispatch(toggleDropdownHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 