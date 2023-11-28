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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#444',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
    color: '#555',
  },
  value: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
  },
  paymentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
    marginTop: 20,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#444',
  },
  paymentText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  paymentButton: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveChangesButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  saveChangesButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#dc3545', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
