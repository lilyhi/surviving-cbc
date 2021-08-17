import React from 'react';
import { Link } from 'react-router-dom';


const CreatePostButton = () => {

    return (
        <Link to="/">
            <div className="list-group col-sm-6">
                <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">
                    Create a Post</a>
            </div>
            <br>
            </br>
        </Link>
    )
}

export default CreatePostButton;