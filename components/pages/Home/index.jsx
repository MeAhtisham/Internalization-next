import React, { useState, useRef } from 'react';
import Link from 'next/link';
import PostContent from './snippets/PostContent';
import YTDownloadContent from './snippets/YTDownloadContent';
import FAQ from './snippets/Faq';
import Shortsinfo from './snippets/Shortsinfo';
import YoutubeEmbed from '../../snippets/YoutubeEmbeded/YoutubeEmbed';
import HowToCreate from './snippets/HowToCreate';
import DownloadYoutubeShorts from './snippets/DownloadYoutubeShorts';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const API_URL = process.env.API_URL;
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
function getYoutubeId(url) {
  console.log(url);
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(shorts\/)|(watch\?))\??(v?=)?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[9].length == 11 ? match[9] : false;
}
var primaryDarkColor = '#dc3545';
var is_mount = false;
function Home() {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  // const [value, setValue] = useState('');
  const [videoData, updateVideoData] = useState([]);
  const [isError, updateIsError] = useState(false);
  const [loader, isLoading] = useState(false);
  const [isOpen, updateIsOpen] = useState(false);
  const [isDropdownOpen, updateIsDropdown] = useState(false);
  const [title, updateTitle] = useState('');
  const [thumnail, updateThumbnail] = useState('');
  const [videoIndex, updateVideoIndex] = useState(0);
  const [isMore, updateIsMore] = useState(false);
  const [video_link, set_video_link] = useState('');
  function handleChange(e) {
    if (e.target.value.trim() != '') {
      set_video_link(e.target.value);
    }
  }
  useEffect(() => {
    getVideo();
  }, [video_link]);
  useEffect(() => {
    set_video_link(window.document.querySelector('input[type="search"]').value);
  });
  function getVideo() {
    let id = getYoutubeId(video_link);
    if (id) {
      updateIsError(false);
      isLoading(true);
      updateThumbnail(`https://img.youtube.com/vi/${id}/sddefault.jpg`);
      fetch(`https://ytshorts.savetube.me/napi?type=info&video_url=${video_link}`)
        .then((res) => res.json())
        .then((json) => {
          isLoading(false);
          if (json.status == 1) {
            const videoDetails = json['data'];
            updateTitle(videoDetails['title']);
            updateThumbnail(videoDetails['thumbnail']);
            const videoFormats = videoDetails['formats'];
            let onlyVideos = [];
            let audioVideos = [];
            let labels = [];
            let flag = 0;
            videoFormats.map((video) => {
              if (typeof video['format_note'] !== 'undefined') {
                if (!video['format_note'].includes('tiny')) {
                  if (video['acodec'] != 'none' && typeof video['format_note'] !== 'undefined') {
                    audioVideos.push(video);
                  } else if (!labels.includes(video['format_note'])) {
                    if (flag == 0) {
                      flag = 1;
                      video['moreOption'] = true;
                    }
                    onlyVideos.push(video);
                  }
                  if (video['format_note'] && !labels.includes(video['format_note'])) {
                    labels.push(video['format_note']);
                  }
                }
              }
            });
            // const audioVideos = videoFormats.filter((el)=> el.hasAudio )
            // const onlyVideos = videoFormats.filter((el)=> !el.hasAudio )
            // console.log(videoFormats);
            updateVideoData([...audioVideos.reverse(), ...onlyVideos]);
          } else {
            if (json['msg'].includes('No video formats found')) {
              alert('No video formats found');
            } else {
              alert('Some error occured.');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          alert('Some error occured');
        });
    } else {
      if (video_link != '') {
        updateIsError(true);
      } else {
        updateIsError(false);
      }
    }
  }
  function toggleDropdown() {
    updateIsDropdown(!isDropdownOpen);
  }
  function getJsonFromUrl(url) {
    if (!url) url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split('&').forEach(function (part) {
      var item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }
  function downloadBlob(blob, name = 'file.txt') {
    if (window.navigator && window.navigator.msSaveOrOpenBlob)
      return window.navigator.msSaveOrOpenBlob(blob);
    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download = name;
    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }
  function download(title, download_data) {
    isLoading(true);
    title = title.replace(/[^\w\s]/gi, '-');
    const filename = `${title}.${download_data.ext}`;
    // fetch(download_data.url, { mode: 'no-cors' })
    //   .then(response => response.blob())
    //   .then(bytes => {
    //     // console.log(json.headers);
    //     // var bytes = new Uint8Array(json.data); // pass your byte response to this constructor
    //     var blob = new Blob([bytes], { type: getJsonFromUrl(download_data.url).mime });
    //     var objUrl = window.URL.createObjectURL(blob);
    //     let link = document.createElement('a');
    //     link.href = objUrl;
    //     link.download = filename;
    //     link.click();
    //     // var link=document.createElement('a');
    //     // link.href=window.URL.createObjectURL(blob);
    //     // link.download=filename;
    //     // link.click();
    //     // var url = window.URL.createObjectURL(blob);
    //     // var a = document.createElement('a');
    //     // a.href = url;
    //     // a.download = filename;
    //     // document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    //     // a.click();
    //     // a.remove();  //afterwards we remove the element again
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    let downloadLinkBtn = document.createElement('a');
    downloadLinkBtn.setAttribute('href', download_data.url);
    // downloadLinkBtn.setAttribute('href', `https://ytshorts.savetube.me/napi?type=download&filename=${filename}&video_url=${download_data.url}`);
    downloadLinkBtn.setAttribute('download', filename);
    // downloadLinkBtn.setAttribute('target',`_blank`);
    document.body.appendChild(downloadLinkBtn);
    downloadLinkBtn.click();
    downloadLinkBtn.remove();
    isLoading(false);
  }
  useEffect(() => {
    let clickOutside = function (e) {
      // Do nothing if clicking ref's element or descendent elements
      if (ref.current && !ref.current.contains(e.target)) {
        updateIsDropdown(false);
        updateIsMore(false);
      }
      return;
    };
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);
  return (
    <>
      {loader && (
        <>
          <div className="loader">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div className="loader-background" />
        </>
      )}
      {/* <YoutubeEmbed embedId="Tje77ziz8HU" isOpen={isOpen} updateIsOpen={updateIsOpen} header="How to Download?" /> */}
      <hr className="m-0" />
      <div>
        {/* bg-dark-primary */}
        <div className="container">
          <Googlead />
        </div>
        <div className="px-3 py-5">
          <div className="container py-2 bg-light-primary  hero-container text-dark">
            <br />
            <h1 className="text-center m-0 main-heading ">
              <Link href="/">
                <a className="text-dark text-decoration-none">{t('title')}</a>
              </Link>
            </h1>
            <p className="text-center   font-weight-semi text-dark">{t('description')}</p>
            <div className="row justify-content-center ">
              <div className="col-md-8 mb-2">
                <input
                  type="search"
                  className="form-control input"
                  placeholder={t('search_text')}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="btn-main  btn"
                  onClick={() => {
                    getVideo();
                  }}>
                  {t('get_video')}
                </button>
              </div>
            </div>
            {/* <p className=" text-center mt-2 mb-0"><a href="javascript:void(0)" className="text-primary pointer font-weight-bold" onClick={()=>{
                updateIsOpen(!isOpen)
              }}>How to Download ?</a></p> */}
            {isError && <p className="text-danger text-center m-0">{t('wrong_url')}</p>}
            <br />
          </div>
        </div>
        {/* <hr className="m-0"/> */}
        {/* <h2>{title}</h2> */}
        {videoData.length > 0 && (
          <>
            {/* <hr/> */}
            <div className="container   my-2 card card-body">
              <div className="row">
                <div className="col-md-3">
                  <img src={thumnail} width="100%" />
                </div>
                <div className="col-md-9">
                  <h2 className="mt-2 mb-0 h4">{title}</h2>
                  {videoData.length > 0 && (
                    <>
                      <hr />
                      <div className="btn-group" ref={ref}>
                        <button
                          key={videoData[videoIndex]['url']}
                          className="btn btn-main rounded-0 d-block"
                          onClick={() => {
                            download(title, videoData[videoIndex]);
                          }}>
                          {videoData[videoIndex]['format_note']}{' '}
                          {videoData[videoIndex]['acodec'] !== 'none' ? (
                            ''
                          ) : (
                            <>
                              {' '}
                              <img src="/static/svg/silent.svg" height="15px" className="mx-2" />
                            </>
                          )}
                          <img src="/static/svg/download.svg" height="15px" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={toggleDropdown}>
                          <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className={`dropdown-menu p-0 ${isDropdownOpen ? 'd-block' : ''}`}>
                          {videoData.map((video, index) => {
                            if (video['format_note'])
                              if (index !== videoIndex)
                                return (
                                  <React.Fragment key={video['url']}>
                                    {!!video['moreOption'] && (
                                      <>
                                        <button
                                          className="btn btn-main rounded-0 border-bottom d-block"
                                          onClick={() => {
                                            updateIsMore(!isMore);
                                          }}>
                                          {isMore ? 'Less' : 'More'}
                                          <span>
                                            <img
                                              src="/static/svg/down-arrow.svg"
                                              height="15px"
                                              className={`mx-2 ${
                                                isMore ? 'btn-icon-rotate-180' : ''
                                              }`}
                                            />
                                          </span>
                                        </button>
                                      </>
                                    )}
                                    {/* <div className="dropdown-divider"></div> */}
                                    <button
                                      className={`btn btn-main rounded-0 border-bottom ${
                                        video['acodec'] !== 'none'
                                          ? 'd-block'
                                          : isMore
                                          ? 'd-block'
                                          : 'd-none'
                                      }`}
                                      onClick={() => {
                                        updateVideoIndex(index);
                                        download(title, video);
                                        toggleDropdown();
                                        updateIsMore(!isMore);
                                      }}>
                                      {video['format_note']}{' '}
                                      {video['acodec'] !== 'none' ? (
                                        ''
                                      ) : (
                                        <>
                                          {' '}
                                          <img
                                            src="/static/svg/silent.svg"
                                            height="15px"
                                            className="mx-2"
                                          />
                                        </>
                                      )}
                                      <img src="/static/svg/download.svg" height="15px" />
                                    </button>
                                  </React.Fragment>
                                );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* <hr className="mt-5 mb-0" /> */}
          </>
        )}
        <div className="container">
          <Googlead />
        </div>
      </div>
      <PostContent />
      <YTDownloadContent />
      <Shortsinfo />
      <HowToCreate />
      <DownloadYoutubeShorts />
      <FAQ />
      <style jsx>
        {`
          .input {
            outline: none; // disable default focus styles
            border-color: #606569;
            border-radius: 12px;
            height: 56px;
            padding: 17px 20px;
            font-size: 16px;
          }
          .input:focus {
            box-shadow: none;
          }
          .loader {
            height: 200px;
            width: 200px;
            margin: auto;
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 1000;
            transform: translate(-50%);
          }
          .loader > div {
            height: inherit;
            width: inherit;
            position: absolute;
            animation-name: rotate;
            animation-duration: 2s;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
          }
          .loader > div > div {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: ${primaryDarkColor};
            position: absolute;
            top: 0%;
            right: 50%;
            transform: translate(50%, 0%);
          }
          .loader > div:nth-child(2) {
            animation-delay: 0.2s;
          }
          .loader > div:nth-child(3) {
            animation-delay: 0.4s;
          }
          .loader > div:nth-child(4) {
            animation-delay: 0.6s;
          }
          @keyframes rotate {
            0% {
              transform: rotate(0);
            }
            50% {
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .loader-background {
            background: #afafaf;
            opacity: 0.3;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `}
      </style>
    </>
  );
}
export default Home;
