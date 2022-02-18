
import React from 'react'
import { Form, Navbar, Button, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from  '../../Image/UON.png'
function Header() {
    return (
        <Navbar bg="light" expand="lg" >
                
                <Navbar.Brand href="./" className="pt-0 pb-0" >
                    <h1 className="mb-0"> <span><img className="nav-img" src={logo} width={100} height={100} /></span>iPath</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>

                    </Nav>
                    <Form inline>
                        <Link className="btn btn-lg mt-4" to="/Home">Logout</Link>
                    </Form>
                </Navbar.Collapse>
        
            </Navbar>
    )
}

export default Header