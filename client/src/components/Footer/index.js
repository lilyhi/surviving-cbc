import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

    return (

        <div className="footer mt-5">
            <footer className="">
                <Row>
                    <h2 className="">Suggestions, comments, concerns, and complaints on Surviving-CBC are welcome! Reach out to us at the links below.</h2>
                </Row>

                <Row>
                    <h2 className="">Surviving-CBC was made with ❤️️ by the following survivors:</h2>
                </Row>

                <Row>
                    <Col>
                        <h2>Lily</h2>
                        <a href="https://github.com/lilyhi" target="blank">
                            <GitHubIcon fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                        </a>
                    </Col>
                    <Col>
                        <h2>Luke</h2>
                        <a href="https://github.com/Shilohjones194" target="blank">
                            <GitHubIcon fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                        </a>
                    </Col>
                    <Col>
                        <h2>Matt</h2>
                        <a href="https://github.com/LifeInvaderr" target="blank">
                            <GitHubIcon fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                        </a>
                    </Col>
                    <Col>
                        <h2>Pablo</h2>
                        <a href="https://github.com/pablodlc" target="blank">
                            <GitHubIcon fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                        </a>
                    </Col>


                </Row>
            </footer>
        </div>


    )
};

export default Footer;