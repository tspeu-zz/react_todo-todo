import React , {Component }from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link }  from 'react-router-dom';
// import logo from '../../../logo.svg';


class NavBarHeader extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        }

    }
    
    toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }


        render() {
        return (
            <Navbar color="dark" dark>

            <NavbarBrand href="/" className="mr-auto">
                {/* <img src={logo}  alt="logo"/> */}
                Todo React
            </NavbarBrand>

            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem className="white-text">
                            {/* <NavLink href="/components/" >Components</NavLink> */}
                            <Link to="/"  className="white-text">Home</Link>
                        </NavItem>
                        <NavItem >
                            {/* <NavLink href="/components/" >Components</NavLink> */}
                            <Link to="/about" >about</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink target="_blank" href="https://github.com/tspeu">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default NavBarHeader;