import React from "react";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TodoList from "./TodoList";
import useDataApi from "./usePersonalState";
// import reducers from "./redux/reducers";
// import TextInputWithFocusButton from "./TextInputWithFocusButton";
function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("", "");
  const [text, setText] = useState("");

  return (
    <div style={{marginLeft:'500px'}}>
    <Container maxWidth="lg" sx={{ml:'500px'}}>
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
 
    </div>
  );
}
export default WordList;
