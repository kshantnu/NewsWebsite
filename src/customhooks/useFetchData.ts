import React, { useState, useEffect } from 'react';
import axios, { AxiosPromise } from 'axios';

import * as interfaces from './model';

const FetchData = (config: interfaces.IConfig) => {
  const [newsData, setNewsData] = useState(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getNews() {
      setIsLoading(true);
      const response = axios.get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey={REPLACE WITH YOUR API_KEY}'
      );

      try {
        const resolvedResponse = await response;

        setIsLoading(false);
        setNewsData(resolvedResponse.data);
      } catch (error) {
        // Stop the code execution and throw the error.
        throw new Error(error);
      }
    }

    getNews();
  }, []);

  return { newsData, isLoading };
};

export default FetchData;
