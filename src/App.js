import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Posts from './scenes/Posts'
import Post from './scenes/Posts/Post'
import Requests from './scenes/Posts'
import Request from './scenes/Posts/Post'
import SignUp from './scenes/Auth/SignUp'
import SignIn from './scenes/Auth/SignIn'
import './app.scss'

function App() {
    return (
        <Router>
            <Header />
            <div className="app-wrapper" exact>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/posts/:id" exact>
                    <Post />
                </Route>
                <Route path="/requests">
                    <Requests />
                </Route>
                <Route path="/requests/:id" exact>
                    <Request />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
                <Route path="/sign-in" exact>
                    <SignIn />
                </Route>
            </div>
        </Router>
    );
}

export default App;