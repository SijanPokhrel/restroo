import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pizza = () => {
    const navigation = useNavigation();

    const foodItems = [
        { name: 'Chicken Pizza', price: 'Rs. 990', image: require('../../assets/pizza/pizza1.jpg') },
        { name: 'Vegetable Pizza', price: 'Rs. 600', image: require('../../assets/pizza/pizza2.jpg') },
        { name: 'Cheese Pizza', price: 'Rs. 670', image: require('../../assets/pizza/pizza3.jpg') },
        { name: 'Egg Pizza', price: 'Rs. 750', image: require('../../assets/pizza/pizza4.jpg') },
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

export default Pizza;

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
