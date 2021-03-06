import React, { useState } from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressAdd = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Please name your task')
        }
        
    }

    return(
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder={'Add your text here'}
                />
            <Button style={styles.button} title='+' onPress={pressAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 15,
        marginLeft: 15,
        borderColor: '#3581b8'
    },
    button: {
       color: '#fff'
    }
})