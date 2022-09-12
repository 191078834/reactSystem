import React from "react";
import Mock from "mockjs";
import { ReactDOM } from "react-dom";
import { useEffect, useState, useReducer, Fragment } from "react";
import TodoList from "./TodoList";
import useDataApi from './usePersonalState'
import reducers from "./redux/reducers";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function Todo() {
 const  {isloading, isError, data, doFetch } = useDataApi('','');
  const [text, setText] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     setIsError(false);
  //     try {
  //       const result = await fetch(url, {
  //         method: "GET",
  //         mode: "cors",
  //         headers: {
  //           Accept: "application/json,text/plain,*/*",
  //         },
  //       })
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           return data.data;
  //         });
  //       setData(result);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

  // handlerChange(e) {
  //   const action = {
  //     type: "add_text",
  //     data: e.target.value,
  //   };
  //   store.dispatch(action);
  // }

  // clickChange(e) {
  //   e.preventDefault();
  //   if (this.state.text.length === 0) {
  //     return;
  //   } else {
  //     const action = {
  //       type: "add_item",
  //       data: {
  //         id: Date.now(),
  //         item: store.getState().text,
  //       },
  //     };
  //     store.dispatch(action);
  //   }
  // }

  // changeText(textDataId) {
  //   const action = {
  //     type: "delete_items",
  //     data: {
  //       id: textDataId,
  //     },
  //   };
  //   store.dispatch(action);
  // }

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
      <TodoList data={data} isloading={isloading} />
    </>
  );
}
export default Todo;
