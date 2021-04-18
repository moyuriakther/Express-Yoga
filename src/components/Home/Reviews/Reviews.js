import React from 'react';

const Reviews = ({reviews}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="d-flex">
            <img style={{height: '50px', marginRight:'5px' }} src={reviews.img} alt="" />
            <h6 className="mt-3 mb-3">{reviews.name}</h6>
            </div>
            <p className="text-left pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam porro blanditiis repudiandae similique nemo.</p>
        </div>
    );
};

export default Reviews;