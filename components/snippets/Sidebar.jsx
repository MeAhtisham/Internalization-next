import Link from 'next/link'
import React from 'react'

function Sidebar(props) {
  const { isOpen, updateOpen } = props;
  return (
    <>
      <div className={`menu-sidebar ${isOpen ? 'slide-0' : ''}`}>
        <div className="bg-white main-side-menu">
          
          <Link href="/"><a className=" text-decoration-none d-flex p-3 font-weight-semi border-bottom align-items-center"  onClick={()=>updateOpen(false)}><img src="/static/svg/logo.svg"   className="mr-2" style={{borderRadius:'100%', border:'1px solid'}} height="25px" width="25px"/><small className="text-primary-link">Youtube Shorts Downloader</small></a></Link>
          
          <ul className="m-0 p-0">
            <Link href="/"><a className="py-2  px-4 text-dark d-block border-bottom" onClick={()=>updateOpen(false)}>Home</a></Link>
            <li><a className="py-2  px-4 text-dark d-block border-bottom" href="https://savetube.me/">Blog</a></li>
            <li><a className="py-2  px-4 text-dark d-block border-bottom" href="/blog/contact-us"> Contact Us</a></li>
          </ul>
          
        </div>
        <div className="sidebar-outerlayer" onClick={()=>{
          updateOpen(false);
        }}>
        </div>
      </div>
      <style>
        {`
          .menu-sidebar {
            display: none;
          }
          @media screen and (max-width: 600px) {

            .slide-0 {
              left: 0 !important;
            }
            .menu-sidebar {
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              overflow: hidden;
              transition: .4s;
              left: -460px;
              width: 100%;
              z-index: 1050;
            }
            .menu-sidebar {
              display: flex;
            }
            menu-list-sidebar {
              background: #fff;
              overflow-y: scroll;
              height: calc(100vh - 150px);
            }
            .main-side-menu {
              width: 65%;
            }
            .sidebar-outerlayer {
              width: 35%;
              background: rgba(0, 0, 0, 0.6);
            }
          }
          
        `}
      </style>
    </>
  )
}

export default Sidebar
