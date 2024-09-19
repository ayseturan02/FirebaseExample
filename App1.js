import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import database, {update} from '@react-native-firebase/database';

const App1 = () => {
  const checkDB = () => {
    const reference = database().ref(); //ref("books/")  yazarsan gider içindekini getirir
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDB = () => {
    //sürekli güncelleme yapar
    const reference = database().ref();
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A3',
      price: 123,
    });
  };

  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      model: 'A8',
    });
  };

  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'BWM',
      model: 'A2',
      price: 1232232,
    });
  };

  return (
    <View>
      <Text style={{fontSize: 70}}>database</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Add DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </View>
  );
};

export default App1;

const styles = StyleSheet.create({});
