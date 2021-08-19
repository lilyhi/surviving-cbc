import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>
                            Survivor Registration
                        </Card.Title>

                        <Card.Body>
                            <Form onSubmit={handleFormSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className="form-input" name="username" type="text" placeholder="Enter username" onChange={handleChange} />
                                    <Form.Text className="text-muted">
                                        What can we call you, survivor?
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="form-input" name="email" type="email" placeholder="Enter email" onChange={handleChange} value={formState.email} />
                                    <Form.Text className="text-muted">
                                        Please enter your email address.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control className="form-input" name="password" type="password" placeholder="Password" onChange={handleChange} value={formState.password} />
                                </Form.Group>

                                <Button className="btn d-block w-100" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    {error && <div>🚫 Signup failed 🚫</div>}
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
