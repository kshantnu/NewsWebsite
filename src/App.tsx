import React, { useReducer } from 'react';
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

import SideBar from './components/sidebar/SideBarContainer';

import MainNews from './components/content/maincontent/MainContent';
import NewsItems from './components/content/sidecontent/NewsItems';

import useFetchData from './customhooks/useFetchData';

enum newsCategory {
  topHeadlines = 'topHeadlines',
  everything = 'everything',
  sources = 'sources'
}

enum APIEndpoints {
  topHeadlines = 'https://newsapi.org/v2/top-headlines',
  everything = 'https://newsapi.org/v2/everything',
  sources = 'https://newsapi.org/v2/sources'
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState);
  const {
    burgerMenuState,
    newsData,
    isLoading,
    apiError,
    mainNews,
    totalArticles,
    pageNumber,
    pageSize,
    countryCode
  } = state;

  // TODO: use error flag to show error view

  useFetchData(
    `${APIEndpoints.topHeadlines}?country=${countryCode}&pagesize=${pageSize}&page=${pageNumber}`,
    dispatch,
    state
  );

  const onIconClickHandler = () => {
    dispatch({
      type: 'TOGGLE_BURGERMENU',
      payload: { burgerMenuState: !burgerMenuState }
    });
  };

  const OnCountryChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedCountry = e.target.value;
    dispatch({
      type: 'UPDATE_COUNTRY',
      payload: { countryCode: selectedCountry }
    });
  };

  const loadPreviousNews = () => {
    dispatch({
      type: 'UPDATE_PAGENUMBER',
      payload: {
        pageNumber: pageNumber - 1
      }
    });
  };

  const loadNextNews = () => {
    dispatch({
      type: 'UPDATE_PAGESIZE',
      payload: {
        pageNumber: pageNumber + 1
      }
    });
  };

  return (
    <div id="App" className="App">
      <SideBar
        pageWrapId={'App__wrapper'}
        outerContainerId={'App'}
        isMenuOpen={burgerMenuState}
      />
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
                <Navbar></Navbar>
              </div>
            </div>
          </div>
        </nav>

        {!isLoading && !apiError ? (
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <section className="col-lg-7 col-md-7 col-sm-12">
                  <MainNews mainNews={mainNews} />
                </section>
                <aside className="col-lg-5 col-md-5 col-sm-12 news__content__sidebar">
                  <NewsItems
                    loadPreviousNews={loadPreviousNews}
                    loadNextNews={loadNextNews}
                    pageSize={pageSize}
                    pageNumber={pageNumber}
                    totalArticles={totalArticles}
                  />
                </aside>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
