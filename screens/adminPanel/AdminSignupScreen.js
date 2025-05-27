import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signed up with:', name, email, password);
    navigation.replace('LoginScreen'); 
  };
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.signintitle}>Create your new administrator account.</Text>
        <Text style={styles.signintxt}>Please fill the form to create account</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#878787"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#878787"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgreeTerms(!agreeTerms)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
            {agreeTerms && <Text style={styles.checkmark}>✔</Text>}
          </View>
          <Text style={styles.checkboxLabel}>I Agree with <Text style={{ color: '#FE8C00' }}>Terms of Service</Text>  and  <Text style={{ color: '#FE8C00' }}>Privacy Policy</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !agreeTerms && styles.buttonDisabled]}
          onPress={handleSignup}
          disabled={!agreeTerms}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
          <Text style={styles.footerText}>
            Already have an administrator account? <Text style={styles.link}>Login</Text>
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
    marginBottom: 10,
  },
 
  signintxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#878787',
    marginBottom: 30,
  },
   label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#101010',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
  },

  checkboxChecked: {
    backgroundColor: '#FE8C00',
    borderColor: '#FE8COO',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight:600
  },

  buttonDisabled: {
    backgroundColor: '#FE8C00',
  },

  button: {
    backgroundColor: '#FE8C00',
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
  link: {
    color: '#FE8C00',
    fontWeight: '500',
  },
});
