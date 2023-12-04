import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import {loginUser} from '../../api';
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const userData = {username, password};
      const response = await loginUser(userData);

      console.log('User logged in successfully:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };
  const handleUsernameChange = text => {
    console.log('Username changed:', text);
    setUsername(text);
  };

  const handlePasswordChange = text => {
    console.log('Password changed:', text);
    setPassword(text);
  };
  // useEffect(() => {
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  // }, [username, password]);

  return (
    <SafeAreaView>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>
          Just <Text style={styles.highlightText}>Sign in</Text>,{'\n'}We'll
          help you find your hotel{' '}
        </Text>
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>
          If you don’t have an account {'\n'}
          <View style={styles.inline}>
            <Text style={styles.signUpText}>please </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={styles.signUpButton}>
              <Text style={styles.signUpHighlightText}>Sign up </Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>here</Text>
          </View>
        </Text>
      </View>
      <View style={styles.login}>
        <View>
          <Text style={styles.loginText}>Email address</Text>
          <CustomTextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={handleUsernameChange}
            text={username} // Thêm prop text
            setText={setUsername}
          />
        </View>
        <View>
          <Text style={styles.loginText}>Password</Text>
          <CustomTextInput
            style={styles.textInput}
            placeholder="********"
            secure={true}
            onChangeText={handlePasswordChange}
            text={password} // Thêm prop text
            setText={setPassword}
          />
        </View>
        <View style={styles.forgotPassView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View>
          <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
            <Text style={styles.textButton}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textOr}>Or connect with</Text>
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
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>- Developed by Crazy -</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    width: 300,
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 90,
  },
  connectText: {
    fontSize: 16,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 90,
    marginTop: 20,
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
  },
  bottomText: {
    color: '#9F9F9F',
  },
});
