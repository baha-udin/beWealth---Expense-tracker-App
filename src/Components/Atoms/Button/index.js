import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Fonts, ResHeight, ResWidth} from '../../../Utils';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({label, onPress, navigation}) => {
  if (label == 'Simpan') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapButton: {
    width: '80%',
    backgroundColor: Colors.primary,
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: ResHeight(12),
    paddingHorizontal: ResHeight(12),
  },

  label: {
    color: Colors.white,
    fontSize: ResHeight(18),
    fontFamily: Fonts.primary.normal,
    letterSpacing: 0.5,
  },
});
