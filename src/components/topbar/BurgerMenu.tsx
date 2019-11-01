import React from 'react';

interface IProps {
  onIconClickHandler: () => void;
}

const BurgerMenu = (props: IProps): JSX.Element => {
  return (
    <div className="burgermenu" onClick={props.onIconClickHandler}>
      <span className="burgermenu__icon"></span>
      <span className="burgermenu__text">&nbsp;&nbsp;&nbsp;MORE</span>
    </div>
  );
};

export default React.memo(BurgerMenu);
