import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <h3 className="error-message">Что-то пошло не так!</h3>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;