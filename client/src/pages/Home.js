// When it comes time, integrate Apollo Hooks:
import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';

import React, { useState } from 'react';
import SubjectButton from '../components/SubjectButton';

import CreatePostButton from '../components/CreatePostButton';
import Post from '../components/Post';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Event from '../components/Event'
import SinglePostView from '../pages/SinglePostView';
import SingleEventView from '../pages/SingleEventView';
import CreateEventButton from '../components/CreateEventButton';
import { Link } from 'react-router-dom';


const Home = () => {
    const [currentSubject, setCurrentSubject] = useState('')
    // setCurrentSubject as a prop to that button. and passing it in as a prop.
    // useState('') want 
    const subjects = [
        { name: 'HTML', key: 1 },
        { name: 'CSS', key: 2 },
        { name: 'JS', key: 3 },
        { name: 'JSON', key: 4 },
        { name: 'JQuery', key: 5 },
        { name: 'Node', key: 6 },
        { name: 'Web APIs', key: 7 },
        { name: 'Server-Side APIs', key: 8 },
        { name: 'Third-Party APIs', key: 9 },
        { name: 'MySQL', key: 10 },
        { name: 'React', key: 11 },
        { name: 'NoSQL', key: 12 },
        { name: 'Express.js', key: 13 }
    ]
    return (
        <main>
            <Row>
                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', backgroundColor: 'gray', flex: 1 }}>

                    <div>
                        {subjects.map(subject => (
                            <SubjectButton key={subject.key} subject={subject.name} clickEvent={setCurrentSubject} style={{ backgroundColor: 'lightgray' }} />
                        ))}
                    </div>
                </Col>

                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 2, paddingTop: '12px' }}>
                    {/* Creating new PostButton */}

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CreatePostButton />
                        {/* {
                            currentSubject
                                ? <Post />
                                : <div> (included the ':') make another component for the home screen if nothing is clicked </div>

                        } */}
                    </div>
                    <div style={{ paddingTop: '12px' }}>
                        <SinglePostView />
                    </div>
                </Col>
                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 2, paddingTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CreateEventButton />
                        {/* {
                            currentSubject
                                ? <Event />
                                : <div> (included the ':') make another component for the home screen if nothing is clicked </div>

                        } */}
                    </div>
                    <div style={{ paddingTop: '12px' }} >
                        <SingleEventView />
                    </div>

                    {/* Please Keep Notes below--- I want to eventually create a page that prompts up if there is no posts inregards to a subject. */}

                    {/* //post.length?, post.map reference: 
            {subjects.map(subject => (
                        <SubjectButton subject={subject} clickEvent={setCurrentSubject} /
                        , to add info for two */}
                </Col>
            </Row>
        </main >
    )
}
export default Home;