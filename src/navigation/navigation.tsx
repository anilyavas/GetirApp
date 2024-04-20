import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GiftsScreen from '../screens/GiftsScreen';
import { colors } from '../constants/colors';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CategoryDetails' component={CategoryDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
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
        name='Gifts'
        component={GiftsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
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
