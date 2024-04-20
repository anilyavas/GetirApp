import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryListItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('CategoryDetails')}
      style={styles.container}
    >
      <Image source={{ uri: item.src }} style={styles.img} />
      <Text style={styles.title}>{item.name}</Text>
    </Pressable>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
});
