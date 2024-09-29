import React, { Suspense } from 'react';

const RemoteLoader = ({ loadComponent, fallback }) => {
  const Component = React.lazy(loadComponent);

  return (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </Suspense>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Failed to load component. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default RemoteLoader;
