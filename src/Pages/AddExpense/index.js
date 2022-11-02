import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors, Fonts, ResWidth} from '../../Utils';
import {ExpenseCard, IncomeCard} from './../../Components';
const Top = createMaterialTopTabNavigator();

const AddExpense = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <View style={styles.wrapTopMenu}>
        <Top.Navigator
          screenOptions={{
            swipeEnabled: true,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.border,
            tabBarStyle: {
              alignSelf: 'center',
              width: '90%',
              height: 50,
              borderRadius: 100,
              backgroundColor: '#F4F6F6',
              marginBottom: 16,
            },
            tabBarIndicatorStyle: {
              width: '40%',
              height: 'auto',
              top: '12%',
              bottom: '10%',
              left: '2.5%',
              right: '10%',
              borderRadius: 100,
              backgroundColor: 'white',
              marginRight: '5%',
            },
            tabBarLabelStyle: {
              textTransform: 'capitalize',
              fontSize: ResWidth(13),
              color: '#666666',
              fontFamily: Fonts.primary[600],
            },
          }}>
          <Top.Screen name="Expense" component={ExpenseCard} />
          <Top.Screen name="Income" component={IncomeCard} />
        </Top.Navigator>
      </View>
    </View>
  );
};

export default AddExpense;
