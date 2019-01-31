import React, { Component } from 'react'
import { Button } from 'reactstrap'

export class AddTodo extends Component {


    //componene STATE only esxits in the component
    state = {
        title : ''
    }

    /*ADD todo from input */
    addTodo = (e) => {

        // console.log('from input-name > ',e.target.name);
        // console.log('from input-> ',e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    //ENVIAR LOS DATOS por el form haci el padre. App.js
    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        //clear
        this.setState({ [e.target.name] : '' });
    };

    render() {
    return (
            <form onSubmit={this.onSubmit} style= {{ display: 'flex'}}>
         {/* <form onSubmit={this.onSubmit} style= {{ display: 'flex'}}> */}

                <label style= {{ flex: '2'}}>New TODO</label>

                <input type="text"  name="title" 
                style={{flex: '4' , padding:'0.2em' }}
                placeholder="add todo ..."
                value= {this.state.title}
                onChange= {this.addTodo}/>

                {/* <Button  onClick={this.onSubmit} color="info">Add</Button>{' '} */}
                <Button  onClick={this.onSubmit} color="info">Add</Button>{' '}

                {/* <input type="submit" value="Add"
                    className="btn"
                    style= {{ flex: '1'}} /> */}
            </form>
        )
    }   
}

const btn = {

}

export default AddTodo
