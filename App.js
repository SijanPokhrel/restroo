import React from 'react';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppLoaderScreen"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="AppLoaderScreen"
          component={AppLoaderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminLogin"
          component={AdminLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminSignup"
          component={AdminSignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Burger" component={BurgerScreen} />
        <Stack.Screen name="Momo" component={MomoScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Noodle" component={NoodleScreen} />
        <Stack.Screen
          name="FoodTabs"
          component={FoodNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Back"
          component={OrderScreen}
          options={{ headerTitle: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
