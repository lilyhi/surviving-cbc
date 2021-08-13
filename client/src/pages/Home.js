// When it comes time, integrate Apollo Hooks:
import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS } from '../utils/queries';
import React from 'react';

const Home = () => {

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
                    <button className="dropdown-item" type="button">HTML</button>
                    <button className="dropdown-item" type="button">CSS</button>
                    <button className="dropdown-item" type="button">JS</button>
                    <button className="dropdown-item" type="button">JSON</button>
                    <button className="dropdown-item" type="button">JQuery</button>
                    <button className="dropdown-item" type="button">Node</button>
                    <button className="dropdown-item" type="button">Web APIs</button>
                    <button className="dropdown-item" type="button">Server-Side APIs</button>
                    <button className="dropdown-item" type="button">Third-Party APIs</button>
                    <button className="dropdown-item" type="button">MySQL</button>
                    <button className="dropdown-item" type="button">React</button>
                    <button className="dropdown-item" type="button">NoSQL</button>
                    <button className="dropdown-item" type="button">Express.js</button>

                </div>
            </div>
            {/* Sudo Coding:
            //Collum 1: Drop down options featuring subject types col-2
            //Collum 2: Post Section col-5
            -   should have Create Post button
            //Collum 3: Events/Scheduled meet ups. col-5
            -   Should have Create even button. */}
        </main>
    )
}
export default Home;