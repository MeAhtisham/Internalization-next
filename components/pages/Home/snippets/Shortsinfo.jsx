import React from 'react';
import { useTranslation } from 'react-i18next';

function Shortsinfo() {
  const { t } = useTranslation('common');
  return (
    <>
      <hr className="m-0" />
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="text-center h2 ">{t('shorts.title')}</h2>
          </div>
          <div className="row justify-content-around mb-2 px-2 ">
            <p dangerouslySetInnerHTML={{ __html: t('shorts.description') }}></p>
            <p
              className="m-0"
              dangerouslySetInnerHTML={{ __html: t('shorts.sub_description') }}></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shortsinfo;
