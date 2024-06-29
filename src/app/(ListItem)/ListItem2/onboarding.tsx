import { View, Text, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Gesture, GestureDetector, Directions } from 'react-native-gesture-handler';
import Animated, { FadeIn, FlipOutEasyX, ZoomIn, ZoomOut, FlipInEasyX, SlideInRight, SlideOutLeft, FadeOut } from 'react-native-reanimated'

const onboardingSteps = [
    {
        icon: 'battle-net',
        title: 'Welcome Devloper',
        description: 'React Native tutorials OnBoarding',
    },
    {
        icon: 'earlybirds',
        title: 'Learn and grow together',
        description: 'Learn by building 30 projects with React Native and Expo',
    },
    {
        icon: 'book-reader',
        title: 'Education for Child',
        description:
            'Contribute to the fundraiser "Education for Child" to help Save the Child in their effort of providing education to every child',
    },
];

export default function onboarding() {
    const [screenIndex, setScreenIndex] = useState(0)
    const data = onboardingSteps[screenIndex]
    const onContinue = () => {
        const ListItem = screenIndex === onboardingSteps.length - 1;
        if (ListItem) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1)
        }
    }
    const onBack = () => {
        if (screenIndex === 0) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1)
        }
    }
    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }
    const swipe = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
    );

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
            <StatusBar style="light" />
            <GestureDetector gesture={swipe}>
                <View style={styles.pageContent} key={screenIndex}>
                    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.stepIndicatorContainer}>
                        {onboardingSteps.map((step, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.stepIndicator,
                                    { backgroundColor: index === screenIndex ? '#CEF202' : 'grey' },
                                ]}
                            />
                        ))}
                    </Animated.View>
                    <Animated.View entering={FlipInEasyX} exiting={FlipOutEasyX}>
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={150}
                            color="#CEF202"
                        />
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={styles.title}
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={ZoomIn.delay(100)}
                            exiting={ZoomOut}
                            style={styles.description}
                        >
                            {data.description}
                        </Animated.Text>
                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>
                                Skip
                            </Text>

                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15141A',
        paddingTop: 30,
        paddingBottom: 30,
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 70,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'BlackOpsOne',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'BlackOpsOne',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto',
    },

    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'BlackOpsOne',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },

    // steps
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
});