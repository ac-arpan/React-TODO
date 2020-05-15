import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {

    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px dotted #ccc',
            textDecoration :this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //destructuring
        const {id,title} = this.props.todo;
        return (
            // <div style={{backgroundColor : '#f4f4f4'}}>
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// // itemStyle can be used as a variable to style a div
// const itemStyle = {
//     backgroundColor:'#f4f4f4'
// }

const btnStyle = {
    backgroundColor:'#ff0000',
    color:"white",
    border:'none',
    padding:'5px 10px',
    borderRadius : '50%',
    cursor: 'pointer',
    float: 'right',
    outline:'none'
}

export default Todoitem
