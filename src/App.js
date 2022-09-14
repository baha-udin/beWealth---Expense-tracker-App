import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
