import React, { useState, useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';

import BurgerScreen from '../foodComponent/BurgerScreen';
import PizzaScreen from '../foodComponent/PizzaScreen';
import MomoScreen from '../foodComponent/MomoScreen';
import NoodleScreen from '../foodComponent/NoodleScreen';

const initialLayout = { width: Dimensions.get('window').width };

const allTabs = [
  { key: 'burger', title: 'Burger', icon: require('../../assets/burgerr.png'), component: BurgerScreen },
  { key: 'pizza', title: 'Pizza', icon: require('../../assets/pizza.png'), component: PizzaScreen },
  { key: 'momo', title: 'Momo', icon: require('../../assets/momos.png'), component: MomoScreen },
  { key: 'noodle', title: 'Noodles', icon: require('../../assets/noodles.png'), component: NoodleScreen },
];

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTabs = allTabs.filter((tab) =>
    tab.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const routes = filteredTabs.map(({ key, title }) => ({ key, title }));

  const renderScene = SceneMap(
    filteredTabs.reduce((scenes, tab) => {
      scenes[tab.key] = tab.component;
      return scenes;
    }, {})
  );

  useEffect(() => {
    if (index >= filteredTabs.length) {
      setIndex(0);
    }
  }, [filteredTabs, index]);

  const handleTabPress = (i) => {
    setIndex(i);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.imgcontainer}>
          <Image style={styles.hero} source={require('../../assets/herooo.jpg')} />
          <View style={styles.overlay}>
            <View style={styles.locationContainer}>
              <Image source={require('../../assets/pin-map.png')} style={styles.overlayImage} />
              <Text style={styles.overlayText}>Koteshwor, Kathmandu</Text>
            </View>

            {searchVisible ? (
              <View style={styles.searchRow}>
                <View style={styles.searchBoxInOverlay}>
                  <Image source={require('../../assets/find.png')} style={styles.inputSearchIcon} />
                  <TextInput
                    placeholder="Search category..."
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchInputWithIconOverlay}
                    autoFocus
                  />
                </View>
                <TouchableOpacity onPress={() => {
                  setSearchVisible(false);
                  setSearchQuery('');
                }} style={styles.cancelBtnWrapper}>
                  <Text style={styles.cancelBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.searchWrapper}
                onPress={() => setSearchVisible(true)}
              >
                <Image source={require('../../assets/find.png')} style={styles.searchIcon} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.herotxt}>Restroo provides the best food for you</Text>
        </View>

        <View style={styles.container2}>
          <LinearGradient
            colors={['#ea4a57', 'rgba(255, 122, 122, 0.5)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container3}
          >
            <Text style={styles.offtxt}>Up to 40% OFF</Text>
            <Text style={styles.ordertxt}>ON YOUR FIRST ORDER</Text>
            <TouchableOpacity style={styles.customButton}>
              <Text style={styles.buttonText}>ORDER NOW</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.topicontxt}>Find by Category</Text>

          <View style={styles.foodIconContainer}>
            {filteredTabs.length === 0 ? (
              <Text style={{ color: '#999', fontStyle: 'italic' }}>No categories found</Text>
            ) : (
              filteredTabs.map((tab, i) => (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => handleTabPress(i)}
                  style={[styles.iconWrapper, index === i && styles.activeIconWrapper]}
                >
                  <View style={styles.icontxtb}>
                    <Image source={tab.icon} style={styles.iconimage} />
                    <Text style={styles.foodnavtxt}>{tab.title}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>

          <View style={{ height: 450 }}>
            {filteredTabs.length > 0 ? (
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={() => null}
              />
            ) : (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No food items to display</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    marginRight: 20,
    marginLeft: 20,
  },
  container3: {
    paddingVertical: 35,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  imgcontainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    marginBottom: 40,
  },
  hero: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    gap: 25,
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlayImage: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 8,
    resizeMode: 'contain',
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  searchWrapper: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
    resizeMode: 'contain',
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  searchBoxInOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
    marginRight: 10,
  },
  inputSearchIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
    marginRight: 10,
  },
  searchInputWithIconOverlay: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cancelBtnWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cancelBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },

  herotxt: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
  },
  customButton: {
    width: 150,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  offtxt: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    marginBottom: 15,
  },
  ordertxt: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  buttonText: {
    color: '#EA4A57',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topicontxt: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 20,
  },
  foodIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconimage: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  iconWrapper: {
    padding: 15,
    borderRadius: 10,
  },
  activeIconWrapper: {
    backgroundColor: '#EA4A57',
  },
  foodnavtxt: {
    color: '#fff',
    marginTop: 5,
  },
  icontxtb: {
    alignItems: 'center',
  },
});
