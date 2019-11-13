import React from 'react';
import * as interfaces from '../../../customhooks/model';
import './readmoreblocks.scss';

interface IProps {
  heading: string;
  articles: Array<interfaces.IArticleResponse>;
}

const ReadMore = ({ heading, articles }: IProps): JSX.Element => {
  return (
    <div className="row readmore__container">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <div className="readmore__title">
          <h5 className="readmore__title__headline">
            <span>{'Sports'}</span>
          </h5>
        </div>
        <div className="readmore__title__newscontainer">
          {articles.slice(0, 2).map((item, index) => (
            <div className="readmore__title__newsblock">
              <img
                className="readmore__news__image"
                src={item.urlToImage}
                alt="main news"
              />
              <p className="readmore__news__imagetext">
                <a target="_blank" href={item.url}>
                  {item.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="col-md-12 col-lg-12 col-sm-12 news__readmore">
        Read More..
      </div> */}
    </div>
  );
};

export default ReadMore;
