import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Onboarding2 = () => {
  const navigation = useNavigation();
  const imageHotel3 = require('../../assets/images/hotel3.png');
  return (
    <SafeAreaView style={styles.header}>
      <Image source={imageHotel3} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.headerText}>Online booking and payment</Text>
        <Text style={styles.text}>
          Users can view room information, select the desired room type and pay
          instantly through the app.
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonSkip}>
          <Text style={styles.textSkip}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 45,
  },
  image: {
    marginBottom: 80,
    height: 266,
    width: 266,
    borderRadius: 133,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    bottom: 20,
    color: '#3399FF',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 350,
  },
  text: {
    textAlign: 'center',
    color: 'grey',
  },
  buttonView: {
    flexDirection: 'row',
    width: 320,
    justifyContent: 'center',
    top: 40,
  },
  buttonSkip: {
    backgroundColor: '#3399FF',
    height: 50,
    width: 180,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSkip: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
