"use client";

import { useState } from 'react';
import Todo from '@/models/TodoItemModel';

const TodoViewModel = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    const newTodo = new Todo(Date.now(), title, description);
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return { todos, addTodo, toggleTodoCompletion, deleteTodo };
};

export default TodoViewModel;