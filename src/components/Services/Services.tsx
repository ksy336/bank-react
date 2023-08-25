import vector from '../../assets/icons/Vector.svg';

const Services = () => {
  return (
    <section className="main__main__services">
      <div className="wrapper services__wrapper">
        <article className="main__info-services">
          <div className="services-data">
            <h2>You can use our services anywhere in the world</h2>
            <p>Withdraw and transfer money online through our application</p>
            <section className="services__block__map">
              <div className="map">
                <img src={vector} alt="map" />
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;