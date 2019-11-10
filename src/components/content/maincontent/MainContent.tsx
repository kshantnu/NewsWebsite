import React, { useReducer } from 'react';
import * as interfaces from '../../../customhooks/model';
import { NewsDataContextProvider } from '../../../context/Contexts';
import './mainnews.scss';
// import img from '../../../assets/patern-1.png';

interface IProps {
  mainNews: interfaces.IArticleResponse;
}

const MainNews = (props: IProps): JSX.Element => {
  // let topNews: interfaces.IArticleResponse | null = null;

  // if (props.newsData && props.newsData.totalResults > 0) {
  //   // had to use for loop because need to break out from loop;
  //   // only pic the news as main news if it has image url.
  //   for (let i = 0; i < props.newsData.articles.length; i++) {
  //     if (props.newsData.articles[i].urlToImage) {
  //       topNews = props.newsData.articles[i];
  //       break;
  //     }
  //   }
  // }

  console.log('rerendering');
  const { mainNews } = props;

  return (
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
  );
};

export default React.memo(MainNews);
