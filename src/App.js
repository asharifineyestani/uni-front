import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import Header from './components/Header'
import Posts from './scenes/Posts'
import Post from './scenes/Posts/Post'
import SignUp from './scenes/Auth/SignUp'
import SignIn from './scenes/Auth/SignIn'
import './app.scss'

function App() {
    return (
        <AuthContext.Provider value={false}>
            <Router>
                <Header />
                <div className="app-wrapper">
                    <Switch>
                        <Route path="/" exact>
                            <h1>Home</h1>
                        </Route>
                        <Route path="/posts" exact>
                            <Posts />
                        </Route>
                        <Route path="/posts/:slug" exact>
                            <Post />
                        </Route>
                        <Route path="/sign-up" exact>
                            <SignUp />
                        </Route>
                        <Route path="/sign-in" exact>
                            <SignIn />
                        </Route>
                        <PrivateRoute path="/admin" component={Posts} />
                    </Switch>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;