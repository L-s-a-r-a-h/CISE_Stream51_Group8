import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import SubmitArticle from "./SubmitArticle";


function ComponentNavigation() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container className="container" fluid>
                        <Navbar.Brand href="/Home"><h4 className="store">Home</h4></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/ArticleSearch"}><h4 className="linkText">Find an article</h4></Nav.Link>
                                <Nav.Link as={Link} to={"/book-list"}><h4 className="linkText">Article List</h4></Nav.Link>
                                <Nav.Link as={Link} to={"/SubmitArticle"}><h4 className="linkText">Request an Article</h4></Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>} />

                    <Route path="/SubmitArticle" element={<SubmitArticle/>}>
                    </Route>

                   
                </Routes>
            </div>
        </Router>
    );
}

export default ComponentNavigation;