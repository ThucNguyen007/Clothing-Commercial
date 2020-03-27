import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectCollectionsForPreview } from '../../redux/shopping/selectors.shop';

import CollectionPreview from '../../components/collections-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
  
export default connect(mapStateToProps)(CollectionsOverview);
