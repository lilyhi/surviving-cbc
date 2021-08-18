import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

// Still need to customize card for Post
    return (
     
            <div className="list-group col-sm-6">
                <div className="card">
                    <h5 className="card-header">Posted by "COOL_USERName</h5>
                    <div className="card-body">
                        <h5 className="card-title">JS Notes From my CBC days</h5>
                        <p className="card-text">When in Doubt Always keep notes.</p>
                        <Link to="/" className="btn btn-secondary btn-sm">View whole Post</Link>
                    </div>
                </div>
            </div>
     
    )
}

export default Post;
