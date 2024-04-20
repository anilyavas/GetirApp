import { View, StyleSheet } from 'react-native';
import HeaderBanner from '../components/HeaderBanner';
import Address from '../components/Address';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBanner />
      <Address />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
