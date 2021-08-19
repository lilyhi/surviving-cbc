import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {

    return (

        <div className="footer mt-5" style={{ width: '100%', backgroundColor: '#F75F1C', padding: "0 48px" }}>
            <footer className="">
                <Row>
                    <h3 className="" style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", padding: "24px", fontWeight: 'bold' }}>Surviving CBC wants your feedback! Suggestions, comments, concerns, and questions can be sent to the creators of Surviving CBC using the links below.</h3>
                </Row>
                <h4 className="" style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", padding: '12px', fontWeight: 'bold' }}>Made with ❤️️ by the original four SCBC Survivors!</h4>

                <Row>
                    <Col>
                        <div>
                            <a href='https://github.com/lilyhi' target='blank'>
                                <h1 style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}><FaGithub /></h1>
                                <h4 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Lily</h4>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/https://github.com/Shilohjones194' target='blank'>
                                <h1 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h1>
                                <h4 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Luke</h4>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/https://github.com/LifeInvaderr' target='blank'>
                                <h1 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h1>
                                <h4 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Matt</h4>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/pablodlc' target='blank'>
                                <h1 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h1>
                                <h4 style={{ textAlign: 'center', color: 'black', fontFamily: "'Lato', sans-serif", fontWeight: 'bold' }}>Pablo</h4>
                            </a>

                        </div>
                    </Col>
                </Row>

                {/* <a href="https://github.com/pablodlc" target="blank">
                        <GitHubIcon className= fontSize='large' style={{ textDecoration: 'none', color: '#5d5c61', margin: '24px' }} />
                    </a> */}

            </footer>
        </div >


    )
};

export default Footer;