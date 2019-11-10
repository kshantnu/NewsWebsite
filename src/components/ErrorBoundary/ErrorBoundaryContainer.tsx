import React from 'react';
import { ErrorBoundaryViewProps, ErrorBoundaryView } from './ErrorBoundaryView';

let childComponentProps: ErrorBoundaryViewProps;

interface ErrorBoundaryComponentProps {
  FallbackComponent: React.ComponentType<ErrorBoundaryViewProps>;
  children: React.ReactNode;
  wrapperStyle: typeof childComponentProps.wrapperStyle;
  contentStyle: typeof childComponentProps.contentStyle;
  logError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryComponentState {
  error: typeof childComponentProps.error;
}

class ErrorBoundaryComponent extends React.Component<
  ErrorBoundaryComponentProps,
  ErrorBoundaryComponentState
> {
  state: ErrorBoundaryComponentState = {
    error: null
  };
  static defaultProps = {
    FallbackComponent: ErrorBoundaryView
  };
  static getDerivedStateFromError(error: ErrorBoundaryComponentState) {
    // Update state so that the next render will show the fallback UI
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    const { logError } = this.props;
    if (logError) {
      logError(error, errorInfo);
    }
  }

  render() {
    const { error } = this.state;

    const {
      children,
      FallbackComponent,
      wrapperStyle,
      contentStyle
    } = this.props;

    if (error) {
      return (
        <FallbackComponent
          error={error}
          wrapperStyle={wrapperStyle}
          contentStyle={contentStyle}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;
