import { combineReducers } from 'redux';
import login from '../reducers/login';
import problems from '../reducers/problems';
import problem from '../reducers/problem';
import solution from '../reducers/solution';

const reducer = combineReducers({ login, problems, problem, solution });

export default reducer;
