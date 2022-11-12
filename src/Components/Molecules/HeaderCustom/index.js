import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {HeaderIlustration, IconAlert, IconArrowDown} from '../../../Assets';
import {IconBack, IconBullet} from '../../../Assets';
import {Colors, ResWidth, ResHeight, Fonts} from '../../../Utils';

const HeaderCustom = ({onPress, onPressBack, title, navigation, Icon}) => {
  return (
    <View style={styles.header}>
      <Image source={HeaderIlustration} style={styles.imgHeader} />
      <View style={styles.wrapContent}>
        <TouchableOpacity onPress={onPressBack}>
          <IconBack />
        </TouchableOpacity>
        <View style={styles.wrapUser}>
          <Text style={styles.label}>{title}</Text>
        </View>
        <TouchableOpacity>{Icon}</TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderCustom;

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
    marginTop: Platform.OS == 'ios' ? -230 : -260,
    paddingHorizontal: ResWidth(16),
    alignItems: 'center',
  },
  wrapUser: {
    flexDirection: 'column',
  },
  label: {
    fontSize: ResWidth(16),
    fontFamily: Fonts.primary[600],
    color: Colors.white,
    letterSpacing: 0.4,
    marginBottom: 6,
    textAlign: 'center',
  },
});
