import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../utils/queries';

function SingleEventView() {
    const { id: eventId } = useParams();

    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId }
    });

    const event = data?.event || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>

            <Card style={{ width: '50%', margin: '0 auto', padding: '10px' }}>

                <Card.Title>
                    <h3>
                        {event.subject}
                    </h3>
                    <h4>
                        {event.eventText}
                    </h4>
                </Card.Title>

                <Card.Body>
                    <p className='text-right'>{event.username}, {event.createdAt}</p>
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

export default SingleEventView