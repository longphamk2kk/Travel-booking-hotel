import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
const SignUp = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView>
    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
      <SafeAreaView>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>
            Let <Text style={styles.highlightText}>Sign you up</Text>,{'\n'}Your
            trip is ready{' '}
          </Text>
        </View>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}>
            If you have an account {'\n'}
            <View style={styles.inline}>
              <Text style={styles.signUpText}>please </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.signUpButton}>
                <Text style={styles.signUpHighlightText}>Sign in </Text>
              </TouchableOpacity>
              <Text style={styles.signUpText}>here</Text>
            </View>
          </Text>
        </View>
        <View style={styles.login}>
          <View>
            <Text style={styles.loginText}>Full Name</Text>
            <CustomTextInput style={styles.textInput} placeholder="Full Name" />
          </View>
          <View>
            <Text style={styles.loginText}>Email adress</Text>
            <CustomTextInput style={styles.textInput} placeholder="Email" />
          </View>
          <View>
            <Text style={styles.loginText}>Password</Text>
            <CustomTextInput
              style={styles.textInput}
              placeholder="********"
              secure={true}
            />
          </View>
          <View>
            <Text style={styles.loginText}>Confirm Password</Text>
            <CustomTextInput
              style={styles.textInput}
              placeholder="********"
              secure={true}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPhoneNumber')}
              style={styles.buttonSignIn}>
              <Text style={styles.textButton}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textOr}>Or connect with</Text>
          <View style={styles.connectView}>
            <View>
              <TouchableOpacity style={styles.buttonFacebook}>
                <Image
                  source={require('../../assets/icons/icon_facebook.png')}
                  style={styles.facebookIcon}
                />
                <Text style={styles.connectText}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.buttonGoogle}>
                <Image
                  source={require('../../assets/icons/icon_google.png')}
                  style={styles.facebookIcon}
                />
                <Text style={styles.connectText}>Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            By signing up, you have agreed to our
            <Text style={styles.highlightBottomText}>
              Terms and conditions
            </Text>{' '}
            &<Text style={styles.highlightBottomText}>Privacy policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
    // </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  highlightText: {
    color: '#3399FF',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  headerTextView: {
    marginTop: 20,
    padding: 10,
  },
  textInput: {
    width: 350,
    height: 50,
  },
  signUpHighlightText: {
    color: '#3399FF',
  },
  signUpView: {
    marginTop: 5,
    padding: 10,
  },
  signUpText: {
    color: 'grey',
  },
  signUpButton: {
    flexDirection: 'row',
    display: 'flex',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPass: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  forgotPassView: {
    alignSelf: 'flex-end',
    width: 150,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonSignIn: {
    backgroundColor: '#3399FF',
    width: 300,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  textOr: {
    marginTop: 10,
    marginBottom: 10,
  },
  facebookIcon: {
    height: 30,
    width: 30,
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  connectText: {
    fontSize: 16,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
    width: 350,
    alignSelf: 'center',
  },
  bottomText: {
    color: '#9F9F9F',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  connectView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330,
  },
  highlightBottomText: {
    color: '#3399FF',
  },
});
