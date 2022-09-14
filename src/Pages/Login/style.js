import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, ResHeight, ResWidth} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '30%',
  },
  imgHeader: {
    resizeMode: 'cover',
  },
  content: {
    marginTop: Platform.OS == 'ios' ? ResHeight(-80) : ResHeight(-100),
    paddingHorizontal: 24,
    paddingTop: ResHeight(30),
    paddingBottom: ResHeight(30),
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: ResWidth(20),
    fontWeight: '500',
    color: Colors.text.black,
  },
  description: {
    fontSize: ResWidth(14),
    fontWeight: '400',
    color: Colors.text.gray,
  },
  form: {
    marginTop: ResHeight(24),
  },
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
  wrapForgot: {
    alignItems: 'flex-end',
  },
});

export default styles;
