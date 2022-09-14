import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import styles from './style';
import {backgroundSplash} from '../../Assets/images';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding'), 5000;
    });
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundSplash} style={styles.background}>
        <Text style={styles.titlePage}>Save Incomes</Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;
