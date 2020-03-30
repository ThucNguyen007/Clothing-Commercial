import { createSelector } from 'reselect';

const selectShop = state => state.shopping;

export const selectCollections = createSelector(
  [selectShop],
  shopping => shopping.collections
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shopping => !!shopping.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shopping => shopping.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
);

/*
export const selectCollection = collectionUrlParam =>  createSelector(
  selectCollections,
  collections => collections.find(
    collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
  )
); */
