import { createTheme } from "@mui/material/styles";

export const dashBoardTheme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          contained: {
            // Some CSS
            // fontSize: '1.5rem!important',
            // backgroundColor: 'blue'
          },
          
        },
      },
     
    },
    //调色板 info 警告 错误 成功的共通颜色修改颜色
    palette: {
      primary: {main:'#bada55'},
      
    },
  });

