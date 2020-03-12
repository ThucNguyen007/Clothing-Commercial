import { createSelector } from 'reselect';

const shopSelect = state => state.shop;

export const shopCollections = createSelector(
    shopSelect,
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    shopCollections,
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    shopCollections,
    collections => collections[collectionUrlParam]
  );