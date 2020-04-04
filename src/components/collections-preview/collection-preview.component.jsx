import React from 'react';

import CollectionItems from '../collections-items/collection-items.component';

import { withRouter } from 'react-router-dom';
 
import './collection-preview.styles.scss';
  
  const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>
    <h1 className='title'> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItems key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
  
  export default withRouter(CollectionPreview);

/*
<div className='preview'>
{items.filter((item, idx) => idx < 4)
      .map(item => (
          <div key={item.id}>{item.name}</div>
      ))}
</div>*/