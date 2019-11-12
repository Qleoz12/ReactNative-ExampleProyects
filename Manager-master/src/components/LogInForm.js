import React,{Component} from 'react';
import {View,Text} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LogInForm extends Component {
     onButtonPress = () => {
         const {email,password}  = this.props;
        this.props.logInUser({email,password});
    };
    
    renderButton = () => {
        if(this.props.loading)
        return <Spinner />;
        else {
            return(
               <Button onPress = { this.onButtonPress.bind(this)}>
                   Log In
                </Button>
            );
        }
    };
    
    render() {
        return(
            <View>
                <CardSection>
                    <Input
                     label = 'Email'
                     placeholder ='test@gmail.com'
                     onChangeText = {(textInEmail) => this.props.emailChanged(textInEmail)}
                     value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                     secureTextEntry
                     label = 'Password'
                     placeholder ='password'
                     onChangeText = {(textInPassword) => this.props.passwordChanged(textInPassword)}
                     value = {this.props.password}
                    />
                </CardSection>
                <View style = {{backgroundColor:'white'}}>
                    <Text style = {styles.errorStyle}>{this.props.error}</Text>

                </View>
                <CardSection>
                  {this.renderButton()}  
                </CardSection>
            </View>
        );
    };
}
const mapStateToProps = (store) => {
    return({
        email:store.Auth.email,
        password:store.Auth.password,
        user:store.Auth.user,
        error:store.Auth.error,
        loading:store.Auth.loading
    });
};
const styles = {
    errorStyle: {
        color:'red',
        fontSize:20,
        alignSelf:'center'
    }
};
//this is doing 2 things ist automatically dispatch all actions to all reducers and 
//2ndly pass actions as a prop to LogInForm 
export default connect(mapStateToProps,actions) (LogInForm);