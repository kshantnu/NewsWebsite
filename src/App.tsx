import React, { useState } from 'react';
import './App.scss';
import './components/sidebar/styles/sidebar.scss';
import {
  BurgerMenu,
  SelectCountry,
  Social,
  Time,
  Title,
  SearchInput
} from './components/topbar';
import Navbar from './components/navbar/Navbar';

import SideBar from './components/sidebar/SideBarContainer';

import MainNews from './components/content/maincontent/MainContent';
import NewsItems from './components/content/sidecontent/NewsItems';
import TopContent from './components/content/topcontent/TopContent';
import useFetchData from './customhooks/useFetchData';
import { mock } from './customhooks/mockJson';
import { IResponse } from './customhooks/model';

const App: React.FC = () => {
  const [isSearchContainerVisible, toogleSearchContainer] = useState<boolean>(
    false
  );
  const [searchNewsText, updateNewsText] = useState<string>('');
  const [burgerMenuState, toggleBurgerMenu] = useState<boolean>(false);

  const { newsData, isLoading } = useFetchData({ category: '' });
  // const newsData = {
  //   status: 'ok',
  //   totalResults: 38,
  //   articles: [
  //     {
  //       source: {
  //         id: 1,
  //         name: 'Ndtv.com'
  //       },
  //       author: 'ghgg',
  //       title:
  //         'Delhi Trapped In Smog, Flights Delayed; Noida Schools Shut Till Tuesday - NDTV News',
  //       description:
  //         'The air pollution levels in Delhi made a huge jump this morning, going deeper into the "emergency" zone. From yesterday\'s 407, the Air Quality Index or AQI rose to 625, reducing visibility significantly and hampering air and road traffic in the city. The situ…',
  //       url:
  //         'https://www.ndtv.com/delhi-news/delhi-pollution-ncr-still-trapped-in-toxic-smog-odd-even-rule-from-tomorrow-2126498',
  //       urlToImage:
  //         'https://c.ndtvimg.com/2019-11/aeh7pu18_delhi-pollution-_625x300_03_November_19.jpg',
  //       publishedAt: '2019-11-03T07:11:00Z',
  //       content:
  //         'Delhi is expected to begin its odd-even road rationing scheme from tomorrow.New Delhi: The air pollution levels in Delhi made a huge jump this morning, going deeper into the "emergency" zone. From yesterday\'s 407, the Air Quality Index or AQI rose to 625, red… [+3343 chars]'
  //     }
  //   ]
  // };
  //const isLoading = false;

  const onIconClickHandler = () => {
    toggleBurgerMenu(!burgerMenuState);
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
                    {!isSearchContainerVisible ? (
                      <>
                        <Social />
                        <SelectCountry />
                      </>
                    ) : (
                      <div className="search__inputContainer">
                        <SearchInput
                          text={searchNewsText}
                          onChangeHandler={(textInput: string) =>
                            updateNewsText(textInput)
                          }
                        />
                      </div>
                    )}
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

        {!isLoading ? (
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <section className="col-lg-7 col-md-7 col-sm-12">
                  <MainNews newsData={newsData} />
                </section>
                <aside className="col-lg-5 col-md-5 col-sm-12 news__content__sidebar">
                  <NewsItems newsData={newsData} />
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
