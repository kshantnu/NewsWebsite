import React, { useRef, useLayoutEffect, useState } from 'react';
import './styles.scss';

interface IProps {
  categoryChangeHandler: (
    event: React.MouseEvent<HTMLDivElement>,
    category: string
  ) => void;
  category: string;
}

enum Categories {
  General = 'General',
  Business = 'Business',
  Entertainment = 'Entertainment',
  Health = 'Health',
  Science = 'Science',
  Sports = 'Sports',
  Technology = 'Technology'
}

const Navbar = ({ categoryChangeHandler, category }: IProps): JSX.Element => {
  // const navContainerRef = useRef<HTMLDivElement>(null);
  // const [applyStickyNavCss, setApplyStickyNavCss] = useState(false);

  // useLayoutEffect(() => {
  //   const handleNavScroll = () => {
  //     const elementTopPosition = navContainerRef.current!.getBoundingClientRect()
  //       .top;
  //     console.log('dffdfddfdf', navContainerRef.current!.offsetTop);
  //     if (elementTopPosition === 0) {
  //       setApplyStickyNavCss(false);
  //     } else if (elementTopPosition <= 5) {
  //       setApplyStickyNavCss(true);
  //     } else {
  //       setApplyStickyNavCss(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleNavScroll);
  //   return () => window.removeEventListener('scroll', handleNavScroll);
  // }, []);

  return (
    <div className="navbar__container">
      <div
        className={`navbar__menu ${
          category === Categories.General ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.General)}
      >
        <span>{Categories.General}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Business ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Business)}
      >
        <span>{Categories.Business}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Entertainment ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Entertainment)}
      >
        <span>{Categories.Entertainment}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Health ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Health)}
      >
        <span>{Categories.Health}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Science ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Science)}
      >
        <span>{Categories.Science}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Sports ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Sports)}
      >
        <span>{Categories.Sports}</span>
      </div>
      <div
        className={`navbar__menu ${
          category === Categories.Technology ? 'active' : 'inactive'
        }`}
        onClick={e => categoryChangeHandler(e, Categories.Technology)}
      >
        <span>{Categories.Technology}</span>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
