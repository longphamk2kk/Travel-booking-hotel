import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const UserInfoScreen = ({navigation}) => {
  const [username, setUsername] = useState('Long Pham');
  const [email, setEmail] = useState('longphamk2kk@gmail.com');
  const [age, setAge] = useState('25');
  const [address, setAddress] = useState('302 Lang.St');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePaymentPress = () => {
    navigation.navigate('PaymentScreen');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSaveChanges = () => {
    // Implement your logic to save changes here
    console.log('Save changes');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>User Information</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/onboarding1.png')}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.value}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.value}
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Address:</Text>
            <TextInput
              style={styles.value}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              style={styles.value}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.paymentContainer}
          onPress={handlePaymentPress}>
          <Text style={styles.paymentTitle}>Payment Method</Text>
          <Text style={styles.paymentText}>**** **** **** 1234</Text>
          <Text style={styles.paymentButton}>Update Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.saveChangesButton}
        onPress={handleSaveChanges}>
        <Text style={styles.saveChangesButtonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
  paymentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  paymentButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveChangesButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  saveChangesButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
