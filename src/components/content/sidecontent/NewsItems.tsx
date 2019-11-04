import React from 'react';
import NewsItem from './NewsItem';
import * as interfaces from '../../../customhooks/model';

interface IProps {
  newsData: interfaces.IResponse | null;
}

const NewsItems = (props: IProps): JSX.Element => {
  const { newsData } = props;
  return (
    <>
      <div className="news_latestarticles">
        <h4 className="news_latestarticles__text">
          <span>Latest News</span>
        </h4>
      </div>
      {newsData && newsData.articles.map(item => <NewsItem item={item} />)}
    </>
  );
};

export default NewsItems;
