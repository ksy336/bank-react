import React, { ChangeEvent, useEffect, useState } from 'react';
import subscribeApi from '../../../api/subscribeApi';

const Support = () => {
  const [email, setEmail] = useState({ });
  const [subscriptionText, setSubscriptionText] = useState("");
  console.log(email)
  useEffect(() => {
    const textData = localStorage.getItem("text") as string;
    if (textData) setSubscriptionText(textData);
  }, []);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("text", subscriptionText));
  }, [subscriptionText]);

  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       await subscribeApi.sendSubscription({
        "email": email
      });
      setSubscriptionText("You are already subscribed to the bank's newsletter");
    } catch(e) {
      console.warn(e);
      throw new Error(e);
    }
  };

  return (
    <section className="main__main__support">
      <div className="wrapper support__wrapper">
        <article className="main__info-support">
          <div className="support-data">
            <p className="support__text">Support</p>
            <h4>Subscribe Newsletter & get</h4>
            <h4 className="support__text-description">Bank News</h4>
          </div>
        </article>
        <div className="text-subscribe">{subscriptionText}</div>
        {!subscriptionText && (
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your email"
              className="icon"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail( e.target.value)}
            />
            <button type="submit">
              <svg width="31" height="41" viewBox="0 0 31 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_93_3979)">
                  <path
                    d="M19.4114 9.82539L3.18914 19.2758C2.5057 19.6739 2.10525 20.5644 2.14396 21.5994C2.18274 22.6345 2.6529 23.6057 3.37098 24.1338L9.04222 28.3048L13.6627 21.2824C13.8753 20.9593 14.2679 20.9583 14.5396 21.2804C14.8112 21.6024 14.859 22.1255 14.6464 22.4487L10.0259 29.4711L13.8097 36.5105C14.2888 37.4019 15.0648 37.9083 15.8347 37.832C16.6062 37.7556 17.2138 37.1106 17.4234 36.1527L22.4058 13.3757C22.6327 12.3387 22.3588 11.2027 21.6912 10.4111C21.0236 9.61955 20.15 9.39503 19.4114 9.82539Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_93_3979">
                    <rect width="23.9072" height="26.0371" fill="white"
                          transform="matrix(0.54966 -0.835388 0.64472 0.764419 0.156799 20.4309)" />
                  </clipPath>
                </defs>
              </svg>
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Support;