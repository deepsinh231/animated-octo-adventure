import { View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
} from 'react-native-reanimated';
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => { }
}: { onAnimationFinish?: (isCancelled: boolean) => void }) => {
    const animation = useRef<LottieView>(null);
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
            }}
        >
            <AnimatedLottieView
                exiting={ZoomOut}
                onAnimationFinish={onAnimationFinish}
                autoPlay
                loop={false}
                ref={animation}
                style={{
                    width: "95%",
                    maxWidth: 400,
                    aspectRatio: 1,
                    backgroundColor: '#0000',
                }}
                // Find more Lottie files Json 
                source={require('@assets/Lottie/Animation.json')}
            />
        </View>
    )
}

export default AnimatedSplashScreen