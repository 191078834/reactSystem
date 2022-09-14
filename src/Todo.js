import React from "react";
import { useState, Fragment } from "react";
import { Box, Container } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TodoList from "./TodoList";
import useDataApi from "./usePersonalState";
// import reducers from "./redux/reducers";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function Todo() {
  const { isLoading, isError, data, doFetch } = useDataApi("", "");
  const [text, setText] = useState("");

  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          doFetch(`http://localhost:8090/search/text`);
          // doFetch(`http://localhost:8090/search?text=${text}`);
        }}
      >
        <Input
          placeholder="Placeholder"
          sx={{ height: 50, width: 300 }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <Button type="submit" variant="contained" size="large">
          submit
        </Button>
      </Box>
      <TodoList data={data} isLoading={isLoading} />
    </Container>
  );
}
export default Todo;
