// When it comes time, integrate Apollo Hooks:
import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';

import React, { useState } from 'react';
import SubjectButton from '../components/SubjectButton';

import CreatePostButton from '../components/CreatePostButton';
import Post from '../components/Post';

import Event from '../components/Event'
import CreateEventButton from '../components/CreateEventButton';
import { Link } from 'react-router-dom';


const Home = () => {
    const [currentSubject, setCurrentSubject] = useState('')
    // setCurrentSubject as a prop to that button. and passing it in as a prop.
    // useState('') want 
    const subjects = [
        {name: 'HTML', key:1},
        {name: 'CSS', key:2},
        {name: 'JS', key:3},
        {name: 'JSON', key:4},
        {name: 'JQuery', key:5},
        {name: 'Node', key:6},
        {name: 'Web APIs', key:7},
        {name: 'Server-Side APIs', key:8},
        {name: 'Third-Party APIs', key:9},
        {name: 'MySQL', key:10},
        {name: 'React', key:11},
        {name: 'NoSQL', key:12},
        {name: 'Express.js', key:13}
    ]
    return (
        <main>
            {/* nav bar  */}
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand" href="#">CBC Helpers</Link>
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
                        <SubjectButton key={subject.key} subject={subject.name} clickEvent={setCurrentSubject} />
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