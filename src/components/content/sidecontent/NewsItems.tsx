import React from 'react';
import NewsItem from './NewsItem';
import Pagination from '../../Pagination/Pagination';
import * as interfaces from '../../../customhooks/model';

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
  console.log('startIndex', (pageNumber - 1) * props.pageSize);
  console.log('lastIndedx', pageSize);
  const pageWiseArticles = totalArticles.slice(
    (pageNumber - 1) * props.pageSize,
    (pageNumber - 1) * props.pageSize + pageSize
  );
  console.log('pageWiseArticles', pageWiseArticles);
  console.log('totalArticles', totalArticles);
  return (
    <>
      {!pageWiseArticles ? null : (
        <>
          <div className="news_latestarticles">
            <h4 className="news_latestarticles__text">
              <span>Top Headlines</span>
            </h4>
          </div>
          {pageWiseArticles.map(item => (
            <NewsItem item={item} />
          ))}

          <Pagination
            loadPreviousNews={loadPreviousNews}
            loadNextNews={loadNextNews}
          />
        </>
      )}
    </>
  );
};

export default NewsItems;
