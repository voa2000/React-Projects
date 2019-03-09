import React, { Component } from 'react';
import Todos from './components/Todos';
//import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

import './App.css';
import { threadId } from 'worker_threads';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with daughter',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with myself',
        completed: false
      },
      {
        id: 4,
        title: 'Meditate on self learning approach',
        completed: false
      }
    ]
  }
//Toggle mark todo complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id  ) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
  
}
//Delete todo
delTodo = (id) =>  {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}
/* Add todo
AddTodo = (title) =>  {
  const newTodo = {
    id: 4,
    title,
    completed:false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}*/
render() {

  return (

    <div className='App'>
    <div className="container">
    <Header />
    <AddTodo AddTodo={this.state.AddTodo} />

      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
    </div>
  );
}
}

export default App;
