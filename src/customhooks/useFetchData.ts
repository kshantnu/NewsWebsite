import React, { useEffect } from "react";

import axios from "axios";

const FetchData = (url: string | undefined, dispatch: any, state: any) => {
  const { isLoading, newsData, newsTypes, category } = state;

  useEffect(() => {
    async function getNews() {
      dispatch({
        type: "UPDATE_LOADINGFLAG",
        payload: { isLoading: !isLoading }
      });

      // Add your own api key
      const response = axios.get(`${url}&apiKey={USE_API_KEY}`);

      try {
        const resolvedResponse = await response;

        dispatch({
          type: "UPDATE_LOADINGFLAG",
          payload: { isLoading: !isLoading }
        });

        if (newsTypes === "topHeadlines") {
          dispatch({
            type: "ADD_TOPHEADLINES",
            payload: { topHeadlinesNews: resolvedResponse.data }
          });
        }
        if (newsTypes === "everything" && category === "sports") {
          dispatch({
            type: "ADD_EVERYTHING_SPORTSNEWS",
            payload: { everythingSportsNews: resolvedResponse.data }
          });
        }
      } catch (error) {
        dispatch({ type: "UPDATE_APIERROR", payload: { apiError: error } });
      }
    }

    getNews();
  }, [url]);
};

export default FetchData;
