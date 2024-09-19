import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Buttons = props => {
  const {name, number, color, color_text, onPress, loading} = props;
  return (
    <TouchableOpacity
      style={{alignItems: 'center', marginTop: windowWidth * 0.05}}
      onPress={onPress}
      disabled={loading}>
      <View
        style={{
          height: windowWidth * 0.12,
          width: windowWidth * 0.9,
          backgroundColor: color,
          borderWidth: windowWidth * number,
          borderColor: 'black',
        }}>
        <Text
          style={{
            color: color_text,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: windowWidth * 0.045,
            marginTop: windowHeight * 0.01,
            height: windowWidth * 0.12,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
