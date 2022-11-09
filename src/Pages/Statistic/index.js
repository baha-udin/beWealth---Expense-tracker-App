import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors, Fonts, ResWidth} from '../../Utils';
import {
  ListDays,
  ListWeekly,
  ListMonthly,
  ListAnnual,
} from './../../Components';
const Top = createMaterialTopTabNavigator();

const Statistic = focused => {
  const navigation = useNavigation();
  const isLightTheme = useColorScheme === 'light';

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'dark-content'}
        barStyle={'light-content'}
      />
      <View style={styles.wrapHeader}>
        <Text style={styles.title}>Recap</Text>
      </View>
      <View style={styles.wrapTopMenu}>
        <Top.Navigator
          screenOptions={{
            swipeEnabled: true,
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.black,
            tabBarStyle: {
              alignSelf: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 56,
              borderRadius: 100,
              backgroundColor: '#f8f8f8',
              marginBottom: 16,
            },
            tabBarIndicatorStyle: {
              width: '16%',
              height: 'auto',
              top: '12%',
              bottom: '10%',
              left: 10,
              right: 10,
              paddingHorizontal: 4,
              borderRadius: 30,
              backgroundColor: Colors.background.green,
              marginRight: '5%',
            },
            tabBarLabelStyle: ({focused}) => ({
              textTransform: 'lowercase',
              color: focused ? Colors.white : Colors.black,
              fontFamily: Fonts.primary[300],
            }),
          }}>
          <Top.Screen name="Perhari" component={ListDays} />
          <Top.Screen name="Minggu" component={ListWeekly} />
          <Top.Screen name="Bulanan" component={ListMonthly} />
          <Top.Screen name="Tahunan" component={ListAnnual} />
        </Top.Navigator>
      </View>
    </View>
  );
};

export default Statistic;
