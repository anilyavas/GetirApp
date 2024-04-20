import { View, Text, StyleSheet, Image } from 'react-native';

const CategoryListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.src }} style={styles.img} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

export default CategoryListItem;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  img: {
    width: 75,
    height: 75,
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
});
