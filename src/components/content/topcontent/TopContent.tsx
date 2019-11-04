import React from 'react';
import './topcontent.scss';

const TopContent = () => {
  return (
    <div className="news__favourites">
      <div className="news__favouriteitems">
        <p>Favourites section</p>
        <div className="abc">General</div>
        <div className="abc">Business</div>
        <div className="abc">Entertainment</div>
        <div className="abc">Health</div>
        <div className="abc">Science</div>
        <div className="abc">Sports</div>
        <div className="abc">Technology</div>
      </div>
      <div>
        <input type="button" />
      </div>
    </div>
  );
};

export default TopContent;
