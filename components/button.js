import React from 'react';
import  {StyleSheet, TouchableOpacity, Text, View, TouchableHighlight} from 'react-native';

export default function FlatButton ({ onPress, text }) {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#BD54E1'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})