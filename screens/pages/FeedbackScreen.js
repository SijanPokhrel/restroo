import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [sending, setSending] = useState(false);

  const sendFeedbackToAdmin = async () => {
    if (feedback.trim() === '') {
      Alert.alert('Error', 'Please enter your feedback.');
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://your-backend-api.com/api/send-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: feedback.trim() }),
      });

      if (response.ok) {
        Alert.alert('Thank you!', 'Your feedback has been sent.');
        setFeedback('');
      } else {
        Alert.alert('Error', 'Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again later.');
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      keyboardVerticalOffset={100}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Send Feedback</Text>
          <View style={styles.headerLine} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.infoText}>
          Share your thoughts below to help us improve.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your feedback here..."
            value={feedback}
            onChangeText={setFeedback}
            style={styles.input}
            multiline
            editable={!sending}
            maxLength={500}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, sending && styles.buttonDisabled]}
          onPress={sendFeedbackToAdmin}
          disabled={sending}
        >
          <Text style={styles.buttonText}>{sending ? 'Sending...' : 'SUBMIT'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#fff' },

  headerWrapper: {
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerLine: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },

  container: {
    flexGrow: 1,
    padding: 20,
  },

  infoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    lineHeight: 22,
  },

  inputContainer: {
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#EDEDED',
    minHeight: 120,
    marginBottom: 20,
  },

  input: {
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    flex: 1,
  },

  button: {
    backgroundColor: '#EA4A57',
    paddingVertical: 12,
    borderRadius: 35,
    alignItems: 'center',
  },

  buttonDisabled: {
    backgroundColor: '#cc6773',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
