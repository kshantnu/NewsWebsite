import React, { useContext } from 'react';
import NewsItem from './NewsItem';

// import Pagination from '../../Pagination/Pagination';
import * as interfaces from '../../../interfaces';

const Pagination = React.lazy(() => import('../../Pagination/Pagination'));

interface IProps {
  topHeadLinesArticles: Array<interfaces.IArticleResponse>;
  pageSize: number;
  headlinesPageNumber: number;
  loadPreviousHeadlines: () => void;
  loadNextHeadlines: () => void;
  heading: string;
}

const NewsItems = (props: IProps): JSX.Element => {
  const {
    topHeadLinesArticles,
    loadPreviousHeadlines,
    loadNextHeadlines,
    headlinesPageNumber,
    pageSize,
    heading
  } = props;

  const pageWiseArticles = topHeadLinesArticles.slice(
    (headlinesPageNumber - 1) * pageSize,
    (headlinesPageNumber - 1) * pageSize + pageSize
  );

  return (
    <>
      {!pageWiseArticles ? null : (
        <>
          <div className="news_latestarticles">
            <h4 className="news_latestarticles__text">
              <span>{heading}</span>
            </h4>
          </div>
          {pageWiseArticles.map((item, index) => (
            <NewsItem item={item} key={index} />
          ))}

          <React.Suspense fallback={<></>}>
            <Pagination
              loadPreviousNews={loadPreviousHeadlines}
              loadNextNews={loadNextHeadlines}
            />
          </React.Suspense>
        </>
      )}
    </>
  );
};

export default NewsItems;
