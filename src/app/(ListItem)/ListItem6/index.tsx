import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownScreen from '@/components/List3/MarkdownScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const desc = `
# This Audio Sound recodeing
`
const ListItem = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Audio Sound" }}></Stack.Screen>
            <MarkdownScreen>{desc}</MarkdownScreen>
            <View style={{ padding: 2 }}>
                <Link href={'/ListItem6/Audio'} asChild>
                    <Button title='Go to Audio Reacoding' />
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default ListItem;