import React from 'react';
import { Link } from 'react-router-dom';

const CreateEventButton = () => {


    return (
        <Link to="/">
            <div className="list-group col-sm-6">
                <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                    Create An Event</a>
            </div>
        </Link>
    )
}

export default CreateEventButton;