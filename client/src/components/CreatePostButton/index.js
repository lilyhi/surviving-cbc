import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';


const CreatePostButton = () => {
    // const [addPost, addPostData] = useMutation (ADD_POST, {
    //     variables: {
    //         // place holder //
    //        postText: ""
    //     },
    // });

    return (

        <div className="list-group col-sm-6">
            {/* <button onClick={( )=>{
                addPost({
                    variables: {
                        postText: 'HelloWorld'
                    }
                })
            }}> Create Post button</button> */}
            <Link to="/" className="btn btn-lg active" role="button" aria-pressed="true" style={{ backgroundColor: 'green', color: 'black' }}>
                Create a Post</Link>
        </div>


    )
}

export default CreatePostButton;