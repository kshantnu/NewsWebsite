import React, { useState } from 'react';
import './App.scss';
import './components/sidebar/styles/sidebar.scss';
import {
  BurgerMenu,
  Search,
  Social,
  Time,
  Title,
  SearchInput
} from './components/topbar';
import Navbar from './components/navbar/Navbar';

import SideBar from './components/sidebar/SideBarContainer';

import MainNews from './components/content/mainnews/mainnews';
import useFetchData from './customhooks/useFetchData';

const App: React.FC = () => {
  const [isSearchContainerVisible, toogleSearchContainer] = useState<boolean>(
    false
  );
  const [searchNewsText, updateNewsText] = useState<string>('');
  const [burgerMenuState, toggleBurgerMenu] = useState<boolean>(false);

  const { newsData, isLoading } = useFetchData({ category: '' });

  const onSearchClickHandler = () => {
    toogleSearchContainer(!isSearchContainerVisible);
  };

  const onSearchBlurHandler = (e: React.MouseEvent) => {
    if (!isSearchContainerVisible) return;
    toogleSearchContainer(!isSearchContainerVisible);
  };

  const onIconClickHandler = () => {
    toggleBurgerMenu(!burgerMenuState);
  };

  console.log('isloading', isLoading);

  return (
    <div
      id="App"
      className="App"
      tabIndex={0}
      onClick={e => onSearchBlurHandler(e)}
    >
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
                        <Search onSearchClickHandler={onSearchClickHandler} />
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
                <section className="col-lg-8 col-md-8 col-sm-12">
                  <MainNews newsData={newsData} />
                </section>
                <aside className="col-lg-4 col-md-4 col-sm-12">
                  <div>sadas</div>
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
