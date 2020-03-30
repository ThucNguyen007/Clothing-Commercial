import React from 'react';

import CollectionItems from '../collections-items/collection-items.component';

import { withRouter } from 'react-router-dom';
 
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';
  
  const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, sort) => sort < 4)
          .map(item => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
  
  export default withRouter(CollectionPreview);

/*
<div className='preview'>
{items.filter((item, idx) => idx < 4)
      .map(item => (
          <div key={item.id}>{item.name}</div>
      ))}
</div>*/