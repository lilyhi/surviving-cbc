import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function SinglePostView({ post }) {


    return (
        <Container>

            <Card style={{ margin: '0 auto' }}>
                <Card.Title style={{ padding: '10px' }}>
                    <h3>{ post.title }</h3>
                    <h4 className='text-right'>{ post.createdAt } </h4>
                </Card.Title>

                <Card.Body>
                    <p> { post.postText}</p>
                </Card.Body>

                <Card.Footer className='text-center'>
                    <Button style={{ backgroundColor: '#F75F1C', border: 'none', borderRadius: '10px', margin: '0 12px', width: '7REM' }}>
                        Edit
                    </Button>

                    <Button className="btn-danger" style={{ border: 'none', borderRadius: '10px', margin: '0 12px', width: '7REM' }}>
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default SinglePostView