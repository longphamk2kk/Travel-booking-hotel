import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import GetStart from '../GetStart/GetStart';
const AddPhoneNumber = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/icons/icon_back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>
          To continue enter{'\n'}your{' '}
          <Text style={styles.highlightText}>infomation</Text>
        </Text>
        <Text style={styles.middleText}>
          Enter your infomation to use BookingAppp and enjoy your trip.
        </Text>
      </View>
      <View style={styles.phoneView}>
        <Text style={styles.phoneText}>First name</Text>
        <CustomTextInput placeholder="First name" style={styles.phoneInput} />
      </View>
      <View style={styles.phoneView}>
        <Text style={styles.phoneText}>Last name</Text>
        <CustomTextInput placeholder="Last name" style={styles.phoneInput} />
      </View>
      <View style={styles.phoneView}>
        <Text style={styles.phoneText}>Email</Text>
        <CustomTextInput placeholder="Email" style={styles.phoneInput} />
      </View>
      <View style={styles.phoneView}>
        <Text style={styles.phoneText}>Phone number</Text>
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Phone number"
          style={styles.phoneInput}
        />
      </View>
      <View style={styles.phoneView}>
        <Text style={styles.phoneText}>Adress</Text>
        <CustomTextInput placeholder="Adress" style={styles.phoneInput} />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonVerify}
          onPress={() => navigation.navigate(GetStart)}>
          <Text style={styles.textVerify}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPhoneNumber;

const styles = StyleSheet.create({
  backIcon: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
  headerTextView: {
    marginLeft: 30,
    marginTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  highlightText: {
    color: '#3399FF',
    fontWeight: 'bold',
  },
  middleText: {
    color: 'grey',
    width: 250,
    marginTop: 20,
  },
  phoneText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phoneView: {
    marginTop: 10,
    marginLeft: 30,
  },
  phoneInput: {
    width: 300,
    height: 45,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonVerify: {
    backgroundColor: '#3399FF',
    height: 45,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  textVerify: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
