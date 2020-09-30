import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { ShopPageContainer } from './shop.styles.js';

import CollectionPageContainer from '../collection/collection.container.js'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container.js';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions.js'


class ShopPage extends Component {

    componentDidMount(){
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync();
    }


    render() {
        const { match } = this.props;
        return (
            <ShopPageContainer >
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component = {CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </ShopPageContainer>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage)