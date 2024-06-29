import { View, StyleSheet, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

const Animation = () => {
    const animation = useRef<LottieView>(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);
    return (
        <View style={styles.animationContainer}>
            <Stack.Screen options={{ title: "Animation Control" }} />
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/Lottie/LottieView.json')}
            />
            <View style={styles.buttonContainer}>
                <View style={{ padding: 5 }}>
                    <Button
                        title="Restart Animation"
                        onPress={() => {
                            animation.current?.reset();
                        }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <Button
                        title="Play Animation"
                        onPress={() => {
                            animation.current?.play();
                        }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <Button
                        title="Pause Animation"
                        onPress={() => {
                            animation.current?.pause();
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Animation;
const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});