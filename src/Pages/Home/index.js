import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {HeaderIlustration} from '../../Assets/images';
import styles from './style';
import {Add, IconAlert} from '../../Assets/icons';
import {CardHome, Gap, ListExpenses, HeaderBanner} from '../../Components';
import {ResHeight, ResWidth} from '../../Utils';
import AddExpense from '../AddExpense';
import {BottomSheet} from 'react-native-btr';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <HeaderBanner time="Selamat Malam" callName="Michelle" />
      <CardHome />
      <Gap height={20} />
      <ListExpenses
        onPress={() => navigation.navigate('MainMenu', {screen: 'Statistic'})}
      />
      <>
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          style={styles.wrapBottomSheet}>
          <Add />
        </TouchableOpacity>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <AddExpense />
        </BottomSheet>
      </>
    </View>
  );
};

export default Home;
