import { combineReducers } from 'redux';
import login from '../reducers/login';
import problems from '../reducers/problems';
import problem from '../reducers/problem';

const reducer = combineReducers({ login, problems, problem });

export default reducer;
