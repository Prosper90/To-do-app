import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";

import Header from "./components/layout/Header";
import "./App.css";

class App extends Component {
state = {

  todos : [
    {
      id: 1,
      title: "Take it out man",
      completed: false
    },
    {
      id: 2,
      title: "Dinner with girlfriend",
      completed: false
    },
    {
      id: 3,
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

  render(){
    //console.log(this.state.todos);
    return(
      <div className="App">
      <div className="container">
        <Header />
        <AddTodos />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
      </div>
    )
  };
}

export default App;
