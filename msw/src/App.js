import { worker } from "./__mock__/worker";

function App() {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  return (
    <>
      <div>
        <h1>Contact</h1>
        <input placeholder="search" />
        <button>Click</button>
        <ul></ul>
      </div>
      <div>
        <h2>Detail Information</h2>
        <span>nana</span>
        <p>010-0000-0000</p>
      </div>
      <div>
        <h2>Create New User</h2>
        <input placeholder="name" />
        <input placeholder="phone-number" />
        <button>Create New User</button>
      </div>
    </>
  );
}

export default App;
