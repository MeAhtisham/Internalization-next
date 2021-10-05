import React from 'react'

function PostCard(props) {
  const { url, alt, bg, heading, para } = props;
  return (
    <>
      
      <div className="post-card ">
        <div className={`post-image ${bg}`}>
          <img src={url} alt={alt} />
        </div>
        
        <div className="post-content">
          <h3>{heading}</h3>
          <p>{para}</p>
        </div>
      </div>
      <style jsx>
        {`
         .post-card{
          background: #fff;
          box-shadow: 0 13px 30px rgb(0 0 0 / 11%);
          border-radius: 17px;
         }
          .post-image {
            height: 220px;
            display: flex;
            justify-content: center;
            -moz-border-radius: 17px 17px 0 0;
            -webkit-border-radius: 17px 17px 0 0;
            -khtml-border-radius: 17px 17px 0 0;
            border-radius: 17px 17px 0 0;
          }
          .post-image{
            // background: #ecddcb;
            padding: 20px;
          }
          .post-image svg, .post-image path {
            fill: #6a3fb6 !important;
          }
          .post-image img {
            width: 150px;
          }
          .post-content {
            padding: 20px; 
            text-align: left
          }
          
          .post-content h3 {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 10px
          }
          
          .post-content p {
            line-height: 18px;
            margin-bottom: 0;
            min-height: 100px;
          }
        
        `}
      </style>
    </>
  )
}

export default PostCard
