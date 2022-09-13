import React from "react";
import { useEffect, useState, useReducer } from "react";

//reducer
const dataFetchReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
//api
const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      if (!didCancel) {
        dispatch({ type: "FETCH_INIT" });
      }

      try {
        const result = await fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            Accept: "application/json,text/plain,*/*",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            return data;
          });

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();
  }, [url]);

  const doFetch = (url) => {
    setUrl(url);
  };
  return { ...state, doFetch };
};

export default useDataApi;
