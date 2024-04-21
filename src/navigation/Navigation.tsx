import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GiftsScreen from '../screens/GiftsScreen';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Details' component={CategoryDetailsScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Navigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='home'
              size={30}
              color={focused ? colors.primary : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='search'
              size={30}
              color={focused ? colors.primary : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='user'
              size={30}
              color={focused ? colors.primary : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Gift'
        component={GiftsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='gift'
              size={30}
              color={focused ? colors.primary : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
