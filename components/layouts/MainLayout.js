import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '../snippets/Sidebar';
import { useEffect, useState } from 'react';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

const BASE_URL = process.env.BASE_URL;

export default function MainLayout({ children }) {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, updateOpen] = useState(false);

  useEffect(() => {
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>YouTube Shorts Downloader - Download YouTube Shorts for Free</title>
        <meta
          property="og:title"
          content="YouTube Shorts Downloader - Download YouTube Shorts for Free"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="author" content="YouTube Shorts Downloader" />
        <meta property="og:site_name" content="YouTube Shorts Video Download" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />

        <meta
          name="description"
          content="YouTube shorts video download for free. Best YouTube Shorts video downloader online tool. Save YouTube shorts videos to device."
        />
        <meta
          property="og:description"
          content="YouTube shorts video download for free. Best YouTube Shorts video downloader online tool. Save YouTube shorts videos to device."
        />

        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        <meta property="og:image" content={`${BASE_URL}/static/staticImage/og.jpg`} />
        <link
          rel="icon"
          href={`${BASE_URL}/static/staticImage/og.jpg`}
          type="image/gif"
          sizes="16x16"></link>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-3476621303569503"
        />
      </Head>

      <nav className="bg-main-primary w-100 d-flex justify-content-between align-items-center">
        <Link href="/">
          <a className="text-white text-decoration-none d-flex p-3 font-weight-semi ">
            <img src="/static/svg/logo.svg" className="mr-2" height="25px" width="25px" />
            Youtube Shorts Downloader
          </a>
        </Link>
        <ul className="list-inline justify-content-end m-0 p-3 main-menu align-items-center">
          <li>
            <a className="text-white text-decoration-none mr-2 p-3 font-weight-semi" href="/">
              {t('home')}
            </a>
          </li>
          <li>
            <a
              className="text-white text-decoration-none mr-2 p-3 font-weight-semi"
              href="https://savetube.me/">
              {t('blog')}
            </a>
          </li>
          <li>
            <a
              className="text-white text-decoration-none mr-5 p-3 font-weight-semi"
              href="/blog/contact-us">
              {t('contact_us')}
            </a>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
        <button
          className="btn sidebar-btn "
          onClick={() => {
            updateOpen(true);
          }}>
          <img src="/static/svg/hamburger.svg" height="25" width="25" />
        </button>
      </nav>
      <Sidebar updateOpen={updateOpen} isOpen={isOpen} />

      {!!(pathname != '/') && (
        <div className=" px-3 bg-dark-primary py-60">
          <div className="container py-5 bg-light-primary  hero-container">
            <h1 className="text-center mb-2 mt-0  ">
              <Link href="/">
                <a className="text-white text-decoration-none ">Youtube Thumbnail Downloader</a>
              </Link>
            </h1>
            <p className="text-center   font-weight-semi text-white">
              Convert and download Youtube videos in MP3, MP4, 3GP for free
            </p>
          </div>
        </div>
      )}
      <section className="">{children}</section>
      <footer className="bg-dark p-5">
        <Link href="/">
          <a className="text-white mr-2">{t('home')}</a>
        </Link>
        <a className="text-white mr-2" href="/blog">
          {t('blog')}
        </a>
        <a className="text-white " href="https://youtube.thumbnail-download.me/">
          YouTube Thumbnail Downloader
        </a>
        &nbsp;
        <a className="text-white " href="https://youtube-thumbnail.savetube.me/">
          YouTube Thumbnail Download
        </a>
        &nbsp;
        <a className="text-white " href="/blog/contact-us">
          {t('contact_us')}
        </a>
      </footer>
    </>
  );
}
