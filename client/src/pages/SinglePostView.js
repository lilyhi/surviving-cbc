import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

function SinglePostView() {
    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container padding='0'>

{/* //             <Card>
//                 <Card.Title>
//                     <h3>{post.subject}</h3>
//                     <h4 className='text-right'>{post.username}, {post.createdAt}</h4>
//                 </Card.Title>

//                 <Card.Body>
//                     <p>
//                         {post.postText}
//                     </p> */}


            <Card style={{ margin: '0 auto' }}>
                <Card.Title style={{ padding: '10px' }}>
                    <h3>{ post.title }</h3>
                    <h4 className='text-right'>{ post.createdAt } </h4>
                </Card.Title>

                <Card.Body>
                    <p> { post.postText}</p>

                </Card.Body>

                <Card.Footer className='text-center'>
                    <Button style={{ backgroundColor: '#F75F1C', border: 'none', borderRadius: '10px', margin: '0 12px', width: '5REM', boxShadow: '0 0 10px rgba(0, 0, 0, 1)' }}>
                        Edit
                    </Button>

                    <Button className="btn-danger" style={{ border: 'none', borderRadius: '10px', margin: '0 12px', width: '5REM', boxShadow: '0 0 10px rgba(0, 0, 0, 1)' }}>
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </Container >
    )
}

export default SinglePostView