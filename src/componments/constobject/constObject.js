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
      },
  ];