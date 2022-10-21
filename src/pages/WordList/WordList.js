import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import TodoList from "./TodoList/TodoList"
import useDataApi from "../../api/usePersonalState";
import CommonButton from "../../componments/common/CommonButton/CommonButton";
import ResponsiveDatePickers from "../../componments/common/ResponsiveDatePickers/ResponsiveDatePickers";
import CommonLoadingButton from "../../componments/common/CommonLoadingButton/CommonLoadingButton"
import { kinyuTableColumns } from '../../componments/constobject/constObject';
import DataListDisp from "../WordList/TodoList/DataListDisp"

function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("http://localhost:8090/wordlist", []);
  const [text, setText] = useState();
  let fromTimeRef = React.useRef([]);
  let toTimeRef = React.useRef([]);


  return (
    <Container sx={{mr:50}}>
      <Container>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            let getParams = `?word=` + text;
            console.log(toTimeRef.current.getValue())
            // doFetch(`http://localhost:8090/wordlist`+getParams);
          }}
        >
          <TextField
            placeholder="単を語探して"
            sx={{ width: 400 }}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <ResponsiveDatePickers ref={fromTimeRef} />
          <ResponsiveDatePickers ref={toTimeRef} />
          <CommonButton variant="contained" color="primary" size="large" type="submit" >
            検索
          </CommonButton>
        </Box>
      </Container>
      
      <Container >
      <Grid container spacing={2} >
        <Box sx={{ flexGrow: 1, mt: 5 }} key={data}>
          <DataListDisp rows={data} columns={kinyuTableColumns}  isLoading={isLoading} isError={isError} />
        </Box>
       </Grid>
      </Container>
    </Container>

  );
}
export default WordList
