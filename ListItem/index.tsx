import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownScreen from '@/components/List3/MarkdownScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const desc = `
# This 
`
const ListItem = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Animation" }}></Stack.Screen>
            <MarkdownScreen>{desc}</MarkdownScreen>
            <View style={{ padding: 2 }}>
                <Link href={'/ListItem'} asChild>
                    <Button title='Go to' />
                </Link>
            </View>
            <Link href={'/ListItem'} asChild>
                <Button title='Go to ' />
            </Link>
        </SafeAreaView>
    )
}

export default ListItem