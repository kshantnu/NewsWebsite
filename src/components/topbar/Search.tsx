import React, { useState } from 'react';

interface IProps {
  onSearchClickHandler: () => void;
}

const Search = (props: IProps): JSX.Element => {
  return (
    <div className="search" onMouseDown={props.onSearchClickHandler}>
      <div>
        <i className="fa fa-search"></i>
      </div>
      <div>
        <span>SEARCH</span>
      </div>
    </div>
  );
};

export default React.memo(Search);
