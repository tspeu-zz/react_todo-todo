import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'uuid';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Todos from './app/Todos';
import NavBarHeader from './app/layout/navar';
import AddTodo from './app/AddTodo';
import About from './app/pages/about';

class App extends Component {

  state = {
    todos : [

    ]
  };


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => 
      this.setState({
        todos: res.data
      })
      );
  }

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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
      this.setState({ 
        todos: [...this.state.todos.filter( t => t.id !== id )]
      })
      );
      //remove with Filter and rerurn other array
      //NO BORRA , hace una copia del Arrar y solo se muetran los que son distintos del que se ha clck

  }


  //recibe el add Todo de ITem y crea uno nuevo
  newTodo = (title) => {
    console.log('APP' , title);
    
    // const newTodo = {
    //   id : uuid.v4(),
    //   title,
    //   completed : false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed : false})
    .then(res => this.setState({
              todos : [...this.state.todos, res.data]
            })
        );
  }

  render() {
    console.log('todos', this.state.todos);

    return (
      <Router>
        <div className="App">
        < NavBarHeader />

        <Route exact path="/" render={ props =>(
          <React.Fragment>
            <div className="jumbotron">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Edit <code  className="App-link">src/App.js</code> 
                and save to reload. </p>
            </div>
            <div className="container-fluid p-3">
                < AddTodo addTodo ={ this.newTodo}  />
            </div>
            <div className="container">
              <Todos  
                todos={this.state.todos} 
                taskComplete= {this.checkCompleteTask} 
                borraTodo= {this.deleteTodo } />
            </div>
          </React.Fragment>
        )} />

        <Route path="/about" component= {About} />


        


        </div>
      </Router>
    );
  }
}

export default App;
