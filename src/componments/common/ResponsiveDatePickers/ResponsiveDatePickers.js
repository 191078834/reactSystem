
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "dayjs/locale/ja";
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'


const ResponsiveDatePickers = (props, ref) => {

  const locale = ["ja"];
  const [value, setValue] = React.useState(format(new Date(), 'yyyy/MM/dd', { locale: ja }));
  const childRef = React.useRef(value);

  React.useImperativeHandle(ref, ()=>({
    getValue:()=>{childRef.current=value;
                return childRef.current}}
  ))

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

export default React.forwardRef(ResponsiveDatePickers)