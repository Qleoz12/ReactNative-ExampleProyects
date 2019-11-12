import React,{Component} from 'react';
import EmployeeForm from './EmployeeForm';
import { View } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardSection from './CardSection';

class EmployeeCreate extends Component {
    render() {
        return(
            <View>
                <EmployeeForm/>
                <CardSection>
                <Button onPress = {()=>this.props.employeeCreate
                    ({
                        name:this.props.name,
                        phone:this.props.phone,
                        shift:this.props.shift
                    })}>
                    create
                </Button>

                </CardSection>

                
            </View>
        );
    };
}
const mapStateToProps = (store) => {
    return({
        name:store.employee.name,
        phone:store.employee.phone,
        shift:store.employee.shift
    });
};
export default  connect(mapStateToProps,actions) (EmployeeCreate);