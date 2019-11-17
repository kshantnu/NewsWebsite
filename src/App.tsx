import React, { useReducer, useCallback, useRef } from 'react';
import './App.scss';
import './components/sidebar/styles/sidebar.scss';
import AppReducer from '../src/store/appReducer';
import { appInitialState } from '../src/store/initialState';

import {
  BurgerMenu,
  SelectCountry,
  Social,
  Time,
  Title
} from './components/topbar';

import Navbar from './components/navbar/Navbar';

// import SideBar from './components/sidebar/SideBarContainer';

import MainNews from './components/content/maincontent/MainContent';
import { NewsContext, StateContext } from '../src/context/Contexts';
import HeadlinesNews from './components/content/sidecontent/HeadlinesNews';

// enum APIEndpoints {
//   topHeadlines = 'https://newsapi.org/v2/top-headlines',
//   everything = 'https://newsapi.org/v2/everything',
//   sources = 'https://newsapi.org/v2/sources'
// }

enum newsTypes {
  topHeadlines = 'topHeadlines',
  everything = 'everything',
  sources = 'sources'
}

const SideBar = React.lazy(() =>
  import('./components/sidebar/SideBarContainer')
);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState);

  const {
    burgerMenuState,
    isLoading,
    apiError,
    mainNews,
    headlinesPageNumber,
    trendingNewsPageNumber,
    pageSize,
    countryCode,
    category
  } = state;

  // TODO: use error flag to show error view

  const onIconClickHandler = useCallback(() => {
    dispatch({
      type: 'TOGGLE_BURGERMENU',
      payload: { burgerMenuState: !burgerMenuState }
    });
  }, [burgerMenuState]);

  const OnCountryChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedCountry = e.target.value;
    dispatch({
      type: 'UPDATE_COUNTRY',
      payload: { countryCode: selectedCountry }
    });
  };

  const categoryChangeHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, category: string) => {
      dispatch({
        type: 'UPDATE_CATEGORY',
        payload: {
          category
        }
      });
    },
    []
  );

  const loadPreviousHeadlines = () => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: {
        headlinesPageNumber: headlinesPageNumber - 1
      }
    });
  };

  const loadNextHeadlines = () => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: {
        headlinesPageNumber: headlinesPageNumber + 1
      }
    });
  };

  return (
    <div id="App" className="App">
      <React.Suspense fallback={<></>}>
        <SideBar
          pageWrapId={'App__wrapper'}
          outerContainerId={'App'}
          isMenuOpen={burgerMenuState}
        />
      </React.Suspense>

      <div
        id="App__wrapper"
        className={burgerMenuState ? `App__wrapper--transition` : ''}
      >
        <header>
          <div className="container-fluid">
            <div className="container">
              <div className="header__barcontainer">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 header__topbar">
                    <BurgerMenu onIconClickHandler={onIconClickHandler} />
                    <Time />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 header__bottombar">
                    <>
                      <Social />
                      <SelectCountry
                        onCountryChangeHandler={OnCountryChangeHandler}
                        value={countryCode}
                      />
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 header__title">
                  <Title />
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <Navbar
                  categoryChangeHandler={categoryChangeHandler}
                  category={category}
                ></Navbar>
              </div>
            </div>
          </div>
        </nav>

        {!isLoading && !apiError ? (
          <StateContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <section className="col-lg-7 col-md-7 col-sm-12">
                    <MainNews />
                  </section>
                  <aside className="col-lg-5 col-md-5 col-sm-12 news__content__sidebar">
                    {/* <NewsContext.Provider
                      value={{
                        loadPreviousHeadlines,
                        loadNextHeadlines,
                        pageSize,
                        headlinesPageNumber,
                        trendingNewsPageNumber
                      }}
                    >
                      <HeadlinesNews heading="Top Headlines" />
                      <br />
                      <br />
                      <NewsItems
                    loadPreviousTrendingNews={loadPreviousTrendingNews}
                    loadNextTrendingNews={loadNextTrendingNews}
                    pageSize={pageSize}
                    pageNumber={pageNumber}
                    topHeadLinesArticles={topHeadLinesArticles}
                    heading={'Trending'}
                  />
                    </NewsContext.Provider> */}
                  </aside>
                </div>
              </div>
            </div>
          </StateContext.Provider>
        ) : null}
      </div>
    </div>
  );
};

export default App;
