import React from 'react';

import SHOPPING_DATA from './shopping.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

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
            {collections.map(({ id, ...otherCollectionsProps }) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />
            ))}
          </div>
        );
    }
}

export default ShoppingPage;