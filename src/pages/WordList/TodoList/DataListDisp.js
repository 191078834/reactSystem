import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataListDisp(props) {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        cellMode
        isEditable
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
