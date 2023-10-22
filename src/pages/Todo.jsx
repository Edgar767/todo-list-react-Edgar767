import { useState, useRef, useEffect } from "react";
import ListItem from "../components/Listitem";
import { v4 as uuidv4 } from 'uuid';



function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);


  useEffect(()=>{
    const getTodos = () =>{
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=> response.json())
        .then((data)=>{
          console.log(data);
        })
    };
    getTodos();
  },[]);


  // UseEffect ejecuta efectos de los componentes
  useEffect(()=>{
    console.log("useEffect",todos);
  }, [todos])


  // Nueva tarea
  const addTodo = () => {
    const todoValue = inputRef.current.value;
    const newTodo = {name: todoValue, id: uuidv4(), checked: false};
    console.log("before", todos);
    setTodos([newTodo, ...todos]);
    console.log("after", todos);
    inputRef.current.value = "";
  };

  // Borrar tarea
  const deleteTodo = (id) => {
    // Filtra las tareas y Actualiza el estado
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <input ref={inputRef} type="text" className="rounded-md bg-[#6b7280] px-4 py-2 mt-3" />
        <button onClick={addTodo} className="rounded-md bg-[#2563eb] ml-4 px-4 py-2 hover:bg-blue-900">
          Add task
        </button>
      </div>
      
      <ul className="flex flex-col gap-3">
        {todos.map((todo) => (
          <ListItem key={todo.id} id={todo.id} text={todo.name} onDelete={() => deleteTodo(todo.id)} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
