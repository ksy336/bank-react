import illustration from '../../assets/icons/Illustration 2.svg';
import circle from '../../assets/icons/bx_bxs-check-circle.svg';

const Features = () => {
  return (
    <section className="main__main__features">
      <div className="wrapper features__wrapper">
        <article className="main__info-features">
          <div className="image-info-features">
            <img src={illustration} alt="man" />
          </div>
          <div className="features__choose">
            <h3>We Provide Many Features You Can Use</h3>
            <h5>You can explore the features that we provide with fun and have their own functions each feature</h5>
            <ul>
              <li className="feature-item"><img src={circle} alt="feature"
                                                className="feature__sign" />Powerfull online protection.</li>
              <li className="feature-item"><img src={circle} alt="feature"
                                                className="feature__sign" />Cashback without borders.</li>
              <li className="feature-item"><img src={circle} alt="feature"
                                                className="feature__sign" />Personal design</li>
              <li className="feature-item"><img src={circle} alt="feature"
                                                className="feature__sign" />Work anywhere in the world</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;