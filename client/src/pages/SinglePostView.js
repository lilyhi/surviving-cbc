import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function SinglePostView() {
    return (
        <Container>

            <Card>
                <Card.Title>
                    <h3>This is the post's title</h3>
                    <h4 className='text-right'>username, 8/16/2021, 12:47 AM</h4>
                </Card.Title>

                <Card.Body>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Card.Body>

                <Card.Footer>
                    <h4>Comments</h4>

                    <Card>
                        <Card.Body>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </Card.Body>

                        <Card.Footer>
                            <h6 className='text-right'>username, 8/16/2021, 1:03 AM</h6>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Body>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </Card.Body>

                        <Card.Footer>
                            <h6 className='text-right'>username, 8/16/2021, 1:05 AM</h6>
                        </Card.Footer>
                    </Card>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default SinglePostView