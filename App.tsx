import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}
