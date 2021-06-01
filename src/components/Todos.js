import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
render(){
  return (
    this.props.todos.map((todo) => {
    return  <TodoItem key={todo.id} todo={todo} />
  })
)
};
}


//PropType
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;