import buttonRight from '../../assets/icons/button-right.svg';
import buttonLeft from '../../assets/icons/button-left.svg';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import newsApi from '../../../api/newsApi';

const Slider = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const data = await newsApi.getNewsFromApi();
    const transformedArticles = data?.articles.map((article) => {
      return {
        urlToImage: article.urlToImage,
        url: article.url,
        title: article.title,
        description: article.description,
      }
    });
    setNews(transformedArticles);
    for(let i = 0; i < transformedArticles.length; i++) {
      if(newsTitle[i] || newsDescription[i] || imageUrl[i] || newsItem[i]) {
        newsTitle[i].textContent = transformedArticles[i]?.title.replaceAll(/<\/?[^>]+(>|$)/gi, "");
        newsDescription[i].textContent = transformedArticles[i]?.description?.replaceAll(/<\/?[^>]+(>|$)/gi, "");
        imageUrl[i].src = transformedArticles[i]?.urlToImage;
        newsItem[i].href = transformedArticles[i].url;
      }
    }
  }
  return (
    <section className="main__main__news">
      <div className="wrapper news__wrapper">
        <article className="main__info-news">
          <div className="news-data">
            <h2>Current news from the world of finance</h2>
            <p className="new__paragraph">We update the news feed every 15 minutes. You can learn more by clicking on
              the news you are interested in.</p>
            <section className="news__block">
              <div className="layout-4-column">
                {news?.map((newsItem) => (
                  <Card
                    key={newsItem.url}
                    newsItem={newsItem}
                  />
                ))}
              </div>
            </section>
          </div>
        </article>
        <div className="buttons-slider">
          <img className="button-left" src={buttonRight} alt="button" />
            <img className="button-right" src={buttonLeft} alt="button" />
        </div>
      </div>
    </section>
  );
};

export default Slider;