import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class RequireAuthentication extends Component {

      // Our component just got rendered
      componentDidMount() {
        this.redirectUser();
      }

      // Our component just got updated
      componentDidUpdate() {
        this.redirectUser();
      }

      // Redirect user to home if not authenticated
      redirectUser() {
        if (!this.props.authenticated) {
          this.props.history.push('/');
        }
      }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication.authenticated };
  }

  return connect(mapStateToProps)(RequireAuthentication);
};