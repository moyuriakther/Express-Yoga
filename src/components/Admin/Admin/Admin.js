import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AddClasses from '../AddClasses/AddClasses';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
       <div className="p-5">
            <div className="d-flex justify-content-between">
                <div>
                    <AddClasses/>
                </div>
                <h4>{loggedInUser.name}</h4>
            </div>
        </div>
    );
};

export default Admin;