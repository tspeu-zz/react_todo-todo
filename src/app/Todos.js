import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class  Todos extends Component {
    // state = { :  }

    

    render() { 
        console.log('from app.js', this.props.todos);
        return this.props.todos.map( (t) =>  (

            <TodoItem key= {t.id} todo = { t } />
            // <span>{t.id} </span>    
            // <p> key:{ t.id} |  {t.title}</p>    
        ));
    }
}

//IS a validatios like and interface->
Todos.propTypes = {
    todos : PropTypes.array.isRequired
}

export default Todos;