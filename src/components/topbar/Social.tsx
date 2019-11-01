import React from 'react';

const Social = (): JSX.Element => {
  return (
    <div className="socialicons">
      <ul>
        <li>
          <a href="">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Social);
