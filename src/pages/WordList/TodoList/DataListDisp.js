import * as React from 'react';
import Box from '@mui/material/Box';
import _ from 'lodash';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CommonDialog from '../../../componments/common/CommonDialog/CommonDialog'
export default function DataListDisp(props) {

  const [rows, setsRows] = React.useState(props.rows);
  const [alertContrl, setAlertContrl] = React.useState({
    alertOpen: false,
    alertSeverity: 'success',
    alertMessage: 'nasi'
  });
  let sesRows = React.useRef([]);
  let updateRef = React.useRef([])

  // cellを仮更新
  const changeCell = (changeValue) => {
    let newValue = _.cloneDeep(rows);
    let reaId = rows.findIndex((element) => element.id === changeValue.id);
    //更新新的cell
    changeValue.row[changeValue.field] = changeValue.value;
    newValue[reaId][changeValue.field] = changeValue.value;
    setsRows(newValue);
  }

  //cellを削除
  const deleteCell = () => {
    if (sesRows.current.length === 0) {
      setAlertContrl({
        alertOpen: true,
        alertSeverity: 'warning',
        alertMessage: 'チェックしない'
      });
      return;
    }

    //削除したデータ
    let postDeletedData = rows.filter((element) => sesRows.current.indexOf(element.id) !== -1);
    console.log(postDeletedData);
    //已经被删除过多的数据表
    const deletedNewRows = rows.filter((element) => sesRows.current.indexOf(element.id) === -1);

    //delete message display
    setAlertContrl({
      alertOpen: true,
      alertSeverity: 'success',
      alertMessage: '削除をしました'
    });
    setsRows(deletedNewRows);
  }
  //更新ボタン
  const updateCell = () => {

    if (sesRows.current.length === 0) {
      setAlertContrl({
        alertOpen: true,
        alertSeverity: 'warning',
        alertMessage: 'チェックしない'
      });
    }
    // 仮fetchのデータ
    let postData = rows.filter((element) => sesRows.current.indexOf(element.id) !== -1)
  }


  return (
    <Box sx={{ height: 750, width: '100%' }}>
      <Stack direction="row" spacing={3} justifyContent="flex-end">
        <Collapse in={alertContrl.alertOpen} sx={{ width: '100%' }}>
          <Alert severity={alertContrl.alertSeverity} variant="standard"> {alertContrl.alertMessage}</Alert>
        </Collapse>
        <CommonDialog deleteCell={deleteCell} actionButtonName={'削除'} color='warning' action='wordRowDelete' />
        <CommonDialog updateCell={updateCell} actionButtonName={'更新'} color='primary' action='wordRoeUpdate' />


      </Stack>

      <DataGrid
        rows={rows}
        columns={props.columns}
        cellMode
        isEditable
        // pageSize={25}
        rowsPerPageOptions={[10, 25, 50, 100]}
        checkboxSelection
        onSelectionModelChange={(value) => { sesRows.current = value }}
        onCellEditCommit={changeCell}
        disableSelectionOnClick={true}
        components={{ Toolbar: GridToolbar }}
      />

      <Stack direction="row" spacing={3} justifyContent="flex-end">
        <CommonDialog deleteCell={deleteCell} actionButtonName={'削除'} color='warning' />
        <CommonDialog deleteCell={updateCell} actionButtonName={'更新'} color='primary' />
      </Stack>
    </Box>
  );
}
