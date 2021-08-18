import React from 'react';
import { Link } from 'react-router-dom';

const CreateEventButton = () => {


    return (

        <div className="list-group col-sm-6">
            <Link to="/" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                Create An Event</Link>
        </div>

    )
}

export default CreateEventButton;