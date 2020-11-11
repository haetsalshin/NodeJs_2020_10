import React, { Component } from "react";
import "../css/TodoMain.css";
import "./TodoInsert";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

/**
 * class 방식의 Component
 * 반드시 react Component 클래스를 상속받아야 한다
 * render() method를 사용하여 실제 view를 구현하도록 되어있다
 * 함수 방식에서 바로 나타나던 return문이 render() method 내부에 위치한다
 */

class TodoMain extends Component {
  id = 3;
  // class방식에서 state변수 선언하기
  state = {
    // todoList 를 배열로 생성하기

    todoList: [
      { id: 0, text: "오늘은 빼빼로데이", isComplete: false },
      { id: 1, text: "오늘은 수요일", isComplete: true },
      { id: 2, text: "Todo List만드는 날이라구!", isComplete: false },
    ],
  };

  /**
   * class방식의 main에서 event함수를 선언하는 방법
   * const 키워드 없이 함수를 선언하라
   */
  onToggle = (id) => {
    //id값을 기준으로 todoList 변수의 isComplete를 변경
    // 1. this.state에 todoList 변수를 추출
    const { todoList } = this.state;
    const compTodoList = todoList.map((todo) => {
      if (todo.id === Number(id))
        return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    /**
     * 클래스 방식 Component에서는 state변수를 setting하기 위한 setter를
     * 별도로 만들지 않는다
     *
     * state변수를 setting하기 위해서는
     * this.setState()라는 공통함수를 사용한다
     *
     * this.setState({state변수 : 새로운 값}) 형식으로 setting을 한다
     */
    this.setState({ todoList: compTodoList });
  };

  onCreate = (todo) => {
    const newTodoList = [
      ...this.state.todoList,
      { id: this.id++, text: todo, isComplete: false },
    ];
    this.setState({ todoList: newTodoList });
  };
  onDeleteItem = (id) => {
    const deleteTodoList = this.state.todoList.filter((todo) => {
      if (todo.id !== Number(id)) return todo;
    });
    this.setState({ todoList: deleteTodoList });
  };

  render() {
    return (
      <main className="todo-main">
        <h3>🌹TO-DO LIST🌹</h3>
        <TodoInsert onCreate={this.onCreate} />
        <TodoList
          todoList={this.state.todoList}
          onToggle={this.onToggle}
          onDeleteItem={this.onDeleteItem}
        />
      </main>
    );
  }
}

export default TodoMain;
