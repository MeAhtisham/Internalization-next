import React from 'react';
import { useTranslation } from 'react-i18next';

function DownloadYoutubeShorts() {
  const { t } = useTranslation('common');
  return (
    <>
      <hr className="m-0" />
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="m-0 h2 text-center">{t('how_to_download.title')}</h2>
          </div>
          <p>{t('how_to_download.description')}</p>
          <p className="font-weight-bold">{t('how_to_download.step1')}</p>
          <p className="font-weight-bold">{t('how_to_download.step2')}</p>
          <img
            src="/static/staticImage/first_shorts.jpg"
            className="my-3 px-2"
            height="300px"
            width="150px"
            alt="download youtube shorts"
          />
          <img
            src="/static/staticImage/copylink.jpg"
            className="my-3 px-2"
            width="150px"
            height="300px"
            alt="download youtube shorts copy link"
          />
          <p className="font-weight-bold">{t('how_to_download.step3')}</p>
          <p className="font-weight-bold">{t('how_to_download.step4')}</p>
          <p>{t('how_to_download.finish')}</p>
        </div>
      </div>
    </>
  );
}

export default DownloadYoutubeShorts;
