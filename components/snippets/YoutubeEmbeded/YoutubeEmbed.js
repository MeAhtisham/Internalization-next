import React from "react";
import PropTypes from "prop-types";
import ModalHoc from "../../layouts/ModalHoc";

const YoutubeEmbed = (props) => {
  const {embedId} = props;
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <style jsx>{
        `
        .video-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          // height: 150px;
          // width: 300px;
        }
        
        .video-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
        @media only screen and (max-width: 600px) {
          .video-responsive {
            height: 150px;
            width: 100%;
          }  
        }`
      }</style>
    </div>

  );
}


export default ModalHoc(YoutubeEmbed);