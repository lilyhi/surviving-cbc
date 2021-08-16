import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router } from 'react-router-dom';

function Suli() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>
                            Survivor Registration
                        </Card.Title>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        What can we call you, survivor?
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                    <Form.Label>Confirm Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formAlmaMater">
                                    <Form.Label>Alma Mater</Form.Label>
                                    <Form.Control placeholder="University of Arizona" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formOccupation">
                                    <Form.Label>Occupation/Desired Occupation:</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
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
                                    <Form.Control type="username" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        Welcome back, Survivor
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Suli