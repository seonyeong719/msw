import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [lists, setLists] = useState("");

  useEffect(() => {
    fetch("/api/list")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  // 이 버튼을 클릭 시 새로운 유저가 생성되고 유저 정보들이 리스트에 쌓인다.
  const onAddSubmit = (e) => {
    e.preventDefault();

    fetch("/api/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 100000),
        name: e.target.name.value,
        number: e.target.number.value,
        state: false,
      }),
    }).then((res) => {
      fetch("/api/list")
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        });
    });
  };

  // 검색하면 유저 디테일 정보가 나오는 버튼
  const onSearchUser = (el) => {
    el.preventDefault();
    const a = el.target.user.value;

    setLists(list.find((item) => item.name === a));
  };

  return (
    <>
      <form onSubmit={onSearchUser}>
        <h1>Contact</h1>
        <input placeholder="search" name="user" />
        <button>Click</button>

        <ul>
          {list.map((el, idx) => (
            <li key={idx}>{el.name}</li>
          ))}
        </ul>
      </form>
      <div>
        <h2>Detail Information</h2>
        <span>{lists.name}</span>
        <p>{lists.number}</p>
        <button>edit</button>
        <button>remove</button>
      </div>
      <form onSubmit={onAddSubmit}>
        <h2>Create New User</h2>
        <input placeholder="name" name="name" />
        <input placeholder="phone-number" name="number" />
        <button>Create New User</button>
      </form>
    </>
  );
}

export default App;
