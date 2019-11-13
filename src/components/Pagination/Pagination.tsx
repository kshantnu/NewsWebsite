import React, { useState } from 'react';
import './pagination.scss';

interface IProps {
  loadPreviousNews: () => void;
  loadNextNews: () => void;
}

const Pagination = ({
  loadPreviousNews,
  loadNextNews
}: IProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  setTimeout(() => setIsVisible(true), 500);
  return (
    <>
      {isVisible ? (
        <div className="pagination__placeholder">
          <div className="pagination__previoustag" onClick={loadPreviousNews}>
            <span>Previous</span>
          </div>
          <div className="pagination__nexttag" onClick={loadNextNews}>
            <span>Next</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Pagination);
