import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NumericFormat} from 'react-number-format';

const Number = ({number, style}) => {
  return (
    <NumericFormat
      value={number}
      thousandSeparator={'.'}
      decimalSeparator=","
      displayType="text"
      prefix="Rp. "
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
