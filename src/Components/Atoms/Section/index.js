import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ResWidth, Colors} from '../../../Utils';

const Section = ({label, link, onPress}) => {
  return (
    <View style={styles.wrapLabel}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.onMore}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: ResWidth(16),
    fontWeight: '600',
    color: Colors.text.black,
    opacity: 0.9,
  },
  onMore: {
    fontSize: ResWidth(14),
    fontWeight: '400',
    color: Colors.text.gray,
  },
});
