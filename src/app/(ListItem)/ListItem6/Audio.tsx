import { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';
import Animation, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import RecodeList from '@/components/List7/RecodeList';

export default function AudioScreen() {
    const [recording, setRecording] = useState<Recording>();
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    const [memos, setMemo] = useState<string[]>([]);

    async function startRecording() {
        try {
            if (!permissionResponse) {
                console.log('Permission response is not available yet. Please try again.');
                return;
            }
            if (permissionResponse.status !== 'granted') {
                console.log('Requesting permission..');
                await requestPermission();
            }
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        if (!recording) {
            return;
        }
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync(
            {
                allowsRecordingIOS: false,
            }
        );
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);
        if (uri) {
            setMemo((exitingmamo) => ([uri, ...exitingmamo]));
        }
    }
    const animatedRedCircle = useAnimatedStyle(() => ({
        borderRadius: withSpring(recording ? 5 : 35),
        width: withSpring(recording ? "60%" : "100%"),


    }))
    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <RecodeList uri={item} />}
            />
            <View style={styles.footer}>
                <Pressable
                    style={styles.recordButton}
                    onPress={recording ? stopRecording : startRecording}
                >
                    <Animation.View style={[styles.redCircle, animatedRedCircle]}></Animation.View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        // padding: 10,
    },
    footer: {
        backgroundColor: 'white',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recordButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'gray',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    redCircle: {
        backgroundColor: 'orangered',
        aspectRatio: 1,
        borderRadius: 35
    },
    recordWave: {
        position: 'absolute',
        top: -20,
        bottom: -20,
        left: -20,
        right: -20,
        borderRadius: 1000,
    },
});
