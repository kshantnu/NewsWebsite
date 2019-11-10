import {
  ADD_NEWS,
  UPDATE_URLCONFIG,
  TOGGLE_BURGERMENU,
  UPDATE_LOADINGFLAG,
  UPDATE_APIERROR,
  UPDATE_MAINNEWS,
  RESET_NEWS,
  UPDATE_COUNTRY,
  UPDATE_PAGENUMBER,
  UPDATE_PAGESIZE
} from './actionTypes';

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_NEWS: {
      const {
        payload: { newsData }
      } = action;
      let mainNews;

      if (newsData && newsData.totalResults > 0) {
        // had to use for loop because need to break out from loop;
        // only pic the news as main news if it has image url.
        const totalArticles = [...state.totalArticles, ...newsData.articles];
        for (let i = 0; i < totalArticles.length; i++) {
          if (totalArticles[i].urlToImage) {
            mainNews = totalArticles[i];
            break;
          }
        }
      }
      console.log('state', state.totalArticles);
      console.log('new', newsData.articles);
      console.log('upfdated', [...state.totalArticles, ...newsData.articles]);

      return {
        ...state,
        ...action.payload,
        mainNews,
        totalArticles: [...state.totalArticles, ...newsData.articles]
      };
    }
    case UPDATE_URLCONFIG: {
      return {
        ...state,
        ...action.payload
      };
    }
    case TOGGLE_BURGERMENU: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UPDATE_LOADINGFLAG: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UPDATE_APIERROR: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UPDATE_MAINNEWS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case RESET_NEWS: {
      return {
        ...state,
        newsData: null,
        mainNews: null,
        totalArticles: [],
        pageNumber: 1
      };
    }
    case UPDATE_COUNTRY: {
      return {
        ...state,
        ...action.payload,
        newsData: null,
        mainNews: null,
        totalArticles: [],
        pageNumber: 1
      };
    }
    case UPDATE_PAGENUMBER: {
      return {
        ...state,
        ...action.payload
      };
    }
    case UPDATE_PAGESIZE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
