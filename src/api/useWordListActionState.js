import { useEffect, useState, useReducer } from "react";

const updateReducer = (State, action) => {
    const { type } = action;

    switch (type) {
        case "FETCH_UPDATE_INIT":
            return {
                ...State,
                isLoading: true,
                isError: false,
            }
        case "FETCH_UPDATE_SUCCESS":
            return {
                ...State,
                isLoading: false,
                isError: false,
            }
        case "FETCH_UPDATE_FAILURE":
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
                resData.status === "ok" ? dispatch({ type: "FETCH_UPDATE_SUCCESS" }) : dispatch({ type: "FETCH_UPDATE_FAILURE" });
            } catch (error) {
                dispatch({ type: "FETCH_UPDATE_FAILURE" });
            }

        }
        doUpdateFetch();

    }, [url, postData])

    const doPostFetch = (postData) => setPostData(postData);


    return { ...state, doPostFetch };

}

export default useWordListActionState