import React, { useState } from "react";

function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text: text.trim(), done: false };
    setTodos(prev => [...prev, newTodo]);
    setText(""); 
  };

  const toggleDone = id => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="bg-black text-white w-[50%] m-auto">
      <h3 className="font-bold text-2xl p-5">Todo App</h3>
      <form onSubmit={addTodo}>
        <input required className="text-black  m-5 active:border-red-600 bg-white border-white  p-2" value={text} onChange={e => setText(e.target.value)} />
        <button className="font-bold text-green-500 px-5 py-2 bg-gray-600 rounded-2xl" type="submit">Add</button>
      </form>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input className="text-white m-5" type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
            {t.text}
            <button className="m-6 text-red-700 font-bold" onClick={() => removeTodo(t.id)}>X Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;