import React,{Component} from 'react';
import CardSection from './CardSection';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    rowPress() {
        Actions.employeeEdit({employee:this.props.employee});
    }
    render() {
        return(
            <TouchableWithoutFeedback onPress = {this.rowPress.bind(this)} >
              <View>
               <CardSection>
                  <Text style = {styles.titleStyle}>{this.props.employee.name}</Text>
                </CardSection>
              </View>
            </TouchableWithoutFeedback>
            
        );
    };
}
const styles = {
    titleStyle: {
      fontSize: 18,
      paddingLeft: 15
    }
  };
export default ListItem;