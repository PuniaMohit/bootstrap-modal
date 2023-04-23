import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from 'jquery';

function Modal(props) {
  const modalRef = useRef(null);
  const lastRef=useRef(null)

  useEffect(() => {
    // document.body.style.overflowY='hidden'
    if (modalRef.current) {
      const modal = $(modalRef.current);
      console.log(modal)
      modal[0].style.display='block'
      modal[0].style.paddingLeft='17px'
      modal[0].classList='modal fade in'
      $("body").append(" <div class=modal-backdrop fade in ref={lastRef}></div>");
      console.log($(lastRef.current))

      
      // modal.modal('show');
      // modal.on('hidden.bs.modal', props.handleModalCloseClick);
    }

  }, []);

  return (
      <div className="modal fade" ref={modalRef} id="exampleModal" tabIndex="-1" 
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
  );
}

export default Modal;