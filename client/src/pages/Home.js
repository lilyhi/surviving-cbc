import { gql, useQuery, useMutation } from '@apollo/client';

import React, { useState } from 'react';
import SubjectButton from '../components/SubjectButton';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

import CreatePostButton from '../components/CreatePostButton';
import Post from '../components/Post';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Event from '../components/Event'
import SinglePostView from '../pages/SinglePostView';
import SingleEventView from '../pages/SingleEventView';
import CreateEventButton from '../components/CreateEventButton';
import { Link } from 'react-router-dom';
import { QUERY_ME, QUERY_POSTS, QUERY_EVENTS } from '../utils/queries';
import { ADD_POST, ADD_EVENT } from '../utils/mutations';



const Home = () => {
    // const meQuery= useQuery(QUERY_ME)
    // console.log(meQuery.data)
    const username = 'Edmond_Dicki';
    
    const postData= useQuery(QUERY_POSTS, {
        variables: { username },
    });

    const eventData= useQuery(QUERY_EVENTS, {
        variables: { username },
    });


    const [currentSubject, setCurrentSubject] = useState('')

    const posts = postData?.data ? postData.data.posts.filter(post => post.subject == currentSubject) : []


    const events = eventData?.data ? eventData.data.events.filter(event => event.subject == currentSubject) : []

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
    //console.log(eventData)
    return (
        <main>

            <Row style={{ margin: '0', height: 'auto' }}>


                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', height: '100%', background: 'linear-gradient(to bottom, #808080 50%, #f75f1c 100%', flex: 1 }}>

                    <div style={{ padding: '12px 0' }}>
                        {subjects.map(subject => (
                            <SubjectButton key={subject.key} subject={subject.name} clickEvent={setCurrentSubject} />
                        ))}
                    </div>

                </Col>

                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 2, padding: '24px 0' }}>
                    {/* Creating new PostButton */}

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CreatePostButton />

                    </div>
                    <div style={{ paddingTop: '12px' }}>
                        {
                            posts.map(post => (<SinglePostView post={post} />))
                        }
                    </div>
                </Col>
                <Col style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', flex: 2, padding: '24px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <CreateEventButton />

                    </div>
                    <div style={{ paddingTop: '12px' }} >
                    {
                            events.map(event => (<SingleEventView event={event} />))
                        }
                    </div>

                    {/* Please Keep Notes below--- I want to eventually create a page that prompts up if there is no posts in regards to a subject. */}

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