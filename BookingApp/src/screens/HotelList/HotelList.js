import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import hotels from './mockData';

const HotelList = ({navigation, route}) => {
  const {searchParams} = route.params;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.hotelItem}
        onPress={() =>
          navigation.navigate('DetailHotel', {searchParams, hotel: item})
        }>
        <Image source={item.image} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{item.name}</Text>
          <Text style={styles.hotelRating}>Rating: {item.rating}/10</Text>
          <Text style={styles.hotelPrice}>Price: {item.price} VND</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {backgroundColor: '#0099FF'}]}>
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
          Danh sach khach san
        </Text>
      </View>
      <FlatList
        data={hotels}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 80,
    height: 80,
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

export default HotelList;
