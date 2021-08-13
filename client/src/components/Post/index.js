import React from 'react';
import { Link } from 'react-router-dom';
// ///////////////////////////////////////          NOT SURE ABOUT LINK. ITS STILL NOT PULLING UP/////////////////////
const Post = () => {


    return (
        <Link to="/">
            <div className="col-sm-6">
                <div className="card">
                    <h5 className="card-header">Posted by "COOL_USERName69</h5>
                    <div className="card-body">
                        <h5 className="card-title">JS Notes From my CBC days</h5>
                        <p className="card-text">When in Doubt Always keep notes.</p>
                        <a href="#" className="btn btn-primary">Click to View more</a>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Post;