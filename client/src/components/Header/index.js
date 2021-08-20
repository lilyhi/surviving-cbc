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
        <Navbar fluid class='navbar navbar-collapse' style={{
            backgroundColor: 'black', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', padding: '0', marginTop: '-12px'
        }}>
            <Row>

                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <h1>
                        <Link to="/" style={{ textDecoration: 'none', color: '#F75F1C' }}>Surviving<span style={{ fontSize: '60px', fontWeight: 'bold', color: 'green' }}>+</span>CBC</Link>
                    </h1>

                    <ul style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', listStyleType: 'none', marginBottom: '-12px' }}>

                        <li>
                            <Link to="/signup" style={{ textDecoration: 'none', color: '#F75F1C', fontSize: '24px', }}>Sign Up</Link>
                        </li>

                        <li>
                            <Link to="/login" style={{ textDecoration: 'none', color: '#F75F1C', fontSize: '24px', padding: '12px 24px' }}>Log In</Link>
                        </li>
                    </ul>
                </div>

            </Row>
        </Navbar >
    );
};

export default Header;