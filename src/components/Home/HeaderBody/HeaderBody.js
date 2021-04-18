import React from 'react';
import lady from '../../../images/header.jpg'

const HeaderBody = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Bringing Peace In Your Body And Mind</h1>
                <p className="text-secondary">We appreciate your trust. Our clients choose us and our practices because they know we're the best.</p>
                <button className="btn btn-brand">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={lady} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderBody;