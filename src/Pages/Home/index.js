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
import Axios from 'axios';
import styles from './style';
import {Add, IconAlert} from '../../Assets/icons';
import {CardHome, Gap, HeaderBanner, ItemList, Section} from '../../Components';
import AddExpense from '../AddExpense';
import {BottomSheet} from 'react-native-btr';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [calculate, setCalculate] = useState([]);
  const [expensesData, setExpensesData] = useState([]);

  const getProfile = () => {
    Axios.get('http://localhost:3000/profile').then(response => {
      data = response.data;
      setName(data);
    });
  };
  const GetTotalData = () => {
    Axios.get('http://localhost:3000/calculate').then(response => {
      data = response.data;
      setCalculate(data);
      console.log(data[0].title);
    });
  };
  const getExpenses = () => {
    Axios.get('http://localhost:3000/expenses').then(response => {
      data = response.data;
      setExpensesData(data);
    });
  };

  useEffect(() => {
    GetTotalData();
    setVisible(false);
    getProfile();
    getExpenses();
  }, []);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <HeaderBanner time="Selamat Malam" callName={name.name} />
      <CardHome />
      <Gap height={20} />
      {/* Section List History expense */}
      <ScrollView
        style={styles.wrapHistory}
        showsVerticalScrollIndicator={false}>
        <Section
          label="Histori Pengeluaran"
          link="Lihat semua"
          onPress={() => navigation.navigate('Statistic')}
        />
        <Gap height={16} />
        {expensesData.map(data => {
          return (
            <ItemList
              unique={data.id}
              title={data.category}
              date={data.date}
              nominal={data.nominal}
            />
          );
        })}
      </ScrollView>
      {/* <ListExpenses
        onPress={() => navigation.navigate('MainMenu', {screen: 'Statistic'})}
      /> */}
      <View>
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
      </View>
    </View>
  );
};

export default Home;
