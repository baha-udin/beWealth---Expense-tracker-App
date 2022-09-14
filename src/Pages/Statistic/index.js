import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {IconBack, IconAlert} from '../../Assets';
import {HeaderBanner} from '../../Components/Atoms';
import styles from './style';
import {ResWidth, ResHeight} from '../../Utils';

const Statistic = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      {/* Section Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: Platform.OS == 'ios' ? -220 : -250,
          paddingHorizontal: ResWidth(24),
          backgroundColor: 'red',
          flex: 1,
        }}>
        <TouchableOpacity style={styles.wrapAlert}>
          <IconBack />
        </TouchableOpacity>
        <View style={styles.wrapUser}>
          <Text style={styles.title}>Statistic</Text>
        </View>
        <TouchableOpacity style={styles.wrapAlert}>
          <IconAlert />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Statistic;
