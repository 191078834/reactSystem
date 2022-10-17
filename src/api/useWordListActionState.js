import { useEffect, useState } from "react";

const useWordListActionState = (initialUrl, InitialPostData) => {

    const [url, setUrl] = useState(initialUrl);
    const [postData, setPostData] = useState(InitialPostData);

    useEffect(() => {

        console.log(url)
        console.log(postData)
    }, [url, postData])

    const doPostFetch = (postData) => setPostData(postData);


    return {doPostFetch};

}

export default useWordListActionState