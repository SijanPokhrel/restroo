import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const steps = [
  {
    title: 'We serve incomparable delicacious',
    text: 'All the best restaurants with their top menu waiting for you, they can’t wait for your order!!',
  },
  {
    title: 'We provide exceptional service experience',
    text: 'Our team is ready to assist you with care and speed, ensuring your time with us is truly memorable!',
  },
  {
    title: 'We offer fully customizable meals',
    text: 'Choose your favorite ingredients just the way you like it, freshness and flavor always guaranteed!',
  },
];

const { width } = Dimensions.get('window');

export default function StartScreen({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);
  const pagerRef = useRef(null);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      pagerRef.current.setPage(currentStep + 1);
    } else {
      navigation.replace('LoginScreen'); // final screen
    }
  };

  // Skip button navigates immediately to SignupScreen
  const handleSkip = () => {
    navigation.replace('LoginScreen'); // change route as needed
  };

  const onPageSelected = (e) => {
    setCurrentStep(e.nativeEvent.position);
  };

  return (
    <ImageBackground
      source={require('../../assets/bg1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={onPageSelected}
          ref={pagerRef}
        >
          {steps.map((step, index) => (
            <View style={styles.page} key={index}>
              <Text style={styles.title}>{step.title}</Text>
              <Text style={styles.txt}>{step.text}</Text>
            </View>
          ))}
        </PagerView>

        <View style={styles.stepContainer}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.stepDot,
                currentStep === index && styles.activeStepDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.linkText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.linkText}>
              {currentStep === steps.length - 1 ? 'Start' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: '#EA4A57',
    marginHorizontal: 40,
    marginVertical: 100,
    borderRadius: 50,
    padding: 30,
    height: 420,
    justifyContent: 'space-between',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  txt: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80,
  },
  stepDot: {
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeStepDot: {
    backgroundColor: '#fff',
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#fff',
    fontSize: 18,
  },
});
