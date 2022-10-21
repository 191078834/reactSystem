// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { kinyuTableColumns } from '../../../componments/constobject/constObject';
// import DataListDisp from './DataListDisp';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// }));


// function TodoList(props) {
//   return (
//     <Box>
//       <Grid container spacing={2} id={2}>

//         { props.isError === true ? (
//           <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Item sx={{ fontSize: "15px" }}>IsLoading Status</Item>
//               </Grid>
//             </Grid>
//           </Box>
//         ) : (

//           <Box sx={{ flexGrow: 1, marginTop: '50px' }} key={props.data}>
//             <DataListDisp rows={props.data} columns={kinyuTableColumns} />
//           </Box>
//         )
//         }


//       </Grid>
//     </Box>
//   );
// }

// export default TodoList;
