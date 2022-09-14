import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../Utils';

const Link = ({onPress, title, label, textAlign}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapLink}>
        <Text style={styles.label(textAlign)}>{label}</Text>
        <Text style={styles.link}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  wrapLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: textAlign => ({
    color: Colors.text.gray,
    fontSize: 14,
    fontWeight: '400',
    marginRight: 6,
    textAlign: textAlign,
  }),
  link: {
    color: Colors.text.green,
    fontSize: 14,
    fontFamily: Fonts.primary[400],
  },
});
