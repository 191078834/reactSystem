import getTimeFormat from "../../tools/utils";
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
export const wordListTitle={
    id: 'NO.',
    word: '単語',
    hinagara : 'ローマ字',
    translate: '中国語',
    putTime: '記入時間'
}

export const kinyuTableColumns = [
    { field: 'id', headerName: 'NO.', width: 50 },
    {
      field: 'word',
      headerName: '単語',
      width: 300,
    },
    {
      field: 'loumaji',
      headerName: 'ローマ字',
      // type: 'singleSelect',
      width: 200,
      editable:true
    },
    {
        field: 'translate',
        headerName: '翻訳',
        type: 'singleSelect',
        valueOptions: ['full time', 'part time', 'intern'],
        width: 250,
        editable:true
    },
    {
        field: 'putTime',
        headerName: '記入時間',
        type: 'date',
        width: 200,
        valueFormatter: (params)=>{
          let date = new Date();
          if(typeof params.value==""){
            return format(date, 'dd/yyyy/MM(eee)', {locale: ja});
          }else{
            let year =stringToNumber(params.value.slice(0,4));
            let month = stringToNumber(params.value.slice(5,7))-1;
            let day = stringToNumber(params.value.slice(8,10));
            let itemDate = new Date(year,month,day);
            
           return format(itemDate, 'yyyy/MM/dd(eee)', {locale: ja})
          }
        }
      },
  ];

  const stringToNumber=(str)=>{

    let num = parseInt(str);
    return num
  }