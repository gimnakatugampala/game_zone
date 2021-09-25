import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { globalStyles } from '../styles/global'


export default function Home({navigation}) {

    

    const presshandler = () =>{
        // one screen to another
        navigation.navigate('ReviewDetails')

        // same
        // navigation.push('ReviewDetails')


    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="go to review details" onPress={presshandler} />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container:{
//         padding:24
//     },
//     titleText:{
//         fontSize:18
//     }
// })
