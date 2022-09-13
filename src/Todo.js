import React from "react";
import Mock from "mockjs";
import { ReactDOM } from "react-dom";
import { useEffect, useState, useReducer, Fragment } from "react";
import TodoList from "./TodoList";
import useDataApi from './usePersonalState'
// import reducers from "./redux/reducers";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function Todo() {
  const  {isLoading, isError, data, doFetch } = useDataApi('', '');
  const [text, setText] = useState("");


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          doFetch(`http://localhost:8090/search/text`);
          // doFetch(`http://localhost:8090/search?text=${text}`);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button type="submit"> submit </button>
      </form>
      <TodoList data={data} isLoading={isLoading} />
    </>
  );
}
export default Todo;
