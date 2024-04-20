import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');
const Address = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.addressText}>
          <Text style={{ color: colors.secondary, fontWeight: 'bold' }}>
            Ev,
          </Text>{' '}
          Cumhuriyet Caddesi, Arslan sok...
        </Text>
        <FontAwesome5 name='chevron-down' size={20} color={colors.secondary} />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 12, color: colors.secondary, fontWeight: '600' }}
        >
          TVS
        </Text>
        <Text style={{ color: colors.secondary, fontWeight: 'bold' }}>
          30+ dk
        </Text>
      </View>
    </View>
  );
};

export default Address;
const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    backgroundColor: colors.yellow,
    alignItems: 'center',
  },
  addressText: {
    fontSize: 14,
    flex: 1,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  subContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
