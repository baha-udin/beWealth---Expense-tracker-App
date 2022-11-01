import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import Axios from 'axios';
import styles from './style';
import {CardHome, Gap, HeaderBanner, ItemList, Section} from '../../Components';
import {IconAlert} from '../../Assets/icons';

const Home = ({navigation}) => {
  const [name, setName] = useState();
  const [calculate, setCalculate] = useState([]);
  const [expensesData, setExpensesData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const getAllData = () => {
    Axios.get('http://localhost:3000/data').then(response => {
      data = response.data;
      setName(data[0].profile.name);
      setCalculate(data[0].calculate);
      setExpensesData(data[0].expenses);
      setIncomeData(data[0].income);
      console.log(data[0].calculate[0].nominal);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <HeaderBanner time="Selamat Malam" callName={name} Icon={IconAlert} />
      <CardHome
        TotalTabungan={`Rp. ${calculate[0].nominal}`}
        Income={`Rp. ${calculate[1].nominal}`}
        Expenses={`Rp. ${calculate[2].nominal}`}
      />
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
              key={data.id}
              title={data.category}
              date={data.date}
              nominal={data.nominal}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
