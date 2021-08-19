import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function SinglePostView() {
    return (
        <Container padding='0'>

            <Card border="dark" style={{ margin: '0 auto', padding: '8px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, .8)' }}>
                <Card.Title style={{ padding: '8px' }}>
                    <h3>This is the post's title</h3>
                    <h6 className='text-right'>username, 8/16/2021, 12:47 AM</h6>
                </Card.Title>

                <Card.Body style={{ textAlign: 'justify' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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