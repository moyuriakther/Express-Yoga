import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Experiences.css'

const Experiences = ({information}) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${information.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={information.icon}></FontAwesomeIcon> <br/>
                    <h6>{information.title}</h6>
                    <small>{information.description}</small>
                </div>
            </div>
        </div>
    );
};

export default Experiences;