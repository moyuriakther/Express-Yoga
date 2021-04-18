import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Yoga Fit</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Appointment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 " href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 " href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    {loggedInUser.issSignedIn ? loggedInUser.name : <Link className="nav-link mr-5" to="/login"><button className="btn-login">Login</button> </Link>}

                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;