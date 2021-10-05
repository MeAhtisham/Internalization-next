import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordian from './Accordian';

function FAQ() {
  const { t } = useTranslation('common');
  return (
    // bg-dark-primary
    <>
      <hr className="m-0" />
      <div className=" py-5">
        <div className="pb-3  container text-dark">
          <h3 className="text-center h2  mb-5">{t('faqs.title')}</h3>
          <Accordian isOpen heading={t('faqs.faq1.title')}>
            <p className="card-text">{t('faqs.faq1.description')}</p>
          </Accordian>
          <Accordian isOpen heading={t('faqs.faq2.title')}>
            <p className="card-text">{t('faqs.faq2.description')}</p>
          </Accordian>
          <Accordian isOpen heading={t('faqs.faq3.title')}>
            <p className="card-text">{t('faqs.faq3.description')}</p>
          </Accordian>
          <Accordian isOpen heading={t('faqs.faq4.title')}>
            <p className="card-text">{t('faqs.faq4.description')}</p>
          </Accordian>

          {/* <Accordian isOpen heading="Thumbnails downloaded from this website are copyright-free?">
          <p className="card-text">All images belong to their respected owners. If you download any image for professional usage, please ask the file owner before using it.</p>
          </Accordian> */}
        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
    </>
  );
}

export default FAQ;
