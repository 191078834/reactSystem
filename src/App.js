import logo from './logo.svg';
import './App.css';
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Navbar from './componments/Navbar/Navbar';

function App() {
  return (
    <Grid container>
      <Navbar/> 
      <Outlet />
    </Grid>
  );
}

export default App;
