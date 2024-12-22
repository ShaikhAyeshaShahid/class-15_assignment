// src/app/todos/[id]/page.tsx
const TodoDetails = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const todo = await res.json();
    
    return (
      <div>
        <h1>Todo: {todo.title}</h1>
        <p>{todo.completed ? "Completed" : "Not completed"}</p>
      </div>
    );
  };
  
  export default TodoDetails;
  