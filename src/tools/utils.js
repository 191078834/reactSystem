 //現在時間のStringを取る
 
 const getTimeFormat =(date)=>{
    // const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const strDate = date.getDate().toString().padStart(2, '0');
    // const starHours = date.getHours().toString().padStart(2, '0');
    // const starMinutes = date.getMinutes().toString().padStart(2, '0');
    // const starSeconds = date.getSeconds().toString().padStart(2, '0');
    // return `${date.getFullYear()}-${month}-${strDate} ${starHours}:${starMinutes}:${starSeconds}`;
    //
    return `${date.getFullYear()}-${month}-${strDate}`;
}

export default getTimeFormat