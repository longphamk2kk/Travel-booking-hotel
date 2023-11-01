import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';

const BookingScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const {searchParams} = route.params;
  const {room} = route.params;

  console.log(room)

  const handleBooking = () => {
    console.log('Booking details:', {
      name,
      phoneNumber,
      email,
    });
    navigation.navigate('SuccessScreen', {
      name,
      phoneNumber,
      email,
      searchParams,
      room
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Thông tin đặt phòng</Text>
      <View>
        <Text>Họ và Tên</Text>
        <CustomTextInput
          placeholder="Họ và tên"
          text={name}
          setText={setName}
        />
      </View>
      <View>
        <Text>Số điện thoại</Text>
        <CustomTextInput
          placeholder="Số điện thoại"
          text={phoneNumber}
          setText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <View>
        <Text>Email</Text>
        <CustomTextInput
          placeholder="Email"
          text={email}
          setText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bookingInfo}>
        <Text style={styles.bookingInfoText}>
          Khách sạn: {room.hotelName}
        </Text>
        <Text style={styles.bookingInfoText}>
          Loại phòng: {room.RoomNumber}
        </Text>
        <Text style={styles.bookingInfoText}>
          Ngày check-in: {searchParams.departureDate}
        </Text>
        <Text style={styles.bookingInfoText}>
          Số đêm nghỉ: {searchParams.nights} đêm
        </Text>
        <Text style={styles.bookingInfoText}>
          Số phòng: {searchParams.rooms} phòng
        </Text>
        <Text style={styles.bookingInfoText}>
          Số khách: {searchParams.adults} người
        </Text>
        <Text style={styles.bookingInfoText}>
          Tổng giá tiền: {room.Price} VND
        </Text>
      </View>

      <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
        <Text style={styles.bookingButtonText}>Xác nhận</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingInfo: {
    marginTop: 20,
    marginBottom: 30,
  },
  bookingInfoText: {
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
});

export default BookingScreen;
