import React from 'react';
import { errorToString } from './utility';

export interface ErrorBoundaryViewProps {
  wrapperStyle: Object;
  contentStyle: Object;
  error: string | Object | null | undefined;
}

export const ErrorBoundaryView = ({
  wrapperStyle,
  contentStyle,
  error
}: ErrorBoundaryViewProps) => {
  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>{errorToString(error)}</div>
    </div>
  );
};
