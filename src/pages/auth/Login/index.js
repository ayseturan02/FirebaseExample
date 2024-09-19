import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from './../../../components/Input';
import Buttons from '../../../components/Buttons';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import authErrorMessageParser from './../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleSignUp() {
    navigation.navigate('Sign');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      console.log(formValues);
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: windowWidth * 0.3, color: 'black'}}>
          LOGİN YAP
        </Text>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                placeholder="Email"
                value={values.email}
                onType={handleChange('email')}
              />
              <Input
                placeholder="Password"
                value={values.password}
                onType={handleChange('password')}
              />
              <Buttons
                name="Login"
                color="black"
                number={0}
                color_text="white"
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <Buttons
          name="Sign"
          color="white"
          number={0.005}
          color_text="black"
          onPress={handleSignUp}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
