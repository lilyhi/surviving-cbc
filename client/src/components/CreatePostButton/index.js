import React from 'react';
import { Link } from 'react-router-dom';


const CreatePostButton = () => {

    return (

        <div className="list-group col-sm-6">
            <Link to="/" className="btn btn-lg active" role="button" aria-pressed="true" style={{ backgroundColor: 'green', color: 'black' }}>
                Create a Post</Link>
        </div>


    )
}

export default CreatePostButton;