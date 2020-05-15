import React, { Component } from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

export class Todos extends Component {

    render() {
        //Accessing from app.js todos array has been passed as a props
        // console.log(this.props.todos);
        return this.props.todos.map(todo => (
                <Todoitem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} />
            )
        )

    }
}

// PropTypes(not mandatory,but a good practice)
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos
