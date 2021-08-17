import React from 'react';
import { Link } from 'react-router-dom';

// when the time comes to link for authorization
// import Auth from '../../utils/auth';

const Header = () => {
    // const logout = event => {
    //   event.preventDefault();
    //   Auth.logout();
    // };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg align-center">
        <Link to="/">
          <h1 className="">Surviving CBC</h1>
        </Link>
{/* https://getbootstrap.com/docs/4.0/utilities/spacing/ */}
        {/* Link to the Suli.js Page Needs to be here
        <Link to="/Suli.js"> */}
          <p><a href="#"><span className="glyphicon glyphicon-user"></span> SignUp </a>
            <a href="#"><span className="glyphicon glyphicon-log-in"></span> Login </a>
          </p>

      </div>
    </header>
  );
};

export default Header;