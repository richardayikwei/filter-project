import { todos } from "./constant/data";
import { useState } from "react";
import Profile from "./assets/profile.jpg";

function App() {
  const [list, setList] = useState(todos);
  const [filter, setFilter] = useState("");

  function Onfilter() {
    setList(todos.filter((todo) => todo.title.includes(filter)));
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function handleDrop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  if (list.length === 0) {
    return (
      <div className="ml-14">
        <div className=" grid grid-rows-1 gap-4">
          <div className="flex w-96 mt-8 justify-between mb-2">
            <div>
              <label htmlFor="filter" className=" w-14 flex ">
                input :
              </label>
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setFilter(e.target.value.trim())}
                id="filter"
                className="border-2 w-60 border-black flex rounded-md"
              />
            </div>

            <div>
              <button
                className="border-2 border-black w-14 rounded-xl bg-green-400 hover:bg-green-600"
                onClick={Onfilter}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center w-96">
            <p>No results found</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ml-14">
        <div className="mt-10 flex justify-between w-96">
          <div
            className="border-2 w-32 h-32  flex"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
          >
            <img
              src={Profile}
              alt=""
              className="w-20 h-28"
              onDragStart={(e) => handleDrag(e)}
              id="drag1"
            />
            <p onDragStart={(e) => handleDrag(e)} id="drap2">hello</p>
          </div>

          <div
            className="border-2 w-32 h-32 justify-center items-center flex"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
          ></div>

          <div
            className="border-2 w-32 h-32 justify-center items-center flex"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
          ></div>
        </div>

        <div className=" grid grid-rows-1 gap-4">
          <div className="flex w-96 mt-8 justify-between mb-2">
            <div>
              <label htmlFor="filter" className=" w-14 flex ">
                input :
              </label>
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setFilter(e.target.value.trim())}
                id="filter"
                className="border-2 w-60 border-black flex rounded-md"
              />
            </div>

            <div>
              <button
                className="border-2 border-black w-14 rounded-xl bg-green-400 hover:bg-green-600"
                onClick={Onfilter}
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-rows-1 gap-4">
            {list.map((todo) => (
              <div key={todo.id} className="flex justify-between w-96">
                <div className="w-14">
                  <p>{todo.id}</p>
                </div>
                <div
                  className={`w-60 text-left ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  <p> {todo.title}</p>
                </div>

                <div className="w-14">
                  <button
                    className="border-2 border-black w-16 rounded-xl bg-[#fd5c63] hover:bg-[#EF0107]"
                    onClick={() => {
                      setList(list.filter((l) => l.id !== todo.id));
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
