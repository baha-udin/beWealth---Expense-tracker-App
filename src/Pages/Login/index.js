import React from 'react';
import {View, Text, Image, TextInput, Alert} from 'react-native';
import styles from './style';
import {HeaderIlustration} from '../../Assets/images';
import {Button, Gap, Link} from '../../Components';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={HeaderIlustration} style={styles.imgHeader} />
      </View>
      <View style={styles.content}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Welcome to Login</Text>
          <Gap height={8} />
          <Text style={styles.description}>
            Please fill E-mail & password to login your app account.
          </Text>
        </View>
        <View style={styles.form}>
          {/* section email */}
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="input your email"
              placeholderTextColor={'gray'}
              style={styles.input}
            />
          </View>
          <Gap height={16} />
          {/* section password */}
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="input your password"
              placeholderTextColor={'gray'}
              style={styles.input}
            />
          </View>
          <Gap height={8} />
          <View style={styles.wrapForgot}>
            <Link
              label={'Forgot Password?'}
              onPress={console.log('Lupa passwod nih')}
              textAlign="right"
            />
          </View>
          <Gap height={30} />
          <Button
            label={'Login Now'}
            onPress={() => navigation.navigate('MainMenu')}
          />
          <Gap height={20} />
          <Link
            label={'Didn’t have an account?'}
            title="Register"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
