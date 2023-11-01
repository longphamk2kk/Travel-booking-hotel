import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from "../../axios";

const HotelList = ({navigation, route}) => {
  const {searchParams} = route.params;
  const [hotelList, setHotelList] =  useState([]);

  useEffect(  () => {
    // console.log(searchParams)
    const fetchHotels = async () =>{
      try{
        const response = await axios.get('Hotel')
        setHotelList(response.data)
      }catch (e){
        console.log(e);
      }
    }
    fetchHotels();
  },[])

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.hotelItem}
        onPress={() => navigation.navigate('DetailHotel', {hotel: item, searchParams})}>
        <Image source={require('../../assets/images/hotel1.png')} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{item.hotelName}</Text>
          <Text style={styles.hotelRating}>{item.address}</Text>
          <Text style={styles.hotelPrice}>Price: {item.minPrice} VND</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {backgroundColor: '#3399FF'}]}>
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
        data={hotelList}
        renderItem={renderItem}
        keyExtractor={item => item.hotelID.toString()}
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

export default HotelList;
