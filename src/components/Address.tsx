import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const Address = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.addressText}>
          <Text style={{ color: '#8146ec', fontWeight: 'bold' }}>Ev,</Text>{' '}
          Cumhuriyet Caddesi, Arslan sok...
        </Text>
        <FontAwesome5 name='chevron-down' size={20} color='#8146ec' />
      </View>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 14 }}>TVS</Text>
      </View>
    </View>
  );
};

export default Address;
const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    backgroundColor: '#fdd001',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    flex: 1,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderEndEndRadius: 20,
    flexDirection: 'row',
  },
  subContainer: {
    padding: 10,
  },
});
