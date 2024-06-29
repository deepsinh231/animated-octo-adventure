import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Sound } from 'expo-av/build/Audio';
import { AVPlaybackStatus, Audio } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import Animation, { useAnimatedStyle } from 'react-native-reanimated';

const RecodeList = ({ uri }: { uri: string }) => {
    const [sound, setSound] = useState<Sound>();
    const [status, setstatus] = useState<AVPlaybackStatus>();

    async function loadSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            { uri },
            undefined,
            onPlaybackStatusUpdate
        );
        setSound(sound);
        await sound.setPositionAsync(0);
    }
    async function playSound() {
        if (!sound) {
            return;
        }
        console.log('Playing Sound');
        try {
            await sound.setPositionAsync(0);
            await sound.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }
    useEffect(() => {
        loadSound();
    }, [uri])
    const onPlaybackStatusUpdate = useCallback(
        async (newStatus: AVPlaybackStatus) => {
            setstatus(newStatus);

            if (!newStatus.isLoaded || !sound) {
                return;
            }

            if (newStatus.didJustFinish) {
                await sound?.setPositionAsync(0);
            }
        },
        [sound]
    );
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    const isPlaying = status?.isLoaded && status?.isPlaying ? status.isPlaying : false;
    const Positon = status?.isLoaded && status.positionMillis ? status.positionMillis : 0;
    const Duration = status?.isLoaded && status.durationMillis ? status.durationMillis : 1;
    const progress = Positon / Duration;
    const animatedIndicatorStyle = useAnimatedStyle(() => ({
        left: `${progress * 100}%`,
        // withTiming(`${progress * 100}%`, {
        //   duration:
        //     (status?.isLoaded && status.progressUpdateIntervalMillis) || 100,
        // }),
    }));
    return (
        <View style={styles.container}>
            <FontAwesome5
                onPress={playSound}
                name={isPlaying ? 'pause' : 'play'}
                size={20}
                color={'gray'}
            />

            <View style={styles.playbackContainer}>
                <View style={styles.playbackBackground} />
                <Animation.View style={[styles.playbackIndicator, animatedIndicatorStyle]} />
            </View>
        </View>
    )
}

export default RecodeList

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        gap: 15,
        // shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    playbackContainer: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
    },
    playbackBackground: {
        height: 3,
        backgroundColor: 'gainsboro',
        borderRadius: 5,
    },
    playbackIndicator: {
        width: 10,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: 'royalblue',
        position: 'absolute',
    },

    wave: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    waveLine: {
        flex: 1,
        height: 30,
        backgroundColor: 'gainsboro',
        borderRadius: 20,
    },
})