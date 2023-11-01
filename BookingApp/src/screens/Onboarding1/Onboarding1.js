import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Onboarding1() {
  const navigation = useNavigation();
  const imageHotel1 = require('../../assets/images/hotel1.png');

  return (
    <SafeAreaView style={styles.header}>
      <Image source={imageHotel1} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.headerText}>Wide selection of hotels</Text>
        <Text style={styles.text}>
          Hotel booking application provides users with a variety of hotel
          options
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonSkip}>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding2')}
          style={styles.buttonNext}>
          <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding1;
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
    justifyContent: 'space-between',
    top: 40,
  },
  buttonNext: {
    backgroundColor: '#3399FF',
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSkip: {
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSkip: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
