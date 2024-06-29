import React from 'react'
import AnimatedSplashScreen from '@/components/List4/AnimatedSplashScreen'
import { Stack } from 'expo-router'

export default function Splash() {
    return (
        <>
            <Stack.Screen options={{ title: "Animated Splash" }}></Stack.Screen>
            <AnimatedSplashScreen />
        </>
    )
}