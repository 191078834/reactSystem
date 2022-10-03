import React from "react";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TodoList from "./TodoList/TodoList"
import useDataApi from "../../api/usePersonalState";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("http://localhost:8090/wordlist", "");
  const [text, setText] = useState("");

  return (
    <Container maxWidth="lg" sx={{ml:'300px'}}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          doFetch(`http://localhost:8090/wordlist/`);
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
export default WordList;
