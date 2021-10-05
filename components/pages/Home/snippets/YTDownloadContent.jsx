import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const BASE_URL = process.env.BASE_URL;
function YTDownloadContent() {
  const { t } = useTranslation('common');
  const url = BASE_URL;

  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  function Googlead() {
    return (
      <>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3476621303569503"
          data-ad-slot="3627285369"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </>
    );
  }

  return (
    // bg-dark-primary
    <>
      <hr className="m-0" />
      <div className=" py-5">
        <div className="container">
          <Googlead />
        </div>
        <br />
        <div className="pb-3  container text-dark">
          <h2 className="text-center h2  ">{t('downloader.title')}</h2>
          <p className="text-dark  text-center ">{t('downloader.description')}</p>

          <div className=" text-center">
            <p className="text-dark font-weight-bold">{t('downloader.share')}</p>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              className="mx-3">
              <img src="/static/svg/facebook.svg" width="30" />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
              target="_blank"
              className="mx-3">
              <img src="/static/svg/linkedin.svg" width="30" />
            </a>

            <a href={`https://twitter.com/share?url=${url}`} target="_blank" className="mx-3">
              <img src="/static/svg/twitter.svg" width="30" />
            </a>

            <a
              href={`whatsapp://send?text=${url}`}
              data-action="share/whatsapp/share"
              target="_blank"
              className="mx-3 whatsapp-share-btn">
              <img src="/static/svg/whatsapp.svg" width="30" />
            </a>
          </div>
        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      <style>
        {`
        .whatsapp-share-btn{
          display: none;
        }
          @media screen and (max-width: 600px) {
            .whatsapp-share-btn{
              display: inline;
            }
          }`}
      </style>
    </>
  );
}

export default YTDownloadContent;
