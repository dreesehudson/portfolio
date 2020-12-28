import React from 'react';
import { Container } from 'reactstrap';
import Blog from './Blog';
import Projects from './Projects';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return (
        <Container>
            <Router>
                <Switch>
                    <Route path='/blog'>
                        <Blog />
                    </Route>
                    <Route path='/'>
                        <Projects />
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default Main
