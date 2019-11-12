import React,{Component} from 'react';
import EmployeeForm from './EmployeeForm';
import { View } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardSection from './CardSection';
import Card from './Card';
import Communications from 'react-native-communications';
import Confirm from './Confirm';

class EmployeeEdit extends Component {
    state ={showModal:false};
    componentWillMount() {
        
//call all props changed with their values for the given employee(provided as props from listItem) 
        this.props.nameChanged(this.props.employee.name);
        this.props.phoneChanged(this.props.employee.phone);
        this.props.shiftChanged(this.props.employee.shift);
}
    onButtonPress() {
        this.props.updateEmployee(
        {
            name:this.props.name,
            phone:this.props.phone,
            shift:this.props.shift,
            uid:this.props.employee.uid
        });
    }
    onTextPress() {
        Communications.text(this.props.phone,`Your upcoming shift is on ${this.props.shift}`);
    }
    onDecline() {
        this.setState({showModal:false});
    }
    onAccept() {
        this.props.fireEmployee({uid:this.props.employee.uid});
    }
    
    render() {
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                  <Button onPress = {this.onButtonPress.bind(this)} >
                     Save Changes
                   </Button>
                </CardSection>
                <CardSection>
                  <Button onPress = {this.onTextPress.bind(this)} >
                     Text Schedule
                   </Button>
                </CardSection>
                <CardSection>
                  <Button onPress = {() => this.setState({showModal:true})} >
                     Fire Employee
                   </Button>
                </CardSection>

                <Confirm
                visible = {this.state.showModal}
                onDecline = {this.onDecline.bind(this)}
                onAccept = {this.onAccept.bind(this)}
                
                />

                
            </Card>
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
export default  connect(mapStateToProps,actions) (EmployeeEdit);