import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function SinglePostView() {
    return (
        <Container>

            <Card style={{ width: '50%', margin: '0 auto' }}>
                <Card.Title style={{ padding: '10px' }}>
                    <h3>This is the post's title</h3>
                    <h4 className='text-right'>username, 8/16/2021, 12:47 AM</h4>
                </Card.Title>

                <Card.Body>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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