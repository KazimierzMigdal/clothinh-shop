import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component.js';
import CartDropdown from '../cart-dropdown/cart-dropdowan.component.js'

import { SelectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils.js'

const Header = ({ currentUser, hidden }) =>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            <CartIcon />
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
        { hidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: SelectCartHidden
});

export default connect(mapStateToProps)(Header); 