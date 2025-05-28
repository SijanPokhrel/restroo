import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AppLoaderScreen from './screens/appLoader/AppLoaderScreen';
import StartScreen from './screens/splash/SplashScreen';
import LoginScreen from './screens/customerPanel/login/LoginScreen';
import SignupScreen from './screens/customerPanel/signup/SignupScreen';
import AdminLoginScreen from './screens/adminPanel/AdminLoginScreen';
import AdminSignupScreen from './screens/adminPanel/AdminSignupScreen';
import HomeTabs from './screens/navigation/BottomTabNavigator';
import BurgerScreen from './screens/foodComponent/BurgerScreen';
import MomoScreen from './screens/foodComponent/MomoScreen';
import PizzaScreen from './screens/foodComponent/PizzaScreen';
import NoodleScreen from './screens/foodComponent/NoodleScreen';
import OrderScreen from './screens/order/OrderScreen';
import FoodNavigation from './screens/navigation/TabNavigator';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <AppLoaderScreen />; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={user ? 'HomeTabs' : 'Start'}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="AdminSignup" component={AdminSignupScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Burger" component={BurgerScreen} />
        <Stack.Screen name="Momo" component={MomoScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Noodle" component={NoodleScreen} />
        <Stack.Screen name="FoodTabs" component={FoodNavigation} />
        <Stack.Screen name="Back" component={OrderScreen} options={{ headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
