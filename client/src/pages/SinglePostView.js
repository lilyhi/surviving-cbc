import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
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
        <Container>

            <Card>
                <Card.Title>
                    <h3>{post.subject}</h3>
                    <h4 className='text-right'>{post.username}, {post.createdAt}</h4>
                </Card.Title>

                <Card.Body>
                    <p>
                        {post.postText}
                    </p>
                </Card.Body>

                <Card.Footer>
                    <Button className="btn-warning">
                        Edit
                    </Button>

                    <Button className="btn-danger">
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default SinglePostView