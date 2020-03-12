import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShoppingPage = ({ collections }) => (
  <div className='shopping-page'>
    <CollectionsOverview />
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