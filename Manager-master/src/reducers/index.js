import {combineReducers} from 'redux';
import {authReducer} from './Auth_reducer';
import { EmployeeFormReducer } from './EmployeeFormReducer';
import { EmployeeReducer } from './EmployeeReducer';

export const allReducers = combineReducers({
    Auth:authReducer,
    employee:EmployeeFormReducer,
    Employees:EmployeeReducer
});