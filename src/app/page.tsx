import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const todoUrl = await fetch("https://jsonplaceholder.typicode.com/todos");

  console.log("Fetch URL:", url);
  console.log("Fetch todoUrl:", todoUrl);

  const response = await url.json(); // users
  const todoResponse = await todoUrl.json(); // todos

  console.log("Users:", response);
  console.log("Todos:", todoResponse);

  return (
    <main>
      <div>
        <h2>Users</h2>
        {response.map((user: { id: number; name: string }) => (
          <div key={user.id}>
            <Link href={`/user/${user.id}`}>
              {user.name}
            </Link>
          </div>
        ))}
      </div>

      <hr />

      <div >
        <h2>Todos</h2>
        {todoResponse.map((todo: { id: number; title: string }) => (
          <div key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              {todo.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
