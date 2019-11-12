import React,{Component} from 'react';
import {Router,Scene, Actions} from 'react-native-router-flux';
import LogInForm from './components/LogInForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';

class RouterComponent extends Component {
    render() {
        return(
        <Router >
            <Scene key = 'root'>
                
                    <Scene key = 'login' component={LogInForm} title = 'Please Login' >

                    </Scene>
                
                
                    <Scene key = 'employeeCreate' component={EmployeeCreate}  title = 'Create New Employee' >
                    </Scene>
                    <Scene key = 'employeeEdit' component={EmployeeEdit}  title = 'Edit Employee' >
                    </Scene>


                    <Scene 
                    onRight = {()=>Actions.employeeCreate()}
                    rightTitle = 'Add'
                    key = 'employeeList' 
                    component={EmployeeList}  
                    title = 'List Of Employees'
                      >

                    </Scene>
                </Scene>
            
        </Router>
        );
    };
}
export default RouterComponent;