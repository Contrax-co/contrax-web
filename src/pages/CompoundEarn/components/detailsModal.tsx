import React, {useRef} from 'react';
import './detailsModal.css';

function DetailsModal({setModalDetails, detailsKey, setDetailsKey, pool}: any) {
    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setModalDetails(false);
            setDetailsKey(null);
        }
    };

    return (
        <div className="detail_container" ref={modalRef} onClick={closeModal}>
            <div className="detail_modal">
            <p>see details</p> 
            </div>
        </div>
    )
}

export default DetailsModal;