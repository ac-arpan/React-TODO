import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Axios from 'axios';

export class App extends Component {
  
  state = {
    todos : [
        
    ]
}
  componentDidMount() {
    // GET request with axios library

    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    // .then(res => this.setState({todos : res.data}))

    //Get request with vanilla javaScript
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(res => res.json())
    .then(data => this.setState({todos : data}))
  }
  // Toggle completed
  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
    
  }

  //delete todo
  delTodo = (id) => {
    
    // Delete request to axios
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
      }) )
  }

  // Handle addTodo
  addTodo = (title) =>{
    // when thw todos were hardcoded
    // const newTodo = {
    //   id : Math.round(4 + (100-4)*Math.random()),
    //   title : title,
    //   completed : false
    // }

    // POST request with axios
    Axios.post('https://jsonplaceholder.typicode.com/todos',{
      title : title,
      completed :false
    }).then(res => this.setState({
      todos : [...this.state.todos, res.data]
    }))

    
  }
  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div  className="App">
          <div className="container">
            <Header />

            <Route exact path='/' render={ props => (
              <React.Fragment>
                <AddTodo addTodo= {this.addTodo}/>
                {/* Passing todos array as a props in todos Component */}
                <Todos todos= {this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component = {About}></Route>

          </div>
        </div>
      </Router>
    )
  }
}

export default App

