import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderIlustration} from '../../../Assets/images';
import {Colors, Fonts, ResWidth, ResHeight} from '../../../Utils';
import {IconAlert} from '../../../Assets/icons';

const HeaderBanner = ({time, callName, onPress, Icon}) => {
  return (
    <View style={styles.header}>
      <Image source={HeaderIlustration} style={styles.imgHeader} />
      <View style={styles.wrapContent}>
        <View style={styles.wrapUser}>
          <Text style={styles.greeting}>{time}</Text>
          <Text style={styles.callName}>{callName}</Text>
        </View>
        <TouchableOpacity style={styles.wrapAlert} onPress={onPress}>
          {/* <IconAlert /> */}
          <Icon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBanner;

const styles = StyleSheet.create({
  header: {
    maxHeight: 200,
  },
  imgHeader: {
    resizeMode: 'cover',
  },
  wrapContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? -220 : -250,
    paddingHorizontal: ResWidth(20),
  },
  wrapUser: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 14,
    color: Colors.white,
    letterSpacing: 0.4,
    marginBottom: 6,
    fontFamily: Fonts.primary[400],
  },
  title: {
    fontSize: 14,
    color: Colors.text.black,
    letterSpacing: 0.4,
    marginBottom: 6,
    fontFamily: Fonts.primary[400],
  },
  callName: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.white,
    letterSpacing: 0.4,
  },
});
