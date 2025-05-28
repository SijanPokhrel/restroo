import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar
} from 'react-native';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log({ fullname, email, message });
    alert('Message Sent!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Contact Us</Text>
          <View style={styles.headerLine} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullname}
          onChangeText={setFullname}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textArea}
          placeholder="Your Message"
          multiline
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        <View style={styles.contactCallChat}>
          <TouchableOpacity style={styles.ccbutton} onPress={handleSubmit}>
            <Image source={require('../../assets/social/phone-call.png')} style={styles.ccicon} />
            <Text style={styles.contactbuttonText}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ccbutton} onPress={handleSubmit}>
            <Image source={require('../../assets/social/message.png')} style={styles.ccicon} />
            <Text style={styles.contactbuttonText}>Rate Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line} />

        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Image source={require('../../assets/social/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <Image source={require('../../assets/social/twitter.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://tiktok.com')}>
            <Image source={require('../../assets/social/tik-tok.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <Image source={require('../../assets/social/instagram.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
            <Image source={require('../../assets/social/linkedin.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>© Restroo. All rights reserved. Terms of privacy policy
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
  },

  headerWrapper: {
    // paddingTop: 50,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  header: {
    fontSize: 21,
    fontWeight: '600',  
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  headerLine: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#EA4A57',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  contactCallChat: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  ccbutton: {
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EA4A57',
    width: 150,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  ccicon: {
    height: 18,
    width: 18,
  },
  contactbuttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  copyright: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
