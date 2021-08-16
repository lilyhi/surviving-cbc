// When it comes time, integrate Apollo Hooks:
import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';

import React, { useState } from 'react';
import Post from '../components/Post';
import SubjectButton from '../components/SubjectButton';

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
                    {/* <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                    </ul> */}
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select A Subject
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {subjects.map(subject => (
                        <SubjectButton subject={subject} clickEvent={setCurrentSubject} />
                    ))}

                </div>
            </div>
            {
                currentSubject
                    ? <Post />
                    : <div> (included the ':') make another component for the home screen if nothing is clicked </div>
            }
                {/* //post.length, post.map reference line 53 above, to add info for two */}

            {/* Sudo Coding: // 
            
            //Collum 2: Post Section col-5
            -   should have Create Post button
            //Collum 3: Events/Scheduled meet ups. col-5
            -   Should have Create even button. */}
        </main>
    )
}
export default Home;