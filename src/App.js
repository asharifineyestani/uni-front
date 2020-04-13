import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Blog from './scenes/Blog'
import './app.scss'

function App() {
    return (
        <Router>
            <Header />
            <div className="app-wrapper">
                <Route path="/blog">
                    <Blog />
                </Route>
            </div>
        </Router>
    );
}

export default App;