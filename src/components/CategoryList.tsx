import { View, StyleSheet, FlatList } from 'react-native';
import categories from '../../assets/data/categories';
import CategoryListItem from './CategoryListItem';

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'space-between',
        }}
        data={categories}
        renderItem={({ item }) => <CategoryListItem item={item} />}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={<View style={{ height: 20 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
});
