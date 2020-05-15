import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title : ''
    }

    changeInput = (e) => {
        this.setState({
            // To avoid title,name,email etc.. different form field state managing manually we use the name attribute
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:""});
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} style={{display:'flex', flexWrap : 'wrap'}}>
                <input type="text" name="title" placeholder="Add Todo..." style={inputStyle} value={this.state.title} onChange = {this.changeInput} />
                <input className="btn" type="submit" value="Add" style={{flex:'1'}}/>
            </form>
        )
    }
}

const inputStyle = {
    padding : '10px',
    flex : '10'
}
//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
