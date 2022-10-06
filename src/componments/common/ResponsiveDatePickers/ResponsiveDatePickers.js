
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "dayjs/locale/ja";
import getTimeFormat from "../../../tools/utils";

const locale = ["ja"];
const  ResponsiveDatePickers=()=> {
  const [value, setValue] = React.useState(getTimeFormat());

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale[0]}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params}  />
        )}
      />
    </LocalizationProvider>
  );
}

export default ResponsiveDatePickers