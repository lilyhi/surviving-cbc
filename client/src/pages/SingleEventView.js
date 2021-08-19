import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleEventView() {
    return (
        <Container padding='0'>

            <Card border="dark" style={{ margin: '0 auto', padding: '8px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, .8)' }}>

                <Card.Title style={{ padding: '8px' }}>
                    <h5 style={{ textAlign: 'justify' }}>
                        I hope the class is sitting down when they see us present Surviving+CBC!
                    </h5>
                </Card.Title>

                <Card.Body>
                    <h6 className='text-right'>username, 8/16/2021, 12:47 AM</h6>
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

        </Container>
    )
}

export default SingleEventView