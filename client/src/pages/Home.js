// When it comes time, integrate Apollo Hooks:
import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';

import React, { useState } from 'react';
import SubjectButton from '../components/SubjectButton';

import CreatePostButton from '../components/CreatePostButton';
import Post from '../components/Post';

import Event from '../components/Event'
import CreateEventButton from '../components/CreateEventButton';


const Home = () => {
    const [currentSubject, setCurrentSubject] = useState('')
    // setCurrentSubject as a prop to that button. and passing it in as a prop.
    // useState('') want 
    const subjects = [
        'HTML',
        'CSS',
        'JS',
        'JSON',
        'JQuery',
        'Node',
        'Web APIs',
        'Server-Side APIs',
        'Third-Party APIs',
        'MySQL',
        'React',
        'NoSQL',
        'Express.js',
    ]
    return (
        <main>
            {/* nav bar  */}
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">CBC Helpers</a>
                    </div>
                </div>
            </nav>

            {/* DROPW DOWN SUBJECT MENU */}
        <div className="row justify-content-center">    
            <div className="dropdown col-sm-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select A Subject
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {subjects.map(subject => (
                        <SubjectButton subject={subject} clickEvent={setCurrentSubject} />
                    ))}

                </div>
            </div>

            {/* Creating new PostButton */}

                <div className="col-5">
                    <CreatePostButton />
                    {
                        currentSubject
                            ? <Post />
                            : <div> (included the ':') make another component for the home screen if nothing is clicked </div>

                    }
                </div>
                <div className="col-5">
                    <CreateEventButton />
                    {
                        currentSubject
                            ? <Event />
                            : <div> (included the ':') make another component for the home screen if nothing is clicked </div>

                    }
                </div>
            </div>
                    {/* Please Keep Notes below--- I want to eventually create a page that prompts up if there is no posts inregards to a subject. */}
                    
            {/* //post.length?, post.map reference: 
            {subjects.map(subject => (
                        <SubjectButton subject={subject} clickEvent={setCurrentSubject} /
                        , to add info for two */}

        </main >
    )
}
export default Home;