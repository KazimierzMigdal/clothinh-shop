import DropdownActionTypes from './dropdown.typs.js'

const INITIAL_STATE = {
    hidden: true,
    dropdownLinks: [
        {
          id: 1,
          title: 'home',
          linkUrl: '/',
          isShopCategory: false
        },
        {
          id: 2,
          title: 'shop',
          linkUrl: '/shop',
          isShopCategory: false
        },
        {
          id: 3,
          title: 'hats',
          linkUrl: '/shop/hats',
          isShopCategory: true
        },
        {
          id: 4,
          title: 'jackets',
          linkUrl: '/shop/jackets',
          isShopCategory: true
        },
        {
          id: 5,
          title: 'sneakers',
          linkUrl: '/shop/sneakers',
          isShopCategory: true
        },
        {
          id: 6,
          title: 'womens',
          linkUrl: '/shop/womens',
          isShopCategory: true
        },
        {
          id: 7,
          title: 'mens',
          linkUrl: '/shop/mens',
          isShopCategory: true
        },
        {
          id: 9,
          title: 'Check out',
          linkUrl: '/checkout',
          isShopCategory: false
        }
    ]
}

const dropdownReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case DropdownActionTypes.TOGGLE_DROPDOWN_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default dropdownReducer;