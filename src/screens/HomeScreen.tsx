import { View, StyleSheet } from 'react-native';
import HeaderBanner from '../components/HeaderBanner';
import Address from '../components/Address';
import BannerCarousel from '../components/BannerCarousel';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderBanner />
      <Address />
      <BannerCarousel />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
