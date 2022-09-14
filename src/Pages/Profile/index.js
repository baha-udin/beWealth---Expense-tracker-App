import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import styles from './style';
import {Gap, HeaderCustom, LinkProfile, Line} from './../../Components';
import {
  DummyProfile1,
  ImgBerlian,
  ImgPerson,
  ImgCommunity,
  ImgInformation,
  ImgPrivacy,
  ImgSecurity,
} from '../../Assets';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderCustom
        title={'Profile'}
        onPressBack={() => navigation.navigate('MainMenu', {screen: 'Home'})}
      />
      <View style={styles.content}>
        <View style={styles.wrapTop}>
          <View style={styles.wrapPhoto}>
            <Image source={DummyProfile1} style={styles.picture} />
          </View>
          <Text style={styles.name}>Michael</Text>
        </View>
        <Gap height={20} />
        <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
          <LinkProfile image={ImgBerlian} label={'Undang Teman'} />
          <Line />
          <Gap height={12} />
          <LinkProfile image={ImgPerson} label={'Info Akun'} />
          <Gap height={12} />
          <LinkProfile image={ImgCommunity} label={'Data Pribadi'} />
          <Gap height={12} />
          <LinkProfile image={ImgInformation} label={'Pusat Informasi'} />
          <Gap height={12} />
          <LinkProfile image={ImgSecurity} label={'Login & Keamanan'} />
          <Gap height={12} />
          <LinkProfile image={ImgPrivacy} label={'Data & Privasi'} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
