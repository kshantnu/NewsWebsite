import React from 'react';

import {
  INewsContextProvider,
  IAppInitialState,
  IAction,
  AppStateContext
} from '../interfaces';

export const NewsContext = React.createContext<INewsContextProvider | null>(
  null
);

export const StateContext = React.createContext<AppStateContext | null>(null);
