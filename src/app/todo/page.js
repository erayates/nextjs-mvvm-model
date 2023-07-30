"use client";

import { useState } from "react";
import TodoViewModel from "@/viewmodels/TodoViewModel";

const TodoView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todoViewModel = TodoViewModel();

  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Title and description cannot be empty.");
      return;
    }

    todoViewModel.addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  const handleToggleCompletion = (id) => {
    todoViewModel.toggleTodoCompletion(id);
  };

  const handleDeleteTodo = (id) => {
    todoViewModel.deleteTodo(id);
  };

  return (
    <div className="flex flex-col font-poppins">
      <h1 className="text-center text-4xl my-5 font-bold uppercase">
        Todo App
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-red-500 py-2 rounded-md" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-xl">Todos:</h2>

        <table className="border-separate table-fixed border-spacing-6 w-[800px]">
          <thead>
            <tr className="text-left text-[#151515]">
              <th className="th-cell-style">Title</th>
              <th className="th-cell-style">Description</th>
              <th className="th-cell-style">Completed</th>
              <th className="th-cell-style">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoViewModel.todos.map((todo) => (
              <tr key={todo.id} className="text-[14px] border border-slate-400">
                <td
                  className={todo.completed ? "line-through" : "no-underline"}
                >
                  {todo.title}
                </td>
                <td
                  className={todo.completed ? "line-through" : "no-underline"}
                >
                  {todo.description}
                </td>
                <td className="text-center">{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    className="bg-green-500 py-1 px-2 rounded-md"
                    onClick={() => handleToggleCompletion(todo.id)}
                  >
                    {todo.completed ? "Incomplete" : "Complete"}
                  </button>
                  <button
                    className="ml-2 bg-red-500 py-1 px-2 rounded-md"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoView;
