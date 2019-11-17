import { IAppInitialState } from '../interfaces';

export const appInitialState: IAppInitialState = {
  topHeadlinesNews: null,
  trendingNews: null,
  newsSources: null,
  mainNews: null, // news as main pic on dashboard
  burgerMenuState: false,
  isLoading: false,
  apiError: null,
  headlinesPageNumber: 1,
  trendingNewsPageNumber: 1,
  pageSize: 8,
  countryCode: 'in',
  category: 'General'
};
