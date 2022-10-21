import React from "react";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import TodoList from "./TodoList/TodoList"
import useDataApi from "../../api/usePersonalState";
import CommonButton from "../../componments/common/CommonButton/CommonButton";
import ResponsiveDatePickers from "../../componments/common/ResponsiveDatePickers/ResponsiveDatePickers";
function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("http://localhost:8090/wordlist", []);
  const [text, setText] = useState();
  let fromTimeRef = React.useRef([]);
  let toTimeRef = React.useRef([]);
 

  return (
    <Container maxWidth="xl" sx={{ml:'100px'}} >
      <Box
        component="form"
        sx={{ml:'200px'}}
        onSubmit={(e) => {
          e.preventDefault();
          let getParams = `?word=`+ text ;
          console.log(fromTimeRef.current.getValue())
          console.log(toTimeRef.current.getValue())
          // doFetch(`http://localhost:8090/wordlist`+getParams);
        }}
      >
        <TextField 
          placeholder="単を語探して"
          sx={{  width: 400 }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
         <ResponsiveDatePickers ref={fromTimeRef} />
         <ResponsiveDatePickers ref={toTimeRef} />
        <CommonButton  variant="contained" color="primary" size="large" type="submit" >
          検索
        </CommonButton>
       
      </Box>
      
      <TodoList data={data} isLoading={isLoading} isError={isError} />
    </Container>
 
  );
}
export default WordList
