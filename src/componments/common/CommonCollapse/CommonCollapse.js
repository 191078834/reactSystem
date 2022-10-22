import * as React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Box } from '@mui/system';
import { PropaneSharp } from '@mui/icons-material';

const CommonCollapse = (props) => {
  
  const [alertContrl, setAlertContrl] = React.useState({
    alertOpen: true,
    alertSeverity: "error",
    alertMessage: "loading failure"
  })
  
  return (
    <Box >
      <Collapse in={alertContrl.alertOpen} sx={{ width: '100%',mr:150}} >
          <Alert severity={alertContrl.alertSeverity} variant="standard"> {alertContrl.alertMessage}</Alert>
        </Collapse>
    </Box>
  )
}

export default CommonCollapse
