import React, { useReducer } from 'react';
import * as interfaces from '../../../customhooks/model';
import ReadMoreBlocks from './ReadMoreBlocks';
import './mainnews.scss';

interface IProps {
  mainNews: interfaces.IArticleResponse;
  totalArticles: Array<interfaces.IArticleResponse>;
}

const MainNews = (props: IProps): JSX.Element => {
  console.log('rerendering');
  const { mainNews, totalArticles } = props;

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
      <>
        {/* {!mainNews ? null : (
          <>
            <ReadMoreBlocks
              heading={'Sports'}
              articles={totalArticles}
            ></ReadMoreBlocks>
            <ReadMoreBlocks
              heading={'Entertainment'}
              articles={totalArticles}
            ></ReadMoreBlocks>
            <ReadMoreBlocks
              heading={'Health'}
              articles={totalArticles}
            ></ReadMoreBlocks>
            <ReadMoreBlocks
              heading={'Technology'}
              articles={totalArticles}
            ></ReadMoreBlocks>
            <ReadMoreBlocks
              heading={'Science'}
              articles={totalArticles}
            ></ReadMoreBlocks>
          </>
        )} */}
      </>
    </>
  );
};

export default MainNews;
