import React,{Component} from 'react';
import { Text,View, ListView } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import CardSection from './CardSection';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.fetchEmployees();
        console.log(this.props.employees);
        this.createDataSource({employees:this.props.employees});
}
 /* runs whenever we are about to recieve the new set of props to rerender the component
 gets called with nextProps which is new set of props that our component rendered with
 this.props is still the old one.we can't only make our data source in component will mount
 bcos initially this.props.employees  will be empty due to asynchronous request to fetchEmployees
 after some time it will contain data.
 */
    componentWillReceiveProps(nextProps) {
        this.createDataSource({employees:nextProps.employees});

    }
    createDataSource({employees}) { //yu have to pass an object with key employees
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          });
    this.dataSource = ds.cloneWithRows(employees);

    }
    //renderRow is called with each element in array in this case employee
    renderRow(employee) {
        return(
            <ListItem employee={employee}/>
        );
    };
    render() {
        return(
            <ListView
            enableEmptySections
            dataSource = {this.dataSource}
            renderRow = {this.renderRow}
            />
        );
    };
}
const mapStateToProps = (store) => {
 /*
 here store.listOfEmployees is an object containing list of employees we have to somehow convert 
 this into array of employees bcos datasource of listview must be an array to do this:
 store.listOfEmployees is an object containing employees. Now for each key(uid) and
 value(user model having pty (name,phone,shift)) run a function with these key-value pair.
 now function return an object having all value of element and also id
 now map func put all these new obj and push into an array and assign this array to rrayOfEmployees  
 */
const arrayOfEmployee = _.map(store.Employees, (val, uid) => {
    return { ...val, uid }; //each obj = {name:'govind',phone:56325,shift:'monday',uid:'kknbghj3352'}
  });
    return({
       
        employees:arrayOfEmployee
    });
};

  
export default connect(mapStateToProps,actions)(EmployeeList);