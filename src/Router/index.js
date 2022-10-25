import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Onboarding,
  Splash,
  Profile,
  Login,
  Register,
  Purpose,
  Statistic,
  AddExpense,
} from './../Pages';
import {Colors, Fonts, ResHeight} from '../Utils';
import {
  HomeActive,
  HomeInActive,
  StatisticActive,
  StatisticInActive,
  Add,
  WalletActive,
  WalletInActive,
  ProfileActive,
  ProfileInActive,
} from '../Assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainMenu = focused => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          bottom: 24,
          marginHorizontal: 20,
          borderRadius: 15,
          height: ResHeight(70),
          paddingTop: Platform.OS == 'ios' ? 4 : 0,
          paddingBottom: Platform.OS == 'ios' ? 24 : 0,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapIcon}>
              {focused ? (
                <HomeActive style={styles.icon} />
              ) : (
                <HomeInActive style={styles.icon} />
              )}
              <Text
                style={{
                  color: focused ? Colors.text.green2 : '#aaaa',
                  fontSize: ResHeight(13),
                  fontFamily: focused ? Fonts.primary[600] : Fonts.primary[400],
                  letterSpacing: 0.4,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Purpose"
        component={Purpose}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapIcon}>
              {focused ? (
                <WalletActive style={styles.icon} />
              ) : (
                <WalletInActive style={styles.icon} />
              )}
              <Text
                style={{
                  color: focused ? Colors.text.green2 : '#aaaa',
                  fontSize: ResHeight(13),
                  fontFamily: focused ? Fonts.primary[600] : Fonts.primary[400],
                  letterSpacing: 0.4,
                }}>
                Purpose
              </Text>
            </View>
          ),
        }}
      />
      {/* Ad AddExpense */}
      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                marginBottom: 36,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Add
                style={{
                  width: 32,
                  height: 32,
                  marginBottom: 4,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapIcon}>
              {focused ? (
                <StatisticActive style={styles.icon} />
              ) : (
                <StatisticInActive style={styles.icon} />
              )}
              <Text
                style={{
                  color: focused ? Colors.text.green2 : '#aaaa',
                  fontSize: ResHeight(13),
                  fontFamily: focused ? Fonts.primary[600] : Fonts.primary[400],
                  letterSpacing: 0.4,
                }}>
                Statistic
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapIcon}>
              {focused ? (
                <ProfileActive style={styles.icon} />
              ) : (
                <ProfileInActive style={styles.icon} />
              )}
              <Text
                style={{
                  color: focused ? Colors.text.green2 : '#aaaa',
                  fontSize: ResHeight(13),
                  fontFamily: focused ? Fonts.primary[600] : Fonts.primary[400],
                  letterSpacing: 0.4,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.text.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  wrapIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS == 'ios' ? 10 : 4,
    flex: 1,
  },
  wrapIconCustome: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -16,
    width: 50,

    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },
});
