import { createSelector } from 'reselect';

import { REDUCER_NAME as NAME } from './constants';

export const getNews = createSelector(
  state => state[NAME].news,
  ({ byId, ids }) => ids.map(id => byId[id]),
);

export const getBlogPosts = createSelector(
  state => state[NAME].blogPosts,
  ({ byId, ids }) => ids.map(id => byId[id]),
);
