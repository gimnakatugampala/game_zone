import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <Text>About Screens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
})
