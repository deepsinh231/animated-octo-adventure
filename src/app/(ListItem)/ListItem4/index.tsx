import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownScreen from '@/components/List3/MarkdownScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const desc = `
# Animation LottieView Splash Screen
`
const ListItem = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "Animation" }}></Stack.Screen>
            <MarkdownScreen>{desc}</MarkdownScreen>
            <View style={{ padding: 2 }}>
                <Link href={'/ListItem4/Splash'} asChild>
                    <Button title='Go to Splash' />
                </Link>
            </View>
            <Link href={'/ListItem4/Animation'} asChild>
                <Button title='Go to Animation' />
            </Link>
        </SafeAreaView>
    )
}

export default ListItem