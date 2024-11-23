import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS} from '../helpers/colors';

export default function CustomButton({
  text,
  onPress,
  style = {},
  textStyle = {},
  button = {},
}) {
  return (
    <View style={[styles.container, {...style}]}>
      <TouchableOpacity onPress={onPress} style={[styles.button, {...button}]}>
        <Text style={[styles.text, {...textStyle}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 20,
    width: '100%',
    backgroundColor: COLORS.main,
    alignSelf: 'center',
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  image: {
    height: 60,
    objectFit: 'contain',
    position: 'absolute',
    right: -20,
  },
});
