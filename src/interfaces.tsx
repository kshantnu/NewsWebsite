import {
  ADD_TOPHEADLINES,
  ADD_TRENDING_NEWS,
  ADD_NEWS_SOURCES,
  UPDATE_URLCONFIG,
  TOGGLE_BURGERMENU,
  //UPDATE_LOADINGFLAG,
  //UPDATE_APIERROR,
  UPDATE_MAINNEWS,
  RESET_NEWS,
  UPDATE_COUNTRY,
  UPDATE_HEADLINES_PAGENUMBER,
  UPDATE_TRENDINGNEWS_PAGENUMBER,
  UPDATE_PAGESIZE,
  UPDATE_CATEGORY
} from './store/actionTypes';

export interface IAppInitialState {
  topHeadlinesNews: IResponse | null;
  trendingNews: IResponse | null;
  newsSources: IResponse | null;
  mainNews: IArticleResponse | null | undefined; // news as main pic on dashboard
  burgerMenuState: boolean;
  isLoading: boolean;
  apiError: Error | null;
  headlinesPageNumber: number;
  trendingNewsPageNumber: number;
  pageSize: number;
  countryCode: string;
  category: string;
}

export type AppStateContext = {
  state: IAppInitialState;
  dispatch: React.Dispatch<IAction & IHeadlinesNewsAction>;
};

export interface IAction {
  type: string;
}

export interface IHeadlinesNewsAction extends IAction {
  payload: { topHeadlinesNews: IResponse | null };
}

export interface ITrendingNewsAction extends IAction {
  payload: { trendingNews: IResponse };
}

export interface INewsSourcesAction extends IAction {
  payload: { newsSources: IResponse };
}

export interface IBurgerMenuAction extends IAction {
  payload: { burgerMenuState: boolean };
}

export interface IHeadlinesPageNumberAction extends IAction {
  payload: { headlinesPageNumber: number };
}
export interface ITrendingPageNumberAction extends IAction {
  payload: { trendingNewsPageNumber: number };
}
export interface IPageSizeAction extends IAction {
  payload: { pageSize: number };
}
export interface IUpdateCountryAction extends IAction {
  payload: { countryCode: string };
}
export interface IUpdateCategoryAction extends IAction {
  payload: { category: string };
}

export function isHeadlinesNewsAction(
  action: IAction
): action is IHeadlinesNewsAction {
  return action.type === ADD_TOPHEADLINES;
}

export function isTrendingNewsAction(
  action: IAction
): action is ITrendingNewsAction {
  return action.type === ADD_TRENDING_NEWS;
}

export function isNewsSourcesAction(
  action: IAction
): action is INewsSourcesAction {
  return action.type === ADD_NEWS_SOURCES;
}

export function isBurgerMenuAction(
  action: IAction
): action is IBurgerMenuAction {
  return action.type === TOGGLE_BURGERMENU;
}

export function isHeadlinesPageNumberAction(
  action: IAction
): action is IHeadlinesPageNumberAction {
  return action.type === UPDATE_HEADLINES_PAGENUMBER;
}
export function isTrendingPageNumberAction(
  action: IAction
): action is ITrendingPageNumberAction {
  return action.type === UPDATE_TRENDINGNEWS_PAGENUMBER;
}
export function isPageSizeAction(action: IAction): action is IPageSizeAction {
  return action.type === UPDATE_PAGESIZE;
}
export function isUpdateCountryAction(
  action: IAction
): action is IUpdateCountryAction {
  return action.type === UPDATE_COUNTRY;
}
export function isUpdateCategoryAction(
  action: IAction
): action is IUpdateCategoryAction {
  return action.type === UPDATE_CATEGORY;
}
export function isResetNewsAction(action: IAction): action is IAction {
  return action.type === RESET_NEWS;
}

export interface IReducer {
  type: string;
  payload: IAppInitialState;
}

export interface INewsContextProvider {
  loadPreviousHeadlines: () => void;
  loadNextHeadlines: () => void;
  pageSize: number;
  headlinesPageNumber: number;
  trendingNewsPageNumber: number;
}

export interface IConfig {
  q?: string;
  qInTitle?: string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: number;
  page?: number;
  apiKey?: string;
  country?: string;
  category?: string;
  url?: string;
}

export interface IResponse {
  status: string;
  totalResults: number;
  articles: Array<IArticleResponse>;
  sources?: Array<IArticleResponse>;
}

export interface ISource {
  id: number;
  name: string;
}

export interface IArticleResponse {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
