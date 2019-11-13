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
    ></Menu>
  );
};

export default SideBar;
