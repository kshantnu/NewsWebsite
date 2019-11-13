enum newsTypes {
  topHeadlines = 'topHeadlines',
  everything = 'everything',
  sources = 'sources'
}

export const appInitialState = {
  topHeadlinesNews: null,
  everythingSportsNews: null,
  sourcesNews: null,
  mainNews: null,
  totalArticles: [],
  burgerMenuState: false,
  isLoading: false,
  apiError: null,
  pageNumber: 1,
  pageSize: 8,
  countryCode: 'in',
  category: 'General',
  newsTypes: newsTypes.topHeadlines
};
