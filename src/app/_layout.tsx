import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import { BlackOpsOne_400Regular } from "@expo-google-fonts/black-ops-one"
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import AnimatedSplashScreen from '@/components/List4/AnimatedSplashScreen';

// SplashScreen.preventAutoHideAsync();
export default function RouteLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    'PlaywriteES-Regular': require('../../assets/Font/Playwrite_ES/PlaywriteES-Regular.ttf'),
    BlackOpsOne: BlackOpsOne_400Regular
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }} />
    );
  }
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{
          title: "deepsinh231", headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleAlign: "center"
        }}></Stack.Screen>
      </ Stack>
    </GestureHandlerRootView>
  )
}