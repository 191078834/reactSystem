import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {wordListTitle} from '../../../componments/constobject/constObject';
import {kinyuTableColumns}   from '../../../componments/constobject/constObject';
import DataListDisp from  './DataListDisp';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));


function TodoList(props) {
  return (
    <Box>
    <Grid container spacing={2} id={2}>
     
        {props.isLoading ? (
         <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item sx={{fontSize:"15px"}}>IsLoading Status</Item>
            </Grid>
          </Grid>
          </Box>
        ) : props.data ? (
          <Box sx={{ flexGrow: 1 ,marginTop:'50px'}}>
            {/* <Grid container spacing={2} id={2}>
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
            </Grid> */}
            {/* {props.data.map((item, index) => ( 
              <Grid container spacing={2}key={index}>
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
            ))} */}
            <DataListDisp rows={props.data} columns={kinyuTableColumns} />
            </Box>
        ) : (
          <Box sx={{ flexGrow: 1 ,marginTop:'50px'}}>
            <Grid container spacing={2} id={2}>
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
            </Box>
        )}
      
      
        </Grid>
      </Box>
  );
}

export default TodoList;
