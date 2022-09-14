import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './style';
import {ilustrationOnboarding} from '../../Assets/images';
import {Button, Gap, Link} from '../../Components/';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapIlustration}>
        <Image source={ilustrationOnboarding} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>spend smarter </Text>
        <Text style={styles.title}>save more</Text>
        <Gap height={20} />
        <View style={styles.wrapButton}>
          <Button
            onPress={() => navigation.navigate('Register')}
            label="Get Started"
          />
          <Gap height={12} />
          <Link
            label={'Already have account?'}
            onPress={() => navigation.navigate('Login')}
            title="Log in"
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
