import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {wordListTitle} from '../../../componments/constobject/constObject';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));


function TodoList(props) {
  return (
    <>
     
        {props.isLoading ? (
          <div style={{ background: "blue" }}>IsLoading Status</div>
        ) : props.data ? (
          <Box sx={{ flexGrow: 1 , marginTop:"50px" }}>
           <Grid container spacing={2}>
              <Grid item xs={1}>
                <Item sx={{fontSize:"15px"}}>{wordListTitle.no}</Item>
              </Grid>
              <Grid item xs={3}>
              <Item sx={{fontSize:"15px"}}>{wordListTitle.word}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{fontSize:"15px"}}>{wordListTitle.hinagara}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{fontSize:"15px"}}>{wordListTitle.translate}</Item>
            </Grid>
            </Grid>
            {props.data.map((item, index) => (
              <Grid container spacing={2}>
              <Grid item xs={1}>
                <Item>{item.id}</Item>
              </Grid>
              <Grid item xs={3}>
              <Item>{item.word}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{item.hatuou}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{item.translate}</Item>
            </Grid>
            </Grid>
            ))}
          </Box>
        ) : (
          <div></div>
        )}
      
      
    </>
  );
}

export default TodoList;
