import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import useDataApi from "../../api/usePersonalState";
import CommonButton from "../../componments/common/CommonButton/CommonButton";
import ResponsiveDatePickers from "../../componments/common/ResponsiveDatePickers/ResponsiveDatePickers";
import { kinyuTableColumns } from '../../componments/constobject/constObject';
import DataListDisp from "./TodoList/DataListDisp"

function WordList() {
  const { isLoading, isError, data, doFetch } = useDataApi("http://localhost:8090/wordlist/search", []);
  let fromTimeRef = React.useRef([]);
  let toTimeRef = React.useRef([]);
  let textFocus = React.useRef([])

  React.useEffect(()=>{
    textFocus.current.focus()
  },[])


  return (
    <Container sx={{ mr: 50 }}>
      <Container>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            let text = textFocus.current.value
            let textParams = `?word=` + text;
            let fromTime = `&fromTime=` + fromTimeRef.current.getValue()
            let toTime = `&toTime=` + toTimeRef.current.getValue()
            let url = `http://localhost:8090/wordlist/search`+textParams+fromTime+toTime
            console.log(url)
            doFetch(url);
          }}
        >
          <TextField
            placeholder="単を語探して"
            sx={{ width: 400 }}
            inputRef={textFocus}
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
            <DataListDisp rows={data} columns={kinyuTableColumns} isLoading={isLoading} isError={isError} />
          </Box>
        </Grid>
      </Container>
    </Container>

  );
}
export default WordList
