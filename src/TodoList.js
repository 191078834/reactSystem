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
                {item.id}&#8195;
                {item.word}&#8195;
                {item.hatuou}&#8195;
                {item.translate}
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
