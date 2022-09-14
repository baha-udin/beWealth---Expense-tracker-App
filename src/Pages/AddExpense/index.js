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
import HeaderCustom from './../../Components/Molecules/HeaderCustom';
import {Colors, Fonts, ResWidth} from '../../Utils';
import {ExpenseCard, IncomeCard} from './../../Components';
const Top = createMaterialTopTabNavigator();
import {BottomSheet} from 'react-native-btr';

const AddExpense = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const handleBack = () => {
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="dark-content" />
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
