import React from "react";
function TodoList(props) {
  return (
    <>
      <ul>
        {props.isloading ? (
          <div style= {{background:'black'}} >IsLoading Status</div>
        ) : props.data?(
          
          <ul>
          {props.data.map((item, index) => (
            <li key={index}>
              {item.shopId}, {item.shopMsg}, {item.shopName}
            </li>
          ))}
          </ul>
        ):(<div></div>)}
      </ul>
    </>
  );
}

export default TodoList;
