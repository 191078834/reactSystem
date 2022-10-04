import React from "react";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TodoList from "./TodoList/TodoList"
import useDataApi from "../../api/usePersonalState";
import CommonButton from "../../componments/common/CommonButton/CommonButton";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("http://localhost:8090/wordlist", "");
  const [text, setText] = useState("");

  return (
    <Container maxWidth="lg" sx={{ml:'150px'}}>
      <Box
        component="form"
        sx={{ml:'400px'}}
        onSubmit={(e) => {
          e.preventDefault();
          doFetch(`http://localhost:8090/wordlist/`);
        }}
      >
        <Input
          placeholder="単を語探して"
          sx={{ height: 50, width: 300 }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <CommonButton  variant="contained" color="primary" size="medium">
          検索
        </CommonButton>
      </Box>
      <TodoList data={data} isLoading={isLoading} />
    </Container>
 
  );
}
export default WordList;
