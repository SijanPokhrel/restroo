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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase'; // ✅ Import your Firebase auth instance

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing Fields', 'Please enter your email and password.');
      return;
    }

    if (!agreeTerms) {
      Alert.alert('Terms Required', 'You must agree to the Terms and Privacy Policy.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully');
      Alert.alert('Success', 'Account created successfully!');
      navigation.replace('LoginScreen');
    } catch (error) {
      console.error('Signup Error:', error);
      Alert.alert('Signup Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.signintitle}>Create your new account.</Text>
        <Text style={styles.signintxt}>Please fill the form to create account</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#878787"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#878787"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgreeTerms(prev => !prev)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
            {agreeTerms && <Text style={styles.checkmark}>✔</Text>}
          </View>
          <Text style={styles.checkboxLabel}>
            I Agree with{' '}
            <Text style={{ color: '#EA4A57' }}>Terms of Service</Text> and{' '}
            <Text style={{ color: '#EA4A57' }}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !agreeTerms && styles.buttonDisabled]}
          onPress={handleSignup}
          disabled={!agreeTerms}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.link}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, paddingHorizontal: 30, justifyContent: 'center' },
  signintitle: { fontSize: 36, fontWeight: '700', color: '#333', marginBottom: 10 },
  signintxt: { fontSize: 16, fontWeight: '600', color: '#878787', marginBottom: 30 },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#101010' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: { backgroundColor: '#EA4A57', borderColor: '#EA4A57' },
  checkmark: { color: '#fff', fontSize: 12, textAlign: 'center', lineHeight: 18 },
  checkboxLabel: { fontSize: 14, color: '#333', fontWeight: '600' },
  buttonDisabled: { backgroundColor: '#ddd' },
  button: {
    backgroundColor: '#c1232b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  footerText: { color: '#878787', fontSize: 16, fontWeight: '600' },
  link: { color: '#EA4A57', fontWeight: '700' },
});
