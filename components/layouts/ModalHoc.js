import React from 'react'

function ModalHoc(OriginalComponent) {
  function NewComponent (props) {
    const {isOpen, updateIsOpen, header} = props;
    
    return (
      <>
        <div className={`modal bg-transparent-modal  ${isOpen ? 'd-block' : ''}  `} onClick={()=>{
                  updateIsOpen(false);
                }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <span>{header}</span>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{
                  updateIsOpen(false);
                }}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-0">
                {isOpen && <OriginalComponent updateIsOpen={updateIsOpen} {...props}/> }
              </div>
            </div>
          </div>
        </div>
        <style jsx>{
        `
        .modal-dialog {
          max-width: 800px !important;
        }
        @media only screen and (max-width: 600px) {
          .video-responsive {
            max-width: 100% !important;
            width: 100%;
          }  
        }`
      }</style>
      </>
    )
  }
  return NewComponent;
}

export default ModalHoc
