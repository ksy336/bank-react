import buttonRight from '../../assets/icons/button-right.svg';
import buttonLeft from '../../assets/icons/button-left.svg';
import Card from './Card/Card';
import { useEffect, useRef, useState } from 'react';
import newsApi from '../../../api/newsApi';

const Slider = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newsBlock = useRef();
  const width = newsBlock?.current?.offsetWidth;
  const item = useRef();
  const track = useRef();

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
  }
  const transformToLeft = () => {
    setButtonDisabled(false);
    newsBlock.current.scrollLeft += item.current.offsetWidth + 80 + newsBlock.current.scrollLeft;
    if (track.current.offsetWidth - newsBlock.current.scrollLeft === width) {
      setButtonDisabled(true);
    }
  }
  const transformToRight = () => {
    if (track.current.offsetWidth - newsBlock.current.scrollLeft > width) {
      setButtonDisabled(false);
    }
    newsBlock.current.scrollLeft -= width;
  }

  return (
    <section className="main__main__news">
      <div className="wrapper news__wrapper">
        <article className="main__info-news">
          <div className="news-data">
            <h2>Current news from the world of finance</h2>
            <p className="new__paragraph">We update the news feed every 15 minutes. You can learn more by clicking on
              the news you are interested in.</p>
            <section className="news__block" ref={newsBlock}>
              <div className="layout-4-column" ref={track}>
                {news?.map((newsItem) => (
                  <Card
                    key={newsItem.url}
                    newsItem={newsItem}
                    itemRef={item}
                  />
                ))}
              </div>
            </section>
          </div>
        </article>
        <div className="buttons-slider">
          <img
            // className={`${buttonDisabled ? "button-left disabled" : "button-left"}`}
            className="button-left"
            src={buttonRight} alt="button"
            onClick={transformToRight}
          />
          <img
            className={`${buttonDisabled ? "button-right disabled" : "button-right"}`}
            src={buttonLeft}
            alt="button"
            onClick={transformToLeft}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;