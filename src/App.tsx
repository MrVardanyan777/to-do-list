import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <>
      <section className="w-full h-[100vh] bg-[#b2bec3] flex justify-center items-center flex-col">
        <h1 className="font-serif text-[28px] my-2 tracking-wider font-light">To-Do List</h1>
        <Board />
      </section>
    </>
  );
}

export default App;
