import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts, ResHeight} from '../../../Utils';

const LinkProfile = ({image, label}) => {
  return (
    <TouchableOpacity style={styles.wrap}>
      <Image source={image} style={styles.img} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LinkProfile;

const styles = StyleSheet.create({
  wrap: {flexDirection: 'row', alignItems: 'center', marginVertical: 8},
  img: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: ResHeight(16),
    fontFamily: Fonts.primary[600],
    marginLeft: 16,
    color: Colors.text.black,
  },
});
