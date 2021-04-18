import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const FooterBottom = () => {
    return (
        <div className="row">
            <div className="copyRight text-center col-md-10 pt-3">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
            <ul className="social-media list-inline col-md-2 text-white pt-3">
                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
            </ul>
        </div>
    );
};

export default FooterBottom;