import { appWithTranslation } from 'next-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  var primarycolor = '#fd0054';
  var primaryDarkColor = '#dc3545';
  var primaryWhite = '#fbf9fa';
  var darkColor = '#2b2024';
  return (
    <Layout>
      <Component {...pageProps} />
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-205726605-1"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'UA-205726605-1');
            </script>
            <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YouTube Shorts Downloader",
              "alternateName": "YouTube Shorts Download",
              "url": "https://ytshorts.savetube.me/",
              "logo": "https://ytshorts.savetube.me/static/images/logo.png"
            }
            </script>
            <script type="application/ld+json">{
              "@context": "https://schema.org/",
              "@type": "CreativeWorkSeries",
              "name": "YouTube Shorts Downloader",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.95",
                "bestRating": "5",
                "ratingCount": "9276"
              }
            }</script>`,
        }}
      />
      <style>
        {`
          .bg{
            // background: #3cb371;
            background: ${primaryWhite};
          }
          
          .text-primary-link{
            color: ${primarycolor};
          }
          .btn-main{
            
            transition: 0.2s linear;
            background: ${primarycolor};
            border-radius: 12px;
            padding: 15px;
            display: inline-block;
            border: none;
            color: #fdfdfe;
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
            transition: all .3s;
            min-width: 180px;
            outline: none;
          }
          .btn-main:focus{
            outline: none;
            box-shadow: none;
          }
          .btn-main:hover{
            color: #fcfcfc;
            background: ${primaryDarkColor};
          }
          
          .bg-main-primary{
            background: ${primarycolor}; 
          }
          
          .py-60{
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .hero-container{
            border-radius: 17px 0;
          }
          
          .main-menu {
            display: flex;
          }
          .bg-transparent-modal{
            background: rgba(0,0,0,.3);
          }
          .sidebar-btn{
            display: none; 
          }
          @media only screen and (max-width: 600px) {
            .main-menu {
              display: none !important;
            }
            h1 {
              font-size: 24px;
            }
            h2, h3{
              font-size: 20px !important;
            }
            .sidebar-btn{
              display: inline; 
            }
          }
            // .btn-icon-rotate-180{
              //   transform: rotateZ(180deg);
              
              //   transition: 0.2s linear;
              // }
              
              
              
              `}
      </style>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
