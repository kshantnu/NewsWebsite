import React, { useReducer, useContext, useEffect } from 'react';

import useFetchNewsHeadlines from '../../../customhooks/useFetchTopHeadlines';
import { StateContext } from '../../../context/Contexts';
// import * as interfaces from '../../../customhooks/model';
import './mainnews.scss';

// interface IProps {
//   mainNews: interfaces.IArticleResponse;
//   topHeadLinesArticles: Array<interfaces.IArticleResponse>;
// }

const MainNews = (): JSX.Element => {
  const { state, dispatch } = useContext(StateContext)!;
  const {
    countryCode,
    pageSize,
    headlinesPageNumber,
    category,
    mainNews
  } = state;

  let requestObject = {
    country: countryCode,
    pagesize: pageSize,
    headlinesPageNumber,
    category: category
  };

  const { isError, isLoading, headlinesData } = useFetchNewsHeadlines(
    requestObject
  );

  useEffect(() => {
    dispatch({
      type: 'ADD_TOPHEADLINES',
      payload: { topHeadlinesNews: headlinesData }
    });
  }, [headlinesData]);

  return (
    <>
      <div className="mainnews__container">
        {!mainNews ? null : (
          <figure>
            <img
              src={mainNews.urlToImage}
              className="mainnews__image"
              alt="main news"
            />
            <figcaption className="mainnews__imageMetaContainer">
              <p className="meta">
                <span>{mainNews.publishedAt}</span>
                <span>{mainNews.source.name}</span>
              </p>
              <p>
                <h3>
                  <a
                    className="mainnews__title"
                    target="_blank"
                    href={mainNews.url}
                  >
                    {mainNews.title}
                  </a>
                </h3>
              </p>
            </figcaption>
          </figure>
        )}
      </div>
    </>
  );
};

export default MainNews;
