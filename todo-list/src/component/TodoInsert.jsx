import React, { Component } from "react";
import "../css/TodoInsert.css";

class TodoInsert extends Component {
  state = {
    todo: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // this.state.todo = e.target.value
  };
  onCreate = (e) => {
    //alert(this.state.todo);
    const { onCreate } = this.props;
    onCreate(this.state.todo);
  };

  render() {
    return (
      <div className="form">
        <input
          value={this.state.todo}
          onChange={this.onChange}
          name="todo"
          placeholder="할일을 입력하세요 ʕ•ﻌ•ʔ"
        />
        <div className="todo-insert" onClick={this.onCreate}>
          추가
        </div>
      </div>
    );
  }
}

export default TodoInsert;
