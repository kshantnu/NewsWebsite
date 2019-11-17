import React, { useContext } from 'react';
import NewsItems from './NewsItems';
import { NewsContext } from '../../../context/Contexts';

interface IProps {
  heading: string;
}

const HeadlinesNews = (props: IProps): JSX.Element => {
  const {
    loadPreviousHeadlines,
    loadNextHeadlines,
    pageSize,
    headlinesPageNumber
  } = useContext(NewsContext)!;
  const { heading } = props;

  // const pageWiseArticles = topHeadLinesArticles.slice(
  //   (headlinesPageNumber - 1) * pageSize,
  //   (headlinesPageNumber - 1) * pageSize + pageSize
  // );

  return (
    <>
      {/* {!pageWiseArticles ? null : (
        <>
          <div className="news_latestarticles">
            <h4 className="news_latestarticles__text">
              <span>{heading}</span>
            </h4>
          </div>
          <NewsItems
            loadPreviousHeadlines={loadPreviousHeadlines}
            loadNextHeadlines={loadNextHeadlines}
            pageSize={pageSize}
            headlinesPageNumber={headlinesPageNumber}
            topHeadLinesArticles={topHeadLinesArticles}
            heading={heading}
          />
        </>
      )} */}
    </>
  );
};

export default HeadlinesNews;
