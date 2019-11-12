import React ,{Component} from 'react';
import {View,Text, TextInput} from 'react-native';

const Input = (props) =>{
    
        return(
            <View style = {styles.containerStyle}>
                <Text style = {styles.labelStyle}>{props.label}</Text>
                <TextInput style = {styles.inputStyle}
                placeholder = {props.placeholder}
                autoCorrect = {false}
                secureTextEntry ={props.secureTextEntry}
                value = {props.value}
                onChangeText = {props.onChangeText}
               />

                

            </View>
        );
    };
    //assigning label as flex=1 and input as flex=2 means input cover 66% of total container and label 33%
    const styles = {
        labelStyle:{
            fontSize:18,
            paddingLeft:20,
            flex : 1

        },
        inputStyle:{
            fontSize:18,
            color:'#000',
            paddingLeft:5,
            paddingRight:5,
            lineHeight:23,
            flex:2

        },
        containerStyle:{
            height:40,
            flexDirection:'row',
            flex:1,
            alignItems:'center'

        }
    }


export default Input;