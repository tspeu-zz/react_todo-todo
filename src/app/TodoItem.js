import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';



export  class TodoItem extends Component {

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
        
    }

    render() {
        return (
            <ListGroup>
            <ListGroupItem style= { this.getStyle() }> { this.props.todo.title } </ListGroupItem>
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
