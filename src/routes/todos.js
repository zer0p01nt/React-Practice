import { Link } from "react-router-dom";
import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos((currentToDos) =>
      currentToDos.filter((_, currentIndex) => currentIndex !== index)
    );
  };
  return (
    <div class='container'>
      <h1 class='title'>My To Dos ({toDos.length})</h1>
      <form class='todos-form' onSubmit={onSubmit}>
        <input
          class='todos-input'
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button class='todos-btn'>Add To Do</button>
      </form>
      <ul class='todos'>
        {toDos.map((item, index) => (
          <li class='todo' key={index}>
            {item}
            <button class='todos-delete' onClick={() => deleteBtn(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <button class='toHome'>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
      </button>
    </div>
  );
}

export default ToDoList;
