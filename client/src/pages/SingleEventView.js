import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function SingleEventView() {
    return (
        <Container>

            <Card style={{ width: '50%', margin: '0 auto' }}>
                <Card.Title>
                    <h3>Title: Present Surviving-CBC</h3>
                    <h4>Date: 8/19/2021, 7:00 PM</h4>
                    <h4>Location: <a href='https://zoom.us/j/96407919363?pwd=WWxXWTJNczVhT3JFaGx0cTdJL2hnUT09' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Zoom Meeting</a></h4>
                    <h5 className='text-right'>username, 8/17/2021, 11:10 AM</h5>
                </Card.Title>

                <Card.Body>
                    <p>
                        I hope the class is sitting down when they see us present Surviving-CBC!
                    </p>
                </Card.Body>

                <Card.Footer>
                    <h4>Comments</h4>

                    <Card>
                        <Card.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Card.Body>

                        <Card.Footer>
                            <h6 className='text-right'>username, 8/17/2021, 11:13 AM</h6>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </Card.Body>

                        <Card.Footer>
                            <h6 className='text-right'>username, 8/17/2021, 11:14 AM</h6>
                        </Card.Footer>
                    </Card>
                </Card.Footer>
            </Card>

        </Container>
    )
}

export default SingleEventView