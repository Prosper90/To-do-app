import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import Header from "./components/layout/Header";
import About from "./components/pages/About"
import "./App.css";
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
state = {

  todos : [
    {
      id: uuidv4(),
      title: "Take it out man",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Dinner with girlfriend",
      completed: false
    },
    {
      id: uuidv4(),
      title: "i ve got supplies",
      completed: true
    }
  ]

}

//Toggle complete
markComplete = (id) => {
 this.setState({todos: this.state.todos.map((todo) => {
   if(todo.id === id){
     todo.completed = !todo.completed
   }
   return todo;
 })});
}

//Delete todo
 delTodo = (id) =>{
   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
 }

 //Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}
  render(){
    //console.log(this.state.todos);
    return(
      <Router>
      <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
          <AddTodos addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />
      </div>
      </div>
      </Router>
    );
  };
}

export default App;
