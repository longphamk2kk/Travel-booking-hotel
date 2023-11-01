import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import axios from '../../axios';
const mockReviews = [
  {comment: 'Great hotel, highly recommend!', author: 'John Doe'},
  {comment: 'Excellent service and comfortable rooms.', author: 'Jane Smith'},
  {comment: 'Beautiful location and friendly staff.', author: 'David Johnson'},
];
const DetailHotel = ({navigation, route}) => {
  const {hotel} = route.params;
  const {searchParams} = route.params
  const [hotelDetail, setHotelDetail] = useState()
  const [roomList, setRoomList] = useState([])

  useEffect(() => {
    axios.get("Hotel/"+hotel.hotelID)
      .then(async (response) => {
        setHotelDetail(response.data)
        // console.log()
        setRoomList(response.data.Rooms)
      })
  },[hotel.hotelID])

  const renderAmenityItem = ({item}) => {
    return (
      <View style={styles.amenityView}>
        <Text style={styles.amenityText}>{item}</Text>
      </View>
    );
  };
  const renderReviewItem = ({item}) => {
    return (
      <View style={styles.reviewItem}>
        <Text style={styles.reviewAuthor}>{item.author}</Text>
        <Text style={styles.reviewText}>{item.comment}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {backgroundColor: '#1A94FF'}]}>
        <TouchableOpacity
          style={{right: 90}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/icon_back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Chi tiết khách sạn
        </Text>
      </View>
      <Image
        source={require('../../assets/images/hotel1.png')}
        style={styles.hotelImage}
      />
      <View style={styles.content}>
        <Text style={[styles.hotelName, {color: '#020202'}]}>
          {hotel.hotelName}
        </Text>
        <View style={styles.ratingContainer}>
          <Text
            style={[styles.ratingText, {fontWeight: 'bold', color: '#020202'}]}>
            Đánh giá:
          </Text>
          <Text style={styles.ratingValue}>{hotel.rating}/10</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewsText}>Bình luận</Text>
          <FlatList
            data={mockReviews} // Sử dụng dữ liệu giả định
            renderItem={renderReviewItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.amenitiesContainer}>
          <Text style={styles.reviewsText}>Tiện ích</Text>
          <FlatList
            data={hotel.amenities}
            renderItem={renderAmenityItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
        <View style={styles.checkInOutContainer}>
          <Text style={styles.sectionTitle}>Check-in / Check-out</Text>
          <Text>Check-in: {hotel.checkIn}</Text>
          <Text>Check-out: {hotel.checkOut}</Text>
        </View>
        <View style={styles.bookingContainer}>
          <Text style={styles.sectionTitle}>Đặt phòng</Text>
          <Text style={styles.priceText}>Giá: {hotel.minPrice} VND/ngày</Text>
          <Text style={styles.sectionTitle}>Mô tả</Text>
          {/*<Text style={styles.hotelDescription}>{hotel.description}</Text>*/}
          <TouchableOpacity
            style={styles.bookingButton}
            onPress={() =>
              navigation.navigate('RoomsScreen', {hotelDetail, searchParams})
            }>
            <Text style={styles.bookingButtonText}>Chọn phòng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    tintColor: 'white',
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  hotelImage: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hotelDescription: {
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  ratingValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181616',
    marginRight: 5,
  },
  reviewsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a0a0a',
  },
  amenitiesContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#231f1f',
  },
  amenityView: {
    backgroundColor: '#ECECEC',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  amenityText: {
    fontSize: 14,
  },
  checkInOutContainer: {
    marginBottom: 10,
  },
  bookingContainer: {
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bookingButton: {
    backgroundColor: '#1A94FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  reviewItem: {
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 10,
    height: 70,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000'
  },
  reviewAuthor: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default DetailHotel;
