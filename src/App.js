import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Todos from './app/Todos';
import NavBarHeader from './app/layout/navar';

class App extends Component {

  state = {
    todos : [
      {
        id : 1, 
        title: 'sacar la basura',
        completed: false
      },
      {
        id : 2, 
        title: 'cenar con la flia.',
        completed: true
      },
      {
        id : 3, 
        title: 'pasear al perro',
        completed: false
      }
    ]
  };


  //@ Recive desde ITemTodos y cambia el estado de markComplete
  checkCompleteTask = (id) => {
    // console.log('--recide de ItemTodo- TODOS', id);
    this.setState({
        todos: this.state.todos.map( t => {
          if(t.id === id) {
            t.completed = !t.completed;
          }
          return t;
        })
        
        });
    // this.props.todos.markComplete
  };


  /* @ BORRDA TODO FROM ItemTodo */
  deleteTodo = (id) => {
    console.log('borra todo desde ITEM TODO > ' , id);
//remove with Filter and rerurn other array
//NO BORRA , hace una copia del Arrar y solo se muetran los que son distintos del que se ha clck
    this.setState({
        todos: [...this.state.todos.filter( t => t.id !== id )]
    });

  }



  render() {
    console.log('todos', this.state.todos);

    return (

      <div className="App">
        
          < NavBarHeader />
      
          <div className="jumbotron">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code  className="App-link">src/App.js</code> and save to reload.
            </p>
          </div>

            <div className="container">
                <Todos todos={this.state.todos} 
                        taskComplete= {this.checkCompleteTask} 
                        borraTodo= {this.deleteTodo } />
            </div>

      </div>
    );
  }
}

export default App;
