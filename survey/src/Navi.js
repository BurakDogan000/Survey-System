import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class Navi extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    fixed=""
                    light
                >
                    <NavbarBrand href="/">
                        NorthWind App
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink>
                                    <Link to="/form1">
                                        Form Demo 1
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/form2">
                                        Form Demo 2
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navi;