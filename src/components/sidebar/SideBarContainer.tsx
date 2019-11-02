import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { Advertisment, MenuItems, TrendingArticle } from './sections';

interface IProps {
  pageWrapId: string;
  outerContainerId: string;
  isMenuOpen: boolean;
}

const SideBar = (props: IProps) => {
  return (
    // Pass on our props
    <Menu
      isOpen={props.isMenuOpen}
      noOverlay
      customBurgerIcon={false}
      customCrossIcon={false}
      {...props}
    >
      {/* <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};

export default SideBar;
