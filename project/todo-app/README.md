what we discussed ?

1. jsx static vs dynamic
2. state , component and rerendering
3. Arrays in state variable and React createElement syntax , creating you you react like library

Creating a todo app using react

the state should look like this

todos : [{
title : "todo 1",
description : "todo 1 description",
completed : true
},{
title : "todo 2",
description : "todo 2 description",
completed : true
}]

whats the dumbest way to show this on screen ?
--> {JSON.stringify(todos)}

whats even better ?

to create a todo component we need to define a function and pass the data as a prop to the function

const Todo = (props) => {
return (

<div>
<h1>{props.title}</h1>
<p>{props.description}</p>
</div>
);
}

i only have to take care of the state and react will take care of the rerendering

whenever we need to update the state or rerender we use the 2nd thing which
setCount function or else the react wont know you need to rerender

<!-- function addTodo() {
    todos = [...todos,
      {
        title: "todo 4",
        description: "todo 4 description",
        completed: false,
      }
    ]
    );
  } -->

this syntax above wont work because we are not updating the state it wont render the new state

how is react monitoring the props ?
--> any time the parent re-renders it child re-render as well
--> React.memo lets you prevent this from happening

for adding styles >

<!--
<button style={{backgroundColor:"red"}} onClick={addTodo}>
</button> -->

view also has this sort of syntax and this ideology of state , components and rerendering
