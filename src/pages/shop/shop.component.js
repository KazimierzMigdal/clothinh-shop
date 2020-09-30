import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { ShopPageContainer } from './shop.styles.js';

import CollectionPage from '../collection/collection.component.js'
import CollectionOverview from '../../components/collection-overview/collection-overview.component.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component.js'

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions.js'
import { isCollectionsLoaded } from '../../redux/shop/shop.selectors.js'


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {

    componentDidMount(){
        const { fetchCollectionStartAsync } = this.props
        fetchCollectionStartAsync();
    }


    render() {
        const { match, isCollectionsLoaded } = this.props;
        return (
            <ShopPageContainer >
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => (
                        <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                    )} 
                />
            </ShopPageContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: isCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)