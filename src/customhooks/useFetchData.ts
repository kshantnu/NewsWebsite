import React, { useEffect } from 'react';

import axios from 'axios';

const FetchData = (url: string, dispatch: any, state: any) => {
  const { isLoading, newsData, urlconfig } = state;

  useEffect(() => {
    async function getNews() {
      dispatch({
        type: 'UPDATE_LOADINGFLAG',
        payload: { isLoading: !isLoading }
      });

      const response = axios.get(
        `${url}&apiKey=23cf15c0bd33473c8c2603b86dffe299`
      );

      try {
        const resolvedResponse = await response;

        dispatch({
          type: 'UPDATE_LOADINGFLAG',
          payload: { isLoading: !isLoading }
        });

        dispatch({
          type: 'ADD_NEWS',
          payload: { newsData: resolvedResponse.data }
        });
      } catch (error) {
        dispatch({ type: 'UPDATE_APIERROR', payload: { apiError: error } });
      }
    }

    getNews();
  }, [url]);
};

export default FetchData;
