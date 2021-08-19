import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleEventView() {
    return (
        <Container>

            <Card style={{ margin: '0 auto', padding: '10px' }}>

                <Card.Title>
                    <h4>
                        I hope the class is sitting down when they see us present Surviving-CBC!
                    </h4>
                </Card.Title>

                <Card.Body>
                    <p className='text-right'>username, 8/17/2021, 11:10 AM</p>
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

export default SingleEventView