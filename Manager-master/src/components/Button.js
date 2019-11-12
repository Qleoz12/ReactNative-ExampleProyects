import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress ={props.onPress} style = {styles.ButtonStyle}>
            <Text style = {styles.TextStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    ButtonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5
    },
    TextStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    }

};
export default Button;