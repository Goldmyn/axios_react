import GetUsers from "./UserList";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl uppercase text-blue-500 text-center my-4 shadow p-3 sticky top-0 bg-white">
        List of Users
      </h1>
      <GetUsers />
    </>
  );
}

export default App;
