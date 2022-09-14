import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, ResHeight, ResWidth} from '../../Utils';

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
    paddingTop: ResHeight(24),
    paddingBottom: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: ResWidth(20),
    color: Colors.text.black,
    fontFamily: Fonts.primary[600],
  },
  description: {
    fontSize: ResWidth(13),
    color: Colors.text.gray,
    fontFamily: Fonts.primary[300],
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  wrapLabel: {},
  label: {
    fontSize: ResWidth(14),
    color: Colors.text.black,
    letterSpacing: 0.5,
    fontFamily: Fonts.primary[400],
  },
  input: {
    paddingHorizontal: ResWidth(22),
    paddingVertical: ResHeight(16),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 8,
    fontFamily: Fonts.primary[400],
    color: Colors.text.gray,
  },
  wrapForgot: {
    alignItems: 'flex-end',
  },
});

export default styles;
