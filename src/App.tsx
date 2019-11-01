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

import SideBar from './components/sidebar/SideBarContainer';

const App: React.FC = () => {
  const [isSearchContainerVisible, toogleSearchContainer] = useState<boolean>(
    false
  );
  const [searchNewsText, updateNewsText] = useState<string>('');
  const [burgerMenuState, toggleBurgerMenu] = useState<boolean>(false);

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
      <header
        id="App__wrapper"
        className={burgerMenuState ? `App__wrapper--transition` : ''}
      >
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
    </div>
  );
};

export default App;
