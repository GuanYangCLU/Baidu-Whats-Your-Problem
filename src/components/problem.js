import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../redux/action-creators/login';
import {
  getProblemById,
  getSolution,
  initSolution
} from '../redux/action-creators/problems';

// props是不能改的，只能改state
const Problem = ({
  history,
  location,
  getProblemById,
  title,
  content,
  getSolution,
  solution,
  initSolution
}) => {
  // console.log(title, content);
  useEffect(() => getProblemById(location.state.id));

  const [answer, setAnswer] = useState('');
  const handleInput = e => {
    setAnswer(e.target.value);
  };

  const handleAnswer = (e, id, answer) => {
    e.preventDefault();
    getSolution(id, answer);
  };

  const handleBack = history => {
    setAnswer('');
    initSolution();
    history.push('/');
  };

  return (
    <div>
      <div>Title: {title}</div>
      <div>Content: {content}</div>
      <div>
        <form onSubmit={e => handleAnswer(e, location.state.id, answer)}>
          <div>
            <input
              value={answer}
              onChange={e => handleInput(e)}
              placeholder='please type your answer'
            />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
      {solution && (
        <div>
          The answer is: <b>{solution}</b>, your answer is{' '}
          <b>{solution === answer ? 'Correct' : 'Wrong'}</b>!
        </div>
      )}
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
    content: state.problem.content,
    solution: state.solution.solution
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: token => dispatch(loadUser(token)),
    getProblemById: id => dispatch(getProblemById(id)),
    getSolution: (id, answer) => dispatch(getSolution(id, answer)),
    initSolution: () => dispatch(initSolution())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Problem);
