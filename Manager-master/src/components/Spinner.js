import React from 'react';
import {View,ActivityIndicator} from 'react-native';

const Spinner = (props) =>{
    return(
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator size ={props.size||'large'}/>
        </View>
    );
};

const styles = {
    spinnerStyle:{
        flex:1, //to make sure that it cover whole width of screen
        justifyContent:'center',
        alignItems:'center'
    }
};
export default Spinner;