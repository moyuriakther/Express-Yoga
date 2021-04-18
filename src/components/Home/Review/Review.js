import React from 'react';
import Reviews from '../Reviews/Reviews'
import yoga6 from '../../../images/yoga6.jpg'
import yoga8 from '../../../images/yoga8.jpg'
import yoga3 from '../../../images/yoga3.jpg'

const reviews=[
    {
        name: 'Shery Sandberg',
        img: yoga6
    },
    {
        name: 'Eli Mohan',
        img: yoga8
    },
    {
        name: 'Stifen Witch',
        img: yoga3
    }

]
const Review = () => {
    return (
        <section className="services-container mt-5 pb-5" style={{background:'#fff8f5'}}>
            <div className="text-center">
                <h2 style={{color: '#1CC7C1'}}>Review</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row pt-5">
                {
                   reviews.map(reviews => <Reviews reviews={reviews} key={reviews.name}></Reviews>)
                }
            </div>
        </div>
        </section>
    )
}

export default Review;