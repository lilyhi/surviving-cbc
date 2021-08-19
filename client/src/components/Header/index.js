import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

// when the time comes to link for authorization
// import Auth from '../../utils/auth';

const Header = () => {
    // const logout = event => {
    //   event.preventDefault();
    //   Auth.logout();
    // };

    return (
        <Navbar fluid class='navbar navbar-collapse' style={{ backgroundColor: 'black' }}>
            <Row>

                <div>
                    <h1>
                        <Link to="/" style={{ textDecoration: 'none', color: '#F75F1C' }}>Surviving CBC</Link>
                    </h1>

                    <ul>
                        <li>
                            <Link to="/signup" style={{ textDecoration: 'none', color: '#F75F1C' }}>Sign Up</Link>
                        </li>

                        <li>
                            <Link to="/login" style={{ textDecoration: 'none', color: '#F75F1C' }}>Log In</Link>
                        </li>
                    </ul>
                </div>

            </Row>
        </Navbar >

        // <header className="bg-secondary mb-4 py-2 flex-row align-center">
        //     <div className="container flex-row justify-space-between-lg align-center">
        //         <Link to="/">
        //             <h1 className="text-center">Surviving CBC</h1>
        //         </Link>
        //         {/* https://getbootstrap.com/docs/4.0/utilities/spacing/ */}
        //         {/* Link to the Suli.js Page Needs to be here
        // <Link to="/Suli.js"> */}
        //         <p>
        //             <Link to="/"><span className="glyphicon glyphicon-user"></span> SignUp </Link>
        //             <Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login </Link>
        //         </p>

        //     </div>
        // </header>
    );
};

export default Header;