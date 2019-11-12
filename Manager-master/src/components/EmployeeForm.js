import React,{Component} from 'react';
import { View, Text, Picker } from 'react-native';
import Input from './Input';
import CardSection from './CardSection';
import Button from './Button';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmployeeForm extends Component {
    render() {
        return(
            <View>
                <CardSection>
                    <Input
                     onChangeText = {(valueInName) => this.props.nameChanged(valueInName)}
                     label = 'Name'
                     placeholder ='Type your name here'
                     value = {this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                      onChangeText = {(valueInPhone) => this.props.phoneChanged(valueInPhone)}
                     label = 'Phone'
                     placeholder ='555-555-555'
                     value = {this.props.phone}
                     
                    />
                </CardSection>
                
                <CardSection style = {{flexDirection:'column'}} >
                    <Text style = {{paddingLeft:20,fontSize:18}}>Shift</Text>
                    <Picker
                     style = {{flex:1}}
                    onValueChange = {(valueInShift)=> this.props.shiftChanged(valueInShift)}
                    selectedValue = {this.props.shift}
                    >
                        <Picker.Item label = 'Monday' value = 'Monday'/>
                        <Picker.Item label = 'Tuesday' value = 'Tuesday'/>
                        <Picker.Item label = 'Wednesday' value = 'Wednesday'/>
                        <Picker.Item label = 'Thursday' value = 'Thursday'/>
                        <Picker.Item label = 'Friday' value = 'Friday'/>
                        <Picker.Item label = 'Saturday' value = 'Saturday'/>
                        <Picker.Item label = 'Sunday' value = 'Sunday'/>
                    </Picker>
                  
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
export default connect(mapStateToProps,actions)(EmployeeForm);