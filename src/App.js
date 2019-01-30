import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Todos from './app/Todos';

class App extends Component {

  // state = {
  //   todos : [
  //     {
  //       id : 1, 
  //       title: 'sacar la basura',
  //       completed: false
  //     },
  //     {
  //       id : 2, 
  //       title: 'cenar con la flia.',
  //       completed: false
  //     },
  //     {
  //       id : 3, 
  //       title: 'pasear al perro',
  //       completed: false
  //     }
  //   ]
  // };


  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
      todos : [
        {
          id : 1, 
          title: 'sacar la basura',
          completed: false
        },
        {
          id : 2, 
          title: 'cenar con la flia.',
          completed: false
        },
        {
          id : 3, 
          title: 'pasear al perro',
          completed: false
        }
      ]
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {
    console.log('todos', this.state.todos);

    return (

    <div className="App">
      
      <Navbar color="dark" dark>

        <NavbarBrand href="/" className="mr-auto">
          <img src={logo}  alt="logo"/>Todo React
        </NavbarBrand>

        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="white-text">
              <NavItem >
                <NavLink href="/components/" >Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/tspeu">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code  className="App-link">src/App.js</code> and save to reload.
          </p>
        </div>

          <div className="container">
              <Todos todos={this.state.todos}/>
          </div>

      </div>
    );
  }
}

export default App;
