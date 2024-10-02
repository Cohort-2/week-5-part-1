import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//todo app

// our state will look something like this

// todos : [{
//   title : "todo 1",
//   description : "todo 1 description",
//   status : "todo 1 status"
// }]

function App() {
  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      description: "todo 1 description",
      completed: true,
    },
    {
      title: "todo 2",
      description: "todo 2 description",
      completed: true,
    },
    {
      title: "todo 3",
      description: "todo 3 description",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "todo 4",
        description: "todo 4 description",
        completed: false,
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {/* step 1 */}
      {/* <div>{JSON.stringify(todos)}</div> */}

      {/* step 2 */}
      {/* <Todo title="dance" description="dance description"></Todo>
      <Todo title="dance" description="dance description"></Todo>
      <Todo title="dance" description="dance description"></Todo>
      <Todo title="dance" description="dance description"></Todo> */}

      {/* step 3 */}
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}

      {/* step 4  */}
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
