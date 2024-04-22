import { View, Text, StyleSheet, FlatList } from 'react-native';
import categories from '../../assets/data/categories';
import { colors } from '../constants/colors';
import DetailsListContainer from '../components/DetailsListContainer';

const CategoryDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <DetailsListContainer item={categories} />
    </View>
  );
};

export default CategoryDetailsScreen;
const styles = StyleSheet.create({
  container: {},
});
