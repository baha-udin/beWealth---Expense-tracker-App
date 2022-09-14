import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResWidth, ResHeight, Colors, TextInput} from '../../../Utils';

const FormInput = ({label, value, onChangeText}) => {
  return (
    <View style={styles.wrapLabel}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder="input your password"
        placeholderTextColor={'gray'}
        style={styles.input}
        secureTextEntry={true}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  wrapLabel: {},
  label: {
    fontSize: ResWidth(14),
    fontWeight: '400',
    color: Colors.text.black,
    letterSpacing: 0.5,
  },
  input: {
    paddingHorizontal: ResWidth(22),
    paddingVertical: ResHeight(16),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
  },
});
