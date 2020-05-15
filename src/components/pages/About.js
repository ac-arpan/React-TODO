import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <React.Fragment >
                <h1 style = {aboutStyle}>About</h1>
                <p style = {aboutStyle}>This is the Todo List app v1.0.0</p>
            </React.Fragment>
        )
    }
}

const aboutStyle = {
    textAlign : 'center'
}

export default About
