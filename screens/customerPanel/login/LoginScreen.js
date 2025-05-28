import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Missing Fields', 'Please enter both email and password.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('Logged in user:', user.email);

            
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                console.log('User Firestore data:', userDoc.data());
            }

            navigation.replace('HomeTabs');
        } catch (error) {
            console.error('Login error:', error.message);
            Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.signintitle}>Login to your account.</Text>
                <Text style={styles.signintxt}>Please sign in to your account </Text>

                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#878787"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#878787"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.footerText}>
                        Don’t have an account? <Text style={styles.link}>Sign up</Text>
                    </Text>
                </TouchableOpacity>

                <Text style={styles.ortxt}>or</Text>

                <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
                    <Text style={styles.footerText2}>
                        <Text style={styles.link}>Login</Text> as administrator
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },
    signintitle: {
        fontSize: 36,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#101010',
    },
    signintxt: {
        fontSize: 16,
        fontWeight: '600',
        color: '#878787',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#EA4A57',
        padding: 20,
        borderRadius: 40,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    footerText: {
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
    },
    footerText2: {
        color: '#555',
        textAlign: 'center',
    },
    link: {
        color: '#EA4A57',
        fontWeight: '500',
    },
    ortxt: {
        textAlign: 'center',
        color: '#555',
        marginVertical: 5,
    },
});
