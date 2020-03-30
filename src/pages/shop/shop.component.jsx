import React from 'react';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/actions.shop';

class ShoppingPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect (
  null, 
  mapDispatchToProps
)(ShoppingPage);

/*
componentDidMount() {
  const { updateCollections } = this.props;
  const collectionRef = firestore.collection('collections');

  collectionRef.get().then(snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    updateCollections(collectionsMap);
    this.setState({ loading: false });
  });
}*/
/*
const ShoppingPage = ({ match }) => (
  <div className='shopping-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);*/
