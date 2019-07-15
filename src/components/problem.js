import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../redux/action-creators/login';
import { getProblemById } from '../redux/action-creators/problems';

const handleBack = history => {
  history.push('/');
};

const Problem = ({ history, location, getProblemById, title, content }) => {
  console.log(title, content);
  useEffect(() => getProblemById(location.state.id));
  return (
    <div>
      <div>Title: {title}</div>
      <div>Content: {content}</div>
      <div>
        <button onClick={() => handleBack(history)}>Back</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    title: state.problem.title,
    content: state.problem.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: token => dispatch(loadUser(token)),
    getProblemById: id => dispatch(getProblemById(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Problem);
