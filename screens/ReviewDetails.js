import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetails({navigation}) {

    const presshandler = () => {
        // Go Back
        navigation.goBack()
    }
    
    return (
        <View style={globalStyles.container}>
            <Text>Review Details</Text>
            <Button title="back to home screen" onPress={presshandler} />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container:{
//         padding:24
//     }
// })
