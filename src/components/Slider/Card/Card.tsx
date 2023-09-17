import { Link } from 'react-router-dom';
import defaultNews from '../../../assets/icons/default-news.png';
export type newsItemProp = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  itemRef: React.ReactNode;
}

const Card = ({ newsItem, itemRef } : newsItemProp) => {
  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultNews;
    event.currentTarget.className = "error";
  };

  return (
    <Link to={newsItem?.url} className="news-item" ref={itemRef}>
      <img
        src={newsItem?.urlToImage}
        alt="image"
        onError={imageOnErrorHandler}
      />
      <p className="news-text">{newsItem?.title?.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</p>
      <p className="description-text">{newsItem?.description?.replaceAll(/<\/?[^>]+(>|$)/gi, "")}</p>
    </Link>
  );
};

export default Card;