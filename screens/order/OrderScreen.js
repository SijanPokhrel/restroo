import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

const levels = ['0', 'Low', 'Medium', 'High'];

const OrderNow = ({ route }) => {
    const { name, price, image } = route.params;

    const [ingredients, setIngredients] = useState({
        Oil: 'Medium',
        Salt: 'Medium',
        Spice: 'Medium',
        Chilli: 'Medium',
        Onion: 'Medium',
        Tomato: 'Medium',
    });

    const handleLevelChange = (ingredient, level) => {
        setIngredients(prev => ({ ...prev, [ingredient]: level }));
    };

    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>

                    <TouchableOpacity style={styles.orderButton} onPress={() => alert('Order placed!')}>
                        <Text style={styles.orderButtonText}>Order Now</Text>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    <View style={styles.customizeSection}>
                        <Text style={styles.customizeTitle}>Customize Your Own Ingredients! 😊</Text>

                        {Object.keys(ingredients).map((ingredient) => (
                            <View key={ingredient} style={styles.ingredientBlock}>
                                <Text style={styles.ingredientLabel}>{ingredient}</Text>
                                <View style={styles.levelRow}>
                                    {levels.map((level) => (
                                        <TouchableOpacity
                                            key={level}
                                            style={[
                                                styles.levelButton,
                                                ingredients[ingredient] === level && styles.selectedLevelButton
                                            ]}
                                            onPress={() => handleLevelChange(ingredient, level)}
                                        >
                                            <Text
                                                style={[
                                                    styles.levelText,
                                                    ingredients[ingredient] === level && styles.selectedLevelText
                                                ]}
                                            >
                                                {level}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.line} />
                    <Text style={styles.descriptionhead}>Description</Text>
                    <Text style={styles.descriptiontxt}>
                        Fresh. Crispy. Satisfying.
                        Our Veg Burger is a delicious harmony of flavor-packed veggies, perfectly spiced and crafted into a golden-fried patty. Nestled in a soft, toasted bun, it's topped with crunchy lettuce, juicy tomatoes, and our signature house-made sauce.
                    </Text>

                    <TouchableOpacity
                        style={styles.orderCustomButton}
                        onPress={() => alert(`Order placed with: ${JSON.stringify(ingredients)}`)}
                    >
                        <Text style={styles.orderCustomButtonText}>Order with Customization</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

export default OrderNow;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 320,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    price: {
        fontSize: 18,
        color: '#EA4A57',
        marginBottom: 10,
        fontWeight: '600',
    },
    orderButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: 1.5,
        borderColor: '#D6D6D6',
        borderRadius: 35,
        width: 150,
        marginBottom: 15,
    },
    orderButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    customizeSection: {
        marginTop: 5,
    },
    customizeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    ingredientBlock: {
        marginBottom: 15,
    },
    ingredientLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    levelButton: {
        flex: 1,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        borderRadius: 8,
        marginRight: 5,
        alignItems: 'center',
    },
    levelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    selectedLevelButton: {
        backgroundColor: '#EA4A57',
        borderColor: '#EA4A57',
    },
    levelText: {
        color: '#333',
        fontWeight: '500',
    },
    selectedLevelText: {
        color: '#fff',
    },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    descriptionhead: {
        fontSize: 21,
        fontWeight: '600',
        marginBottom: 10,
    },
    descriptiontxt: {
        fontSize: 15,
        color: '#878787',
    },
    orderCustomButton: {
        marginTop: 20,
        backgroundColor: '#EA4A57',
        paddingVertical: 12,
        borderRadius: 35,
        alignItems: 'center',
    },
    orderCustomButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
