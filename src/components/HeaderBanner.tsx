import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
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
    width: width * 0.4,
    height: height * 0.09,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#8146ec',
    width: width,
    height: height * 0.15,
    paddingTop: 50,
  },
});
