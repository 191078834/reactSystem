import _ from 'lodash';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useWordListActionState from '../../../api/useWordListActionState'
import CommonDialog from '../../../componments/common/CommonDialog/CommonDialog'
import CommonCollapse from '../../../componments/common/CommonCollapse/CommonCollapse';

export default function DataListDisp(props) {

  const [rows, setsRows] = React.useState(props.rows);
  
  let sesRows = React.useRef([]);
  const { isLoading, isError, isUpdate, isDelete, data, doPostFetch } = useWordListActionState();
  const [alertContrl, setAlertContrl] = React.useState({
    alertOpen: true,
    alertSeverity: "error",
    alertMessage: "loading failure"
  })

  // cellを仮更新
  const changeCell = (changeValue) => {
    if(changeValue){
    let newValue = _.cloneDeep(rows);
    let reaId = rows.findIndex((element) => element.id === changeValue.id);
    //更新新的cell Status
    changeValue.row[changeValue.field] = changeValue.value;
    newValue[reaId][changeValue.field] = changeValue.value;
    setsRows(newValue);
    }
  }

  //cellを削除
  const deleteCell = () => {
    // if (sesRows.current.length === 0) {
    //   setAlertContrl({
    //     alertOpen: true,
    //     alertSeverity: 'warning',
    //     alertMessage: 'チェックしない'
    //   });
      // return;
    }

    //削除したデータ
    // let postDeletedData = rows.filter((element) => sesRows.current.indexOf(element.id) !== -1);
    // doPostFetch(postDeletedData);

    //已经被删除过多的数据表
    // const deletedNewRows = rows.filter((element) => sesRows.current.indexOf(element.id) === -1);

    //delete message display
  //   setAlertContrl({
  //     alertOpen: true,
  //     alertSeverity: 'success',
  //     alertMessage: '削除をしました'
  //   });
  //   setsRows(deletedNewRows);
  // }
  //更新ボタン
  const updateCell = () => {
    if (sesRows.current.length === 0) {
      setAlertContrl({
        alertOpen: true,
        alertSeverity: 'warning',
        alertMessage: 'チェックしない'
      });
      return
    }
    // 仮fetchのデータ
    let postData = rows.filter((element) => sesRows.current.indexOf(element.id) !== -1)
    doPostFetch(postData, "http://localhost:8090/wordlist/update");
    // isError?setAlertContrl({alertOpen: true, alertSeverity: 'warning', alertMessage: '更新失敗しました'})
    // :setAlertContrl({ alertOpen: true, alertSeverity: 'success',alertMessage: '更新しました' })

    }

    let getDataInfo
    if(props.isError){getDataInfo=<Alert severity="error" variant="standard"> データ取得失敗</Alert>}
    let disInfo 
    if(isUpdate&&data.data.length>0){ 
      disInfo = <Alert severity="success" variant="standard"> データ更新しました</Alert>}
    if(isError){disInfo = <Alert severity="error" variant="standard"> 操作失敗しました</Alert>}

  return (
    <Box sx={{ height: 750, width: '100%' }}>
      <Stack direction="row" spacing={3} justifyContent="flex-end">
        <Box >
          <Collapse in={true} sx={{ width: '100%',mr:150}} >
        {disInfo}{getDataInfo}
          </Collapse>
          
            <Collapse in={props.isError} sx={{ width: '100%',mr:150}} >
              
          </Collapse>
          
        </Box>
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
        <CommonDialog updateCell={updateCell} actionButtonName={'更新'} color='primary' />
      </Stack>
    </Box>
  )
}
