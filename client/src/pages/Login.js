import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState },
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
                            Already registered? Log In Here!
                        </Card.Title>

                        <Card.Body>
                            <main className="flex-row justify-center mb-4">
                                <div className="col-12 col-md-6">
                                    <div className="card">
                                        <h4 className="card-header">Login</h4>
                                        <div className="card-body">
                                            <form onSubmit={handleFormSubmit}>
                                                <input
                                                    className="form-input"
                                                    placeholder="Your email"
                                                    name="email"
                                                    type="email"
                                                    
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    className="form-input"
                                                    placeholder="******"
                                                    name="password"
                                                    type="password"
                                                    
                                                    value={formState.password}
                                                    onChange={handleChange}
                                                />
                                                <button className="btn d-block w-100" type="submit">
                                                    Submit
                                                </button>
                                            </form>

                                            {error && <div>Login failed</div>}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </Card.Body>

                    </Card>

                    {error && <div>🚫 Login failed 🚫</div>}
                </Col>
            </Row >
        </Container >
    )
}

export default Login