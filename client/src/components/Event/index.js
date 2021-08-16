import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {


    return (
        <Link to="/">
            <div className="list-group col-sm-6">
                <div className="card">
                    <h5 className="card-header"> Posted by 2KoOl4ScHoOl </h5>
                    <div className="card-body">
                        <h5 className="card-title">Join Us for Python Study Hall</h5>
                        <p className="card-text">Discord is link below.</p>
                        <a href="#" className="btn btn-secondary btn-sm">Click to view Event</a>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Event;
