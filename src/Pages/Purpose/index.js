import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {ResHeight, ResWidth, Fonts} from '../../Utils';

const Purpose = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'light'} barStyle="dark-content" />
      <View style={styles.wrapHeader}>
        <Text style={styles.title}>Purpose your Financial Wealth</Text>
      </View>
    </View>
  );
};

export default Purpose;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapHeader: {
    marginTop: '10%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: ResWidth(16),
    fontWeight: '400',
  },
});
