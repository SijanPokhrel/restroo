import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

export default function AppLoaderScreen({ navigation }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start rotating animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      })
    ).start();

    const timeout = setTimeout(() => {
      navigation.replace('Start');
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/logo/abstract-shape.png')}
        style={[styles.logo, animatedStyle]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA4A57', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 75,
    tintColor:"#FAFAFA"
  },
});
