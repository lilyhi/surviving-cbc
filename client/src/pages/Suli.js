import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Suli() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { errorAdd }] = useMutation(ADD_USER);
    const [login, { errorLogin }] = useMutation(LOGIN_USER);

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form for Sign Up (add user)
    const handleFormSubmitAdd = async event => {
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

    // submit form for Login
    const handleFormSubmitLogin = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });
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
                            <Form onSubmit={handleFormSubmitAdd}>

                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className="form-input" name="username" id="usernameAdd" type="text" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        What can we call you, survivor?
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="form-input" name="email" id="emailAdd" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        Please enter your email address.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control className="form-input" name="password" id="passwordAdd" type="password" placeholder="Password" />
                                </Form.Group>

                                <Button className="btn d-block w-100" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    {errorAdd && <div>🚫 Signup failed 🚫</div>}
                </Col>

                <Col>
                    <Card>
                        <Card.Title>
                            Already registered? Log In Here!
                        </Card.Title>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className="form-input" name="username" id="usernameLogin" type="username" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        Welcome back, Survivor
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control className="form-input" name="password" id="passwordLogin" type="password" placeholder="Password" />
                                </Form.Group>

                                <Button className="btn d-block w-100" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>

                    {errorLogin && <div>🚫 Login failed 🚫</div>}
                </Col>
            </Row>
        </Container>

    )
}

export default Suli