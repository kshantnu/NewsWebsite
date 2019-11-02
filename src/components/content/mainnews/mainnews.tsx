import React from 'react';
import * as interfaces from '../../../customhooks/model';

import './mainnews.scss';

interface IProps {
  newsData: interfaces.IResponse | null;
}

const MainNews = (props: IProps): JSX.Element => {
  let topNews: interfaces.IArticleResponse | null = null;

  if (props.newsData && props.newsData.totalResults > 0) {
    // had to use for loop because need to break out from loop;
    // only pic the news as main news if it has image url.
    for (let i = 0; i < props.newsData.articles.length; i++) {
      if (props.newsData.articles[i].urlToImage) {
        topNews = props.newsData.articles[i];
      }
      break;
    }
  }

  return (
    <div className="mainnews__container">
      {!topNews ? null : (
        <figure>
          <img
            src={topNews.urlToImage}
            className="mainnews__image"
            alt="main news"
          />
          <figcaption>
            <p className="meta">
              <span>{topNews.publishedAt}</span>
              <span>{topNews.source.name}</span>
            </p>
            <p>
              <h3>
                <a
                  className="mainnews__title"
                  target="_blank"
                  href={topNews.url}
                >
                  {topNews.title}
                </a>
              </h3>
            </p>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default MainNews;
