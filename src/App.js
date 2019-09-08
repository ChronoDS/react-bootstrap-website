import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <PageWrapper>
                <Route
                    path={'/'}
                    component={Home}
                />
            </PageWrapper>
        </Router>
    );
}

export default App;
