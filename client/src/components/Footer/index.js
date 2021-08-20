import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {

    return (

        <div style={{
            width: '100%', backgroundColor: '#F75F1C', position: 'realtive',
            bottom: '0'
        }}>
            <footer>
                <Row style={{ width: '75%', margin: '0 auto' }}>
                    <h6 className="" style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", paddingTop: "6px", fontWeight: 'bold' }}>Surviving<span style={{ fontSize: '1.5REM', fontWeight: 'bold', color: 'green' }}>+</span>CBC wants your feedback! Suggestions, comments, concerns, and questions can be sent to the creators of Surviving CBC using the links below.</h6>
                </Row>
                <h6 className="" style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", paddingTop: '6px', fontWeight: 'bold' }}>Made with ❤️️ by the original four SCBC Survivors!</h6>

                <Row style={{ width: '75%', margin: '0 auto', paddingTop: '6px' }}>
                    <Col>
                        <div>
                            <a href='https://github.com/lilyhi' target='_blank' rel='noreferrer'>
                                <h2 style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}><FaGithub /></h2>
                                <h6 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Lily</h6>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/Shilohjones194' target='_blank' rel='noreferrer'>
                                <h2 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h2>
                                <h6 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Luke</h6>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/LifeInvaderr' target='_blank' rel='noreferrer'>
                                <h2 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h2>
                                <h6 style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: 'black', fontWeight: 'bold' }}>Matt</h6>
                            </a>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href='https://github.com/pablodlc' target='_blank' rel='noreferrer'>
                                <h2 style={{ textAlign: 'center', color: 'black' }}><FaGithub /></h2>
                                <h6 style={{ textAlign: 'center', color: 'black', fontFamily: "'Lato', sans-serif", fontWeight: 'bold' }}>Pablo</h6>
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