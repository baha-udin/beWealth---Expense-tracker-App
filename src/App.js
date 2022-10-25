import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import ErrorBoundary from 'react-native-error-boundary';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const ErrorFallback = props => (
    <View style={styles.container}>
      <Text style={styles.title}>Error nih boss, senggol dong</Text>
      <Text style={styles.text}>{props.error.toString()}</Text>
    </View>
  );
  return (
    <ErrorBoundary onError={ErrorFallback}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
});
