//import libraries for making a component
import React from 'react';
import {Text,View} from 'react-native';


//make the component
const Header = (props) => {
    //const {textStyle,viewStyle} = styles;
 
 return( 
  <View style = {styles.viewStyle}>
    <Text style ={styles.textStyle}>{props.headerText}</Text>
  </View>
 );
};

//make the styles
const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'


    },
    textStyle:{
        fontSize:20
    }

};

//make the component available for other parts of app
export default Header;