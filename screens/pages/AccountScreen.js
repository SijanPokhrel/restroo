import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const MyAccount = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const fullname = 'Username';

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setEmail(currentUser.email);
        }
    }, []);

    const handleEditProfile = () => {
        alert('Edit Profile Clicked!');
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            navigation.replace('LoginScreen'); 
        } catch (error) {
            alert('Logout failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>My Account</Text>

                <TouchableOpacity onPress={handleLogout} style={styles.logoutTouch}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#EA4A57" />
                    ) : (
                        <Image
                            source={require('../../assets/log-out.png')}
                            style={styles.logouticon}
                        />
                    )}
                </TouchableOpacity>

                <View style={styles.headerLine} />
            </View>

            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/social/user.png')}
                        style={styles.profileImage}
                    />
                </View>

                <Text style={styles.fullname}>{fullname}</Text>
                <Text style={styles.email}>{email}</Text>

                <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MyAccount;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerWrapper: {
        backgroundColor: '#fff',
        paddingBottom: 10,
        position: 'relative',
    },
    header: {
        fontSize: 21,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    logoutTouch: {
        position: 'absolute',
        top: 0,
        right: 20,
    },
    logouticon: {
        height: 20,
        width: 20,
    },
    headerLine: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginBottom: 20,
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    profileContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: '#28C76F',
    },
    fullname: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    email: {
        fontSize: 16,
        color: '#777',
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#EA4A57',
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        width: 180,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
