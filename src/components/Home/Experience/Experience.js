import React from 'react';
import { faEye, faHeart, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Experiences from '../Experiences/Experiences';

const informationData = [
    {
        title:'Meditation Practice',
        description:'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit',
        icon: faEye,
        background: 'primary'
    },
    {
        title: 'Balance Body & Mind',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit',
        icon: faHeart,
        background: 'primary'
    },
    {
        title:'Yoga Month Challenge',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit',
        icon: faUserFriends,        
        background: 'primary'
    }
]
const Experience = () => {
    return (
        <div className="container">
            <h1>Experience of Yoga</h1>
            <section className="d-flex justify-content-center">
                <div className="row">
                    {
                        informationData.map(information => <Experiences information={information} key={information.title}></Experiences>)
                    }
                </div>
            </section>
            <button className="btn btn-brand mt-3 text-white">Learn More</button>
        </div>
        
    );
};

export default Experience;