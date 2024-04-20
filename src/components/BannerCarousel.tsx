import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const banners = [
  'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
  'https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg',
  'https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg',
  'https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg',
];
const BannerCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        renderItem={(item) => (
          <Image source={{ uri: item.item }} style={styles.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default BannerCarousel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width * 1,
    height: height * 0.3,
    resizeMode: 'stretch',
  },
});
