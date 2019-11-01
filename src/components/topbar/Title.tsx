import React from 'react';

const Title = (): JSX.Element => {
  return (
    <>
      <h1 className="header__logo">
        <a href="">XYZ Newspaper</a>
      </h1>
      <p className="header__tagline">Rejoice with news</p>
    </>
  );
};

export default React.memo(Title);
