import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../Utils';

const Line = () => {
  return (
    <View
      style={{
        width: '100%',
        borderColor: Colors.border,
        borderWidth: 0.6,
      }}></View>
  );
};

export default Line;

const styles = StyleSheet.create({});
