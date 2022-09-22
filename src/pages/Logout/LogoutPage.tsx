import React, {useRef} from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import {CgClose} from 'react-icons/cg';
import {FiExternalLink} from 'react-icons/fi';
import './LogoutPage.css';
import { removeUserSession } from '../../store/localstorage';

function LogoutPage({lightMode, setLogout, account, setCurrentWallet}: any) {

    // close the modal when clicking outside the modal.
    const modalRef: any = useRef();

    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setLogout(false);
        }
    };

    function logout() {
        removeUserSession();
        setCurrentWallet('');
        setLogout(false);
      }
    

  return (
    <div className="logout" ref={modalRef} onClick={closeModal}>
        <div className={`logout__modal ${lightMode && "logout__modal--light"}`}>
            <div className={`logout__info`}>
                <div className={`logout__close ${lightMode && "logout__close--light"}`}  onClick={() => setLogout(false)}>
                    { <CgClose  />}
                </div>

                <div className={`logout__icon`}>
                    <Jazzicon diameter={90} seed={jsNumberForAddress(account)}/>
                    <p className={`logout__address ${lightMode && "logout__address--light"}`}>{account.substring(0,6)}...{account.substring(account.length - 5)}</p>
                </div>

                <div className={`logout__arbiscan ${lightMode && "logout__arbiscan--light"}`} onClick={() => window.open(`https://arbiscan.io/address/${account}`, '_blank')}>
                   { <FiExternalLink />}
                    <p className="logout__view">View on Arbiscan</p>
                </div>

                <div className={`logout__button ${lightMode && "logout__button--light"}`} onClick={logout}>
                    <p>Logout</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default LogoutPage