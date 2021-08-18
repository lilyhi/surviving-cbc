import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        
            <footer className="bg-secondary mb-4 py-2 flex-row align-center">
                <div className="container flex-row justify-space-between-lg align-center">
                    <div className="card">
                        <div className="card-body text-center flex-box">
                            <h5 className="card-title">Surviving Coding BootCamp Wants Your FeedBack!</h5>
                            <p className="card-text">Please let us know what we can do to make this website better for the students to come!</p>
                            <Link to="/" className="Contact-Us">Contact at our github</Link>
                        </div>
                    </div>
                </div>
            </footer>
      

    )
};

export default Footer;