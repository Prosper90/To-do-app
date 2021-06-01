import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {

 getStyle = () => {

   background : "#f4f4f4",
   padding : "10px",
   borderBottom : "1px #ccc dotted",
    if(this.props.todo.completed){
      return { textDecoration: "line-through"}
    } else {
      return { textDecoration: "none"}
    }
  }
  render(){
    return(
      <div style={this.getStyle()}>
      <p>{ this.props.todo.title } </p>
      </div>
    )
  }
}


//PropType
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
export default  TodoItem