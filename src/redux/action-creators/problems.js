import axios from 'axios';

const getProblemsStart = () => {
  //   console.log('GetP start');
  return {
    type: 'GET_PROBLEMS_START',
    payload: {}
  };
};

const getProblemsSuccess = data => {
  //   console.log('GetP success', data);
  return {
    type: 'GET_PROBLEMS_SUCCESS',
    payload: { problems: data.questions } // an Array of quesions:{id,title,content}
  };
};

const getProblemsError = err => {
  //   console.log('GetP err', err);
  return {
    type: 'GET_PROBLEMS_ERROR',
    payload: { error: err }
  };
};

export const getProblems = () => dispatch => {
  dispatch(getProblemsStart());
  axios
    .get('http://api.haochuan.io/oj/problems?noError=1')
    .then(res => {
      dispatch(getProblemsSuccess(res.data));
    })
    .catch(err => {
      dispatch(getProblemsError(err));
      //   console.log('try again');
      //   getProblems(); // danger
    });
};

// ------------------------------------

const getProblemByIdStart = () => {
  //   console.log('GetP start');
  return {
    type: 'GET_PROBLEM_BY_ID_START',
    payload: {}
  };
};

const getProblemByIdSuccess = question => {
  //   console.log('GetP success', question);
  return {
    type: 'GET_PROBLEM_BY_ID_SUCCESS',
    payload: { title: question.title, content: question.content }
  };
};

const getProblemByIdError = err => {
  //   console.log('GetP err', err);
  return {
    type: 'GET_PROBLEM_BY_ID_ERROR',
    payload: { error: err }
  };
};

export const getProblemById = id => dispatch => {
  dispatch(getProblemByIdStart());
  //   console.log('inner id: ', id);
  axios
    .get(`http://api.haochuan.io/oj/problems/${id}?noError=1`)
    .then(res => {
      // const arr = {...res.data};
      dispatch(getProblemByIdSuccess(res.data.question));
    })
    .catch(err => {
      dispatch(getProblemByIdError(err));
    });
};

// ------------------------------------

export const initSolution = () => dispatch => {
  dispatch({
    type: 'INIT_SOLUTION',
    payload: { solution: null }
  });
};

const getSolutionStart = () => {
  //   console.log('GetP start');
  return {
    type: 'GET_SOLUTION_START',
    payload: {}
  };
};

const getSolutionSuccess = data => {
  //   console.log('GetP success', data);
  return {
    type: 'GET_SOLUTION_SUCCESS',
    payload: { solution: data.pass.toString() } // an Array of quesions:{id,title,content}
  };
};

const getSolutionError = err => {
  //   console.log('GetP err', err);
  return {
    type: 'GET_SOLUTION_ERROR',
    payload: { error: err }
  };
};

export const getSolution = (id, answer) => dispatch => {
  dispatch(getSolutionStart());

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ id, answer });
  axios
    .post(
      `http://api.haochuan.io/oj/problems/${id}/solution?noError=1`,
      body,
      config
    )
    .then(res => {
      //   console.log('Inner res: ', res.data);
      dispatch(getSolutionSuccess(res.data));
    })
    .catch(err => {
      dispatch(getSolutionError(err));
    });
};

// ------------------------------------
