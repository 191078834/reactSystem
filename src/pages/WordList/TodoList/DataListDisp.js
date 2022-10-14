import * as React from 'react';
import Box from '@mui/material/Box';
import _ from 'lodash';
import Stack from '@mui/material/Stack';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import CommonButton from "../../../componments/common/CommonButton/CommonButton";
export default function DataListDisp(props) {

  const [rows, setsRows] = React.useState(props.rows);
  let sesRows = React.useRef([]);

  // cellを更新
  const changeCell =(changeValue)=>{
    let newValue = _.cloneDeep(rows);
    let reaId =rows.findIndex((element)=>element.id===changeValue.id);
    newValue[reaId][changeValue.field] =changeValue.value;
    console.log(newValue[5]);
    setsRows(newValue);
  }

  //cellを削除
  const deleteCell =()=>{
    if(sesRows.current.length === 0) return;
    //已经被删除过多的数据表
    const deletedNewRows =rows.filter((element)=>sesRows.current.indexOf(element.id) === -1);
    setsRows(deletedNewRows);
  }

  return (
    <Box sx={{ height: 800, width: '100%' }}>
       <Stack direction="row" spacing={3} justifyContent="flex-end">
        <CommonButton  variant="contained" color="warning" size="medium" type="submit" onClick={deleteCell}>
          削除
        </CommonButton>
        <CommonButton  variant="contained" color="primary" size="medium" type="submit" >
          確認
        </CommonButton>
      </Stack>

      <DataGrid
        rows={rows}
        columns={props.columns}
        cellMode
        isEditable
        // pageSize={25}
        rowsPerPageOptions={[10,25,50,100]}
        checkboxSelection
        onSelectionModelChange={(value)=>{sesRows.current= value}}
        onCellEditCommit={changeCell}
        disableSelectionOnClick={true}
        components={{ Toolbar: GridToolbar }}
      />
      
      <Stack direction="row" spacing={3} justifyContent="flex-end">
        <CommonButton  variant="contained" color="warning" size="medium" type="submit" onClick={deleteCell}>
          削除
        </CommonButton>
        <CommonButton  variant="contained" color="primary" size="medium" type="submit" >
          確認
        </CommonButton>
      </Stack>
    </Box>
  );
}
