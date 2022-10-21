import * as React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Box } from '@mui/system';

const CommonCollapse = (props) => {
    const [alertContrl, setAlertContrl] = React.useState(
        {
            alertOpen: true,
            alertSeverity: 'success',
            alertMessage: '333333'
          }
      );
  return (
    <Box >
      <Collapse in={alertContrl.alertOpen} sx={{ width: '100%',mr:155}} key={1}>
          <Alert severity={alertContrl.alertSeverity} variant="standard"> {alertContrl.alertMessage}</Alert>
        </Collapse>
    </Box>
  )
}

export default CommonCollapse
