import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownScreen from '@/components/List3/MarkdownScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

const ListItem = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: "List : Markdown" }}></Stack.Screen>
            <MarkdownScreen>{description}</MarkdownScreen>
            <Link href={'/ListItem3/editor'} asChild>
                <Button title='Go to Markdown Editer' />
            </Link>
        </SafeAreaView>
    )
}

export default ListItem;