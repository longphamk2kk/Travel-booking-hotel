import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/icon_back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Forgot<Text style={styles.highlightText}> Password</Text> ?
        </Text>
        <Text style={styles.noteText}>
          Enter your email address{'\n'}and we will send you the reset code{' '}
        </Text>
        <View style={styles.btnEmail}>
          <Text style={styles.loginText}>Email</Text>
          <CustomTextInput style={styles.textInput} placeholder="Email" />
        </View>
        <View style={styles.forgotPassView}>
          <TouchableOpacity onPress={() => navigation.navigate('EnterPhone')}>
            <Text style={styles.forgotPass}>Try other way?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonSend}>
            <Text style={styles.textButton}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  backIcon: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    padding: 30,
  },
  noteText: {
    color: 'grey',
    marginTop: 20,
  },
  textInput: {
    width: 350,
    height: 50,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnEmail: {
    marginTop: 60,
  },
  highlightText: {
    color: '#3399FF',
    fontWeight: 'bold',
  },
  forgotPassView: {
    alignSelf: 'flex-end',
    width: 140,
  },
  forgotPass: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonSend: {
    backgroundColor: '#3399FF',
    width: 300,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
