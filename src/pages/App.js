import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Navbar from '../componments/Navbar/Navbar';
import React from 'react'

function App() {
  return (
    <Grid container>
      <Navbar/> 
      <Outlet />
    </Grid>
  );
}

export default App;
