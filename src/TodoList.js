import React from "react";
function TodoList(props) {
  return (
    <>
      <ul>
        {props.isLoading ? (
          <div style={{ background: "blue" }}>IsLoading Status</div>
        ) : props.data ? (
          <ul>
            {props.data.map((item, index) => (
              <li key={index}>
                {item.id}, {item.word}, {item.hatuou},{item.translate}
              </li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
      </ul>
    </>
  );
}

export default TodoList;
