import { Link } from 'react-router-dom';
import defaultNews from '../../../assets/icons/default-news.png';
export type newsItemProp = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const Card = (newsItem: newsItemProp) => {
  console.log(newsItem)
  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultNews;
    event.currentTarget.className = "error";
  };
  for(let i = 0; i < transformedArticles.length; i++) {
    if(newsTitle[i] || newsDescription[i] || imageUrl[i] || newsItem[i]) {
      newsTitle[i].textContent = transformedArticles[i]?.title.replaceAll(/<\/?[^>]+(>|$)/gi, "");
      newsDescription[i].textContent = transformedArticles[i]?.description?.replaceAll(/<\/?[^>]+(>|$)/gi, "");
      imageUrl[i].src = transformedArticles[i]?.urlToImage;
      newsItem[i].href = transformedArticles[i].url;
    }
  }

  return (
    <Link to="" className="news-item">
      <img
        src=""
        alt="image"
        onError={imageOnErrorHandler}
      />
      <p className="news-text"/>
      <p className="description-text"/>
    </Link>
  );
};

export default Card;