import { View, StyleSheet, Image, Dimensions } from 'react-native';
import getirlogo from '../../assets/images/getirlogo.png';

const { width, height } = Dimensions.get('window');
const HeaderBanner = () => {
  return (
    <View style={styles.container}>
      <Image source={getirlogo} style={styles.logoImg} resizeMode='contain' />
    </View>
  );
};

export default HeaderBanner;
const styles = StyleSheet.create({
  logoImg: {
    width: width * 0.2,
    height: height * 0.05,
  },
  container: {
    backgroundColor: '#8c3af6',
    width: width,
    height: height * 0.12,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
