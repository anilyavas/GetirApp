import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../constants/colors';

const DetailsListContainer = ({ item }) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={item}
        renderItem={({ item }) => <Text style={styles.title}>{item.name}</Text>}
        horizontal
      />
    </View>
  );
};

export default DetailsListContainer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  flatlistContainer: {
    gap: 20,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});
