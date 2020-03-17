import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShoppingPage = ({ match }) => (
  <div className='shopping-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShoppingPage;

/*
class ShoppingPage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        collections: SHOPPING_DATA
      };
    }

    render() {
      const { collections } = this.state;
      return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    }
}
*/