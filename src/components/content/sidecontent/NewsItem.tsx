import React from 'react';
import './sidecontent.scss';
import * as interfaces from '../../../customhooks/model';

interface IProps {
  item: interfaces.IArticleResponse;
}

const NewsItem = (props: IProps): JSX.Element => {
  const {
    item: {
      title,
      publishedAt,
      urlToImage,
      url,
      source: { id, name }
    }
  } = props;
  const onError = () => {
    console.log('image not loaded');
  };
  return (
    <div className="sidecontent__newsitem__container">
      <div className="sidecontent__newsitem__text">
        <a href={url}>
          <strong>{title}</strong>
        </a>
        <p>{publishedAt}</p>
        <p>{name}</p>
      </div>
      <div className="sidecontent__newsitem__image">
        {/* TODO: If src is not available show another div with image not available text */}
        <img src={urlToImage} onError={onError} className="" alt="main news" />
      </div>
    </div>
  );
};

export default NewsItem;
