import React from 'react';
import { useTranslation } from 'react-i18next';

function HowToCreate() {
  const { t } = useTranslation('common');

  return (
    <>
      <hr className="m-0" />
      <div className=" py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="/static/staticImage/create-a-short.jpg"
                width="100%"
                alt="create a youtube short"
              />
            </div>

            <div className="col-md-8">
              <div className="py-3 ">
                <h2 className=" h2 ">{t('how_to_make.title')}</h2>
              </div>
              <p>{t('how_to_make.description')}</p>
              <p className="font-weight-bold">{t('how_to_make.step1')} </p>
              <p className="font-weight-bold">{t('how_to_make.step2')} </p>
              <p className="font-weight-bold">{t('how_to_make.step3')} </p>
              <p>{t('how_to_make.follow')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToCreate;
