import React from 'react';

// SafeComponent will catch errors in its child components and display a fallback UI.
class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error occurs in a child component.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // Optional: Log the error to an error reporting service
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in SafeComponent:", error, errorInfo);
    // You can also send the error and errorInfo to an error tracking service here
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Render the child components if there is no error
    return this.props.children;
  }
}

export default SafeComponent;
