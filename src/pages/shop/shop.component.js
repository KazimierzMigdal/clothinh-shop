import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { ShopPageContainer } from './shop.styles.js';

import CollectionPage from '../collection/collection.component.js'
import CollectionOverview from '../../components/collection-overview/collection-overview.component.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component.js'

import { updateCollections } from '../../redux/shop/shop.actions'

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils.js';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot  = null;

    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({loading: false})
        })
    }


    render() {
        const { match } = this.props;
        const { loading } = this.state
        return (
            <ShopPageContainer >
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </ShopPageContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage)