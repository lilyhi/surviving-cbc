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
        <Container padding='0'>

            <Card border="dark" style={{ margin: '0 auto', padding: '8px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, .8)' }}>

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