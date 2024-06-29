import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const ListItem = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Stack.Screen options={{ title: "List : Onboarding" }}></Stack.Screen>
            <Text style={{ fontFamily: "PlaywriteES-Regular", padding: 20,fontSize:40, textAlign: "center" }}>Onboarding Task</Text>
            <Link href={'/ListItem2/onboarding'} asChild>
                <Button title='Go to onboarding' />
            </Link>
        </View>
    )
}

export default ListItem;
