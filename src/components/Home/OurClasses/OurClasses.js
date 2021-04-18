import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ClassDetails from '../ClassDetails/ClassDetails';

const OurClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>setClasses(data))
    }, [])
    return (
        <section className="classes-container mt-5">
            <div className="text-center">
                {/* <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5> */}
                <h2 style={{color: '#1CC7C1'}}>Our Class Service</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row pt-5">
                {
                    classes.map(classInfo => <ClassDetails classInfo={classInfo} key={classInfo.name}></ClassDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default OurClasses;