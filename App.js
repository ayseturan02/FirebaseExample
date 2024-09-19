import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const App = () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword('jS7pR@example.com', '123456')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword('jS7pR@example.com', '123456')
      .then(res => console.log('Sign In Successful'))
      .catch(err => console.log(err));
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log("Sign Out Successful"))
      .catch(err => console.log(err));
  };

  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>auth</Text>
        <Button title="Sign In" onPress={signIn} />
        <Button title="Sign Up" onPress={signUp} />
        <Button title="Sign Out" onPress={signOut} />
        <Button title="check Out" onPress={checkOut} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
