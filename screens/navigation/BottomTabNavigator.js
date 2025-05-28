import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';

import HomeScreen from '../pages/HomeScreen';
import FeedbackScreen from '../pages/FeedbackScreen';
import MenuScreen from '../pages/MenuScreen';
import ContactScreen from '../pages/ContactScreen';
import AccountScreen from '../pages/AccountScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#EA4A57',
                tabBarInactiveTintColor: '#000',
            }}
        >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: focused ? "#EA4A57" : "black" }} source={require('../../assets/homeb.png')} />
                        </View>
                    )
                }} />

            <Tab.Screen name="Menu" component={MenuScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: focused ? "#EA4A57" : "black" }} source={require('../../assets/food.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Feedback" component={FeedbackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: focused ? "#EA4A57" : "black" }} source={require('../../assets/review.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Contact" component={ContactScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: focused ? "#EA4A57" : "black" }} source={require('../../assets/contact-us.png')} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Account" component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: focused ? "#EA4A57" : "black" }} source={require('../../assets/contactb.png')} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});