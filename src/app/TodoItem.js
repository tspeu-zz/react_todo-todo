import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Input} from 'reactstrap';
import PropTypes from 'prop-types';



export  class TodoItem extends Component {



/* @ GET STYLE WHEN STATUS COMPLETE  */
    getStyle = () => {
        return {
                background: '#fef4f4',
                textDecoration : this.props.todo.completed ? 'line-through' : 'none',
                color : this.props.todo.completed ? '#7aa711' : '#a71b11',
                fontStyle: this.props.todo.completed ? 'normal' : 'italic',
                fontWeight: this.props.todo.completed ? 'normal' : 'bold'
                }
        // if(this.props.todo.completed) {
        //     return{ textDecoration: 'line-through'}
        // } else {
        //     return{ textDecoration: 'none'};
        // }
    };

//* @  PASS EVENT TROUGH PARENT COMPONENTE CLAIM-LADER TO MARK COMPLETE TASK*/
//USAR ARR => porque al estar dentro de COMPONENT this.props tiene valor 
    // markComplete(e) {
    //     console.log(this.props); //undefined al ser un metdo custom
    //     console.log(this.props); //this.markComplete.this.bind(this)    
    // }

    // markComplete = (e) => {
    //     console.log(this.props.todo.id);
    // }; 


    /* @ https://javascriptplayground.com/es6-destructuring/ */
    //sacar las variables del this, o de un objeto


    render() {
    // destructuring dentro del contexto
        const {id, title} = this.props.todo;

        return (
            <ListGroup>
            <ListGroupItem style= { this.getStyle() }>
                                                {/*SE ASIGNA AL PROPS PARA IR SUBIENDO AL PADRE   */}
                <Input addon type="checkbox"  
                // onChange={ this.props.markComplete.bind(this, this.props.todo.id) } />
                onChange={ this.props.markComplete.bind(this, id) } />
                    {''} { this.props.todo.title } 
                <button onClick={this.props.delTodo.bind(this, id)}  style={btnStyle}> x </button>
                                                {/*SHAY QUE PASAR EL ID    */}
            </ListGroupItem>
        </ListGroup>
    
    )}
}

//IS a validatios like and interface->
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

const btnStyle = {
    background: '#dd1c0e',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '75%',
    cursor: 'pointer',
    float: 'right'
}

const itemStyle = {
    fontSize: 24,
    textDecoration: 'line-through'
}



export default TodoItem
