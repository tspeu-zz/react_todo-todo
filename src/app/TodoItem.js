import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import PropTypes from 'prop-types';



export  class TodoItem extends Component {



/* @ GET STYLE WHEN STATUS COMPLETE  */
    getStyle = () => {
        return {
                background: '#fef4f4',
                textDecoration : this.props.todo.completed ? 'line-through' : 'none',
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

    markComplete = (e) => {
        console.log(this.props.todo.id);
    }; 


    render() {
        return (
            <ListGroup>
            <ListGroupItem style= { this.getStyle() }>
                                                {/*SE ASIGNA AL PROPS PARA IR SUBIENDO AL PADRE   */}
                <Input addon type="checkbox"  onChange={ this.props.markComplete } />
                    {' '} { this.props.todo.title } 
            </ListGroupItem>
        </ListGroup>
    
    )}
}

//IS a validatios like and interface->
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}

const itemStyle = {
    fontSize: 24,
    textDecoration: 'line-through'
}



export default TodoItem
