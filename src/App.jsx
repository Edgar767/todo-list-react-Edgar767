import Todo from "./pages/Todo";

function App() {
  return (
    <div className="bg-[#1b1b1b] text-white">
      <main className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold ">Todo List</h1>
        <Todo />
      </main>
    </div>
  );
}

export default App;
