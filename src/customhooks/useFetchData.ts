import React, { useEffect } from 'react';

import axios from 'axios';

const headlinesNewsUrl = 'http://localhost:5000/news/headlines';
const trendingNewsUrl = 'http://localhost:5000/news/trending';
const newsSourcesUrl = 'http://localhost:5000/news/sources';

const FetchData = (
  requestObject: any,
  dispatch: any,
  state: any,
  newsTypes: string
) => {
  const {
    isLoading,
    category,
    headlinesPageNumber,
    trendingNewsPageNumber,
    pageSize,
    countryCode,
    newsSources
  } = state;

  useEffect(() => {
    async function getTopHeadlinesNews() {
      dispatch({
        type: 'UPDATE_LOADINGFLAG',
        payload: { isLoading: !isLoading }
      });

      const response = axios.get(headlinesNewsUrl, {
        params: requestObject
      });

      try {
        const resolvedResponse = await response;

        dispatch({
          type: 'UPDATE_LOADINGFLAG',
          payload: { isLoading: !isLoading }
        });

        dispatch({
          type: 'ADD_TOPHEADLINES',
          payload: { topHeadlinesNews: resolvedResponse.data }
        });
      } catch (error) {
        // LOG ERROR
        dispatch({
          type: 'UPDATE_APIERROR',
          payload: { apiError: error.response }
        });
      }
    }

    async function getTrendingNews() {
      dispatch({
        type: 'UPDATE_LOADINGFLAG',
        payload: { isLoading: !isLoading }
      });

      let newSourcesResponse;
      let trendingNewsResponse;
      if (!newsSources) {
        newSourcesResponse = axios.get(newsSourcesUrl, {
          params: requestObject
        });
      }
      try {
        if (newSourcesResponse) {
          const uniqueSources = await newSourcesResponse;
          dispatch({
            type: 'ADD_NEWS_SOURCES',
            payload: { newsSources: uniqueSources }
          });
        }

        trendingNewsResponse = axios.get(trendingNewsUrl, {
          params: requestObject
        });

        const trendingNewsData = await trendingNewsResponse;

        dispatch({
          type: 'UPDATE_LOADINGFLAG',
          payload: { isLoading: !isLoading }
        });

        dispatch({
          type: 'ADD_TRENDING_NEWS',
          payload: { trendingNews: trendingNewsData.data }
        });
      } catch (error) {
        // LOG ERROR
        dispatch({
          type: 'UPDATE_APIERROR',
          payload: { apiError: error.response }
        });
      }
    }

    if (newsTypes === 'topHeadlines') {
      getTopHeadlinesNews();
    } else if (newsTypes === 'trending') {
      getTrendingNews();
    }
  }, [
    newsTypes,
    category,
    pageSize,
    countryCode,
    newsSources,
    headlinesPageNumber,
    trendingNewsPageNumber
  ]);
};

export default FetchData;
