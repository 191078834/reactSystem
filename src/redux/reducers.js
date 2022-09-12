const defaultState = { items: [], text: "" };

function reducers(prestate = defaultState, action) {
  const { type, data } = action;

  switch (type) {
    case "add_item":
      let newState = prestate;
      newState.items = prestate.items.concat(data);
      return newState;

    case "add_text":
      prestate.text = data;
      return prestate;
    case "delete_items":
      //①
      prestate.items.splice(
        prestate.items.findIndex((item) => item.id === data.id),
        1
      );

      //②
      //prestate.items.filter(prestate=>prestate. items.id===data.id)
      return prestate;

    default:
      return prestate;
  }
}

export default reducers;
