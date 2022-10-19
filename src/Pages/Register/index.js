import React, {useState} from 'react';
import {View, Text, Image, TextInput, SafeAreaView, Alert} from 'react-native';
import styles from './style';
import {HeaderIlustration} from '../../Assets/images';
import {Button, Gap, Link, FormInput} from '../../Components';
import {ResWidth, ResHeight} from '../../Utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={HeaderIlustration} style={styles.imgHeader} />
      </View>
      <View style={styles.content}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Register here</Text>
          <Gap height={ResWidth(10)} />
          <Text style={styles.description}>
            Please fill username, email & password to sign up your app account.
          </Text>
        </View>
        <Gap height={ResWidth(20)} />
        <SafeAreaView style={styles.form}>
          {/* section User Name */}
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              placeholder="input your name..."
              placeholderTextColor={'gray'}
              style={styles.input}
            />
          </View>
          <Gap height={ResWidth(14)} />
          {/* section email */}
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="input your email..."
              placeholderTextColor={'gray'}
              style={styles.input}
            />
          </View>
          <Gap height={ResWidth(14)} />
          {/* section password */}
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="input your password..."
              placeholderTextColor={'gray'}
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <Gap height={ResWidth(8)} />
          <View style={styles.wrapForgot}>
            <Link label={'Forgot Password?'} textAlign="right" />
          </View>
          <Gap height={ResWidth(20)} />
          <Button
            label={'Register'}
            onPress={() => navigation.navigate('MainMenu', {screen: 'Home'})}
          />
          <Gap height={ResWidth(16)} />
          <Link
            label={'Do you have an account?'}
            title="Login here"
            onPress={() => navigation.navigate('Login')}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Register;
