import React from 'react';
import NewsItem from './NewsItem';
// import Pagination from '../../Pagination/Pagination';
import * as interfaces from '../../../customhooks/model';

const Pagination = React.lazy(() => import('../../Pagination/Pagination'));

interface IProps {
  totalArticles: Array<interfaces.IArticleResponse>;
  pageSize: number;
  pageNumber: number;
  loadPreviousNews: () => void;
  loadNextNews: () => void;
}

const NewsItems = (props: IProps): JSX.Element => {
  const {
    totalArticles,
    loadPreviousNews,
    loadNextNews,
    pageNumber,
    pageSize
  } = props;

  const pageWiseArticles = totalArticles.slice(
    (pageNumber - 1) * props.pageSize,
    (pageNumber - 1) * props.pageSize + pageSize
  );

  return (
    <>
      {!pageWiseArticles ? null : (
        <>
          <div className="news_latestarticles">
            <h4 className="news_latestarticles__text">
              <span>Top Headlines</span>
            </h4>
          </div>
          {pageWiseArticles.map((item, index) => (
            <NewsItem item={item} key={index} />
          ))}

          <React.Suspense fallback={<></>}>
            <Pagination
              loadPreviousNews={loadPreviousNews}
              loadNextNews={loadNextNews}
            />
          </React.Suspense>
        </>
      )}
    </>
  );
};

export default NewsItems;
