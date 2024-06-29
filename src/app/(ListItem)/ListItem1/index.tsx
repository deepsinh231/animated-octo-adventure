import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ListItem() {
    return (
        <View>
            <Stack.Screen options={{
                title: "List 1",
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTitleAlign: "center"
            }}></Stack.Screen>
            <Text style={{fontFamily:"PlaywriteES-Regular",fontSize:50}}>ListItem 1</Text>
        </View>
    )
}