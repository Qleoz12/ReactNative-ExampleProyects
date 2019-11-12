import React from 'react';
import {View, Modal, Text} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm =(props) => {
    return(
        <Modal
        visible = {props.visible}
        transparent
        animationType = 'slide'
        onRequestClose = {() => {}}
        >
        <View style = {styles.containerStyle}>
            <CardSection style = {styles.CardSectionStyle}>
                <Text style = {styles.TextStyle}>{props.children}</Text>
            </CardSection>
            <CardSection style = {styles.CardSectionStyle}>
                <Button onPress = {props.onAccept}>
                  Yes

                </Button>
                <Button onPress = {props.onDecline}>
                  No

                </Button>
            </CardSection>
        </View>

        </Modal>
    );
};
const styles = {
    containerStyle: {
        backgroundColor : 'rgba(0,0,0,.75)' ,
        flex:1 ,
        position:'relative',
        justifyContent:'center'


    },
    CardSectionStyle: {
        justifyContent:'center'
    },
    TextStyle: {
        flex:1,
        fontSize:20,
        textAlign:'center',
        lineHeight:40
    }
};
export default Confirm;