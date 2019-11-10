import React from 'react';
import './pagination.scss';

interface IProps {
  loadPreviousNews: () => void;
  loadNextNews: () => void;
}

const Pagination = ({
  loadPreviousNews,
  loadNextNews
}: IProps): JSX.Element => {
  return (
    <div className="pagination__placeholder">
      <div className="pagination__previoustag" onClick={loadPreviousNews}>
        <span>Previous</span>
      </div>
      <div className="pagination__nexttag" onClick={loadNextNews}>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Pagination;
