import {
  IAction,
  IAppInitialState,
  IHeadlinesNewsAction,
  isTrendingNewsAction,
  isNewsSourcesAction,
  isBurgerMenuAction,
  isResetNewsAction,
  isUpdateCountryAction,
  isUpdateCategoryAction,
  isHeadlinesNewsAction,
  IBurgerMenuAction,
  IUpdateCountryAction,
  IUpdateCategoryAction,
  IHeadlinesPageNumberAction,
  ITrendingPageNumberAction
} from '../interfaces';

const AppReducer = (
  state: IAppInitialState,
  action:
    | IAction
    | IBurgerMenuAction
    | IUpdateCountryAction
    | IUpdateCategoryAction
    | IHeadlinesPageNumberAction
    | ITrendingPageNumberAction
    | IHeadlinesNewsAction
): IAppInitialState => {
  const resetNewsDefaultParams = {
    topHeadlinesNews: null,
    trendingNews: null,
    newsSources: null,
    mainNews: null,
    headlinesPageNumber: 1,
    trendingNewsPageNumber: 1
  };
  if (isHeadlinesNewsAction(action)) {
    const {
      payload: { topHeadlinesNews }
    } = action;
    let mainNews;
    if (topHeadlinesNews && topHeadlinesNews.totalResults > 0) {
      // had to use for loop because need to break out from loop;
      // only pick the news as main news if it has image url.
      if (state.topHeadlinesNews) {
        topHeadlinesNews.articles = [
          ...state.topHeadlinesNews!.articles,
          ...topHeadlinesNews.articles
        ];
      }

      for (let i = 0; i < topHeadlinesNews.articles.length; i++) {
        if (topHeadlinesNews.articles[i].urlToImage) {
          mainNews = topHeadlinesNews.articles[i];
          break;
        }
      }
    }
    return {
      ...state,
      ...action.payload,
      mainNews
    };
  }
  if (isTrendingNewsAction(action)) {
    return {
      ...state,
      ...action.payload
    };
  }
  if (isNewsSourcesAction(action)) {
    return {
      ...state,
      ...action.payload
    };
  }
  if (isBurgerMenuAction(action)) {
    return {
      ...state,
      ...action.payload
    };
  }
  if (isUpdateCountryAction(action)) {
    return {
      ...state,
      ...action.payload,
      ...resetNewsDefaultParams
    };
  }
  if (isUpdateCategoryAction(action)) {
    return {
      ...state,
      ...action.payload,
      ...resetNewsDefaultParams
    };
  }
  if (isResetNewsAction(action)) {
    return {
      ...state,
      ...resetNewsDefaultParams
    };
  }

  return state;
};

export default AppReducer;
