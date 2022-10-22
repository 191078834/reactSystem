import { useEffect, useState, useReducer } from "react";

const updateReducer = (State, action) => {
    const { type } = action;

    switch (type) {
        case "FETCH_UPDATE_INIT":
            return {
                ...State,
                isLoading: false,
                isError: false,
                isUpdate:false,
                isDelete:false,
            }
        case "FETCH_UPDATE_SUCCESS":
            return {
                ...State,
                isLoading: false,
        isError: false,
        isUpdate:true,
        isDelete:false,
        data:action.payload
            }
        case "FETCH_DELETE_SUCCESS":
            return{
                ...State,
                isLoading: false,
        isError: false,
        isUpdate:true,
        isDelete:false,
        data:action.payload
            }
        case "FETCH_FAILURE":
            return {
                ...State,
                isLoading: false,
                isError: true,
            }
        // default:
        //     throw new Error();
    }

}

const useWordListActionState = (initialUrl = "http://localhost:8090/wordlist/update", InitialPostData = []) => {


    const [url, setUrl] = useState(initialUrl);
    const [postData, setPostData] = useState(InitialPostData);
    const [state, dispatch] = useReducer(updateReducer, {
        isLoading: false,
        isError: false,
        isUpdate:false,
        isDelete:false,
        data: InitialPostData,
    });

    useEffect(() => {
        let didCancel = false;
        const doUpdateFetch = async () => {
            try {
                if(!didCancel){dispatch({ type: "FETCH_UPDATE_INIT" })}
                
                const resData = await fetch(url, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Accept": "application/json,text/plain,*/*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ data: postData })
                }).then((res) => res.json())
                    .then((data) => data)
                resData.status === "ok" ? dispatch({ type: "FETCH_UPDATE_SUCCESS",payload:resData.data }) : dispatch({ type: "FETCH_FAILURE" });
            } catch (error) {
                dispatch({ type: "FETCH_FAILURE" });
            }

        }
        doUpdateFetch();

    }, [url, postData])

    const doPostFetch = (postData, url) => {setPostData(postData); setUrl(url)};


    return { ...state, doPostFetch };

}

export default useWordListActionState