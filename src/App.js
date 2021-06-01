import React, { Component } from "react";
import Todos from "./components/Todos";
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

  render(){
    //console.log(this.state.todos);
    return(
      <div className="App">
      <h1>App</h1>
       <Todos todos={this.state.todos} />
      </div>
    )
  };
}

export default App;
