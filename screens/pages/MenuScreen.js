import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const menuItems = [
    // Burger Items
    { name: 'Chicken Burger', price: 'Rs. 350', image: require('../../assets/burger/burger1.jpg') },
    { name: 'Veg Burger', price: 'Rs. 300', image: require('../../assets/burger/burger2.jpg') },
    { name: 'Cheese Burger', price: 'Rs. 250', image: require('../../assets/burger/burger3.jpg') },
    { name: 'Ham Burger', price: 'Rs. 300', image: require('../../assets/burger/burger4.jpg') },

    // Momo Items
    { name: 'Chicken Momo', price: 'Rs. 150', image: require('../../assets/momo/momo1.jpg') },
    { name: 'Veg Momo', price: 'Rs. 130', image: require('../../assets/momo/momo2.jpg') },
    { name: 'Fried Momo', price: 'Rs. 180', image: require('../../assets/momo/momo3.jpg') },

    // Pizza Items
    { name: 'Margherita Pizza', price: 'Rs. 450', image: require('../../assets/pizza/pizza1.jpg') },
    { name: 'Cheese Pizza', price: 'Rs. 500', image: require('../../assets/pizza/pizza2.jpg') },
    { name: 'Pepperoni Pizza', price: 'Rs. 550', image: require('../../assets/pizza/pizza3.jpg') },

    // Noodles Items
    { name: 'Chicken Noodles', price: 'Rs. 220', image: require('../../assets/noodles/fnoodles.jpg') },
    { name: 'Veg Current Noodles', price: 'Rs. 200', image: require('../../assets/noodles/current.jpg') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Menu Items</Text>
          <View style={styles.line} />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.container}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.foodMainBox}>
              <TouchableOpacity
                style={styles.imageWrapper}
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
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerWrapper: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 10,
  },
  header: {
    fontSize: 21,
    fontWeight: 600,
    textAlign: 'center',
    color: '#333',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20
  },
  foodMainBox: {
    width: '50%',
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
