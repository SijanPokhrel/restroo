import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Noodles = () => {
    const navigation = useNavigation();

    const foodItems = [
        { name: 'Veg Fried Noodles', price: 'Rs. 80', image: require('../../assets/noodles/fnoodles.jpg') },
        { name: 'Chicken Chowmin', price: 'Rs. 150', image: require('../../assets/noodles/cnoodles.jpg') },
        { name: 'Veg Thukpa', price: 'Rs. 100', image: require('../../assets/noodles/thukpa.jpg') },
        { name: 'Current 2X Spicy', price: 'Rs. 110', image: require('../../assets/noodles/current.jpg') },
    ];

    return (
        <View style={styles.container}>
            {foodItems.map((item, index) => (
                <View key={index} style={styles.foodMainBox}>
                    <View style={styles.imageWrapper}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Back', {
                                    name: item.name,
                                    price: item.price,
                                    image: item.image,
                                })
                            }
                        >
                            <Image source={item.image} style={styles.foodMainimage} />
                        </TouchableOpacity>
                       
                    </View>
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.foodPrice}>{item.price}</Text>
                </View>
            ))}
        </View>
    );
};

export default Noodles;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    foodMainBox: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 7,
        padding: 7,
        marginBottom: 10,
        elevation: 1,
    },
    imageWrapper: {
        position: 'relative',
    },
    foodMainimage: {
        height: 120,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 7,
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    foodPrice: {
        fontSize: 14,
        color: '#EA4A57',
        marginTop: 4,
    },
});
