import React, { useEffect, useState, useRef } from 'react';
import { IConfig, IResponse } from '../interfaces';
import { checkObjectEquality } from '../utility/utilities';
import axios, { AxiosResponse } from 'axios';

const headlinesNewsUrl = 'http://localhost:5000/news/headlines';

const useFetchNewsHeadlines = (requestObject: IConfig) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [headlinesData, setHeadLinesData] = useState<IResponse | null>(null);
  const previousheadlinesData = useRef<IConfig | null>(null);

  useEffect(() => {
    try {
      if (
        previousheadlinesData.current &&
        checkObjectEquality(previousheadlinesData.current, requestObject)
      ) {
        return;
      }
      const fetchNewsHeadlines = async (): Promise<AxiosResponse<
        IResponse
      >> => {
        setIsLoading(true);
        const responsePromise = axios.get(headlinesNewsUrl, {
          params: requestObject
        });
        return responsePromise;
      };
      previousheadlinesData.current = requestObject;
      fetchNewsHeadlines()
        .then(response => {
          setIsLoading(false);
          setHeadLinesData(response.data);
        })
        .catch(error => setIsError(error));
    } catch (error) {
      setIsError(error);
    }
  }, [requestObject]);
  return { isLoading, isError, headlinesData };
};

export default useFetchNewsHeadlines;
