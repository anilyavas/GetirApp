import { Link } from 'expo-router';
import { Text, StyleSheet, Image, Pressable } from 'react-native';

const CategoryListItem = ({ item }) => {
  return (
    <Link href={'./CategoryDetailsScreen'}>
      <Pressable style={styles.container}>
        <Image source={{ uri: item.src }} style={styles.img} />
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </Link>
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
