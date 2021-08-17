import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <Link to="/">
            <footer className="bg-secondary mb-4 py-2 flex-row align-center">
                <div className="container flex-row justify-space-between-lg align-center">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Surviving Coding BootCamp Wants Your FeedBack!</h5>
                            <p class="card-text">Please let us know what we can do to make this website better for the students to come!</p>
                            <a href="#" class="Contact-Us">Contact at our github</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Link>

    )
};

export default Footer;