import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={{alignItems: 'center', marginTop: windowWidth * 0.05}}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        value={value} // value prop'unu buraya ekledik
        onChangeText={onType} // onChangeText prop'u ile değişiklikleri takip ediyoruz
        style={{
          backgroundColor: '#E1E1E1FF',
          height: windowWidth * 0.13,
          borderBottomWidth: windowWidth * 0.005,
          borderColor: 'black',
          width: windowWidth * 0.9,
        }}
      />
    </View>
  );
};

export default Input;
