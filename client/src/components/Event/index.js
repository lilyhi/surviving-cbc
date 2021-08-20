import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

const Event = () => {


    return (
    
            <div className="list-group col-sm-6">
                <div className="card">
                    <h5 className="card-header"> Posted by 2KoOl4ScHoOl </h5>
                    <div className="card-body">
                        <h5 className="card-title">Join Us for Python Study Hall</h5>
                        <p className="card-text">Discord is link below....</p>
                        <Link to="/" className="btn btn-secondary btn-sm">View Event</Link>
                    </div>
                </div>
            </div>
     
    )
}

export default Event;
