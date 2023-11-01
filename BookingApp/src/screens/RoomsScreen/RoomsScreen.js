import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const RoomsScreen = ({navigation, route}) => {

  const {hotelDetail} = route.params;
  const {searchParams} = route.params;

  const renderItem = ({item}) => {
    item['hotelName'] = hotelDetail.HotelName
    return (
      <View style={styles.hotelItem}>
        <Image source={require('../../assets/images/hotel1.png')} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{item.RoomNumber}</Text>
          <Text style={styles.hotelRating}>{item.Description}</Text>
          <Text style={styles.hotelPrice}>Price: {item.Price} VND</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BookingScreen', {room: item, searchParams})}>
          <Text style={styles.bookingButtonText}>Đặt Phòng</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {backgroundColor: '#1A94FF'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/icon_back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            marginRight: 100,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Danh sách phòng
        </Text>
      </View>
      <FlatList
        data={hotelDetail.Rooms}
        renderItem={renderItem}
        keyExtractor={item => item.RoomID.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bookingButtonText: {
    backgroundColor: '#1A94FF',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backIcon: {
    tintColor: 'white',
    height: 30,
    width: 30,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  hotelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    padding: 10,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
  },
  hotelImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelRating: {
    fontSize: 14,
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 14,
  },
});

export default RoomsScreen;
