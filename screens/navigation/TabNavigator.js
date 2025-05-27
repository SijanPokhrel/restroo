import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BurgerScreen from '../foodComponent/BurgerScreen';
import PizzaScreen from '../foodComponent/PizzaScreen';
import MomoScreen from '../foodComponent/MomoScreen';
import NoodleScreen from '../foodComponent/NoodleScreen';

const Tab = createMaterialTopTabNavigator();

const FoodNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Burger" component={BurgerScreen} />
      <Tab.Screen name="Pizza" component={PizzaScreen} />
      <Tab.Screen name="Momo" component={MomoScreen} />
      <Tab.Screen name="Noodle" component={NoodleScreen} />

      
    </Tab.Navigator>
  );
};

export default FoodNavigation;
