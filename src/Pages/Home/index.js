import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar, Text, Image} from 'react-native';
import Axios from 'axios';
import styles from './style';
import {
  CardHome,
  Gap,
  HeaderBanner,
  ItemList,
  Link,
  Section,
} from '../../Components';
import {IconAlert} from '../../Assets/icons';
import {EmptyDefault} from '../../Assets';

const Home = ({navigation}) => {
  let myDate = new Date();
  let hours = myDate.getHours();
  const [name, setName] = useState();
  const [greet, setGreet] = useState();
  const [totalSaving, setTotalSaving] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [totalExpenses, setTotalExpenses] = useState();
  const [listExpenses, setListExpenses] = useState([]);

  const Greeting = () => {
    if (hours < 12) {
      setGreet('Selamat Pagi');
    } else if (hours >= 12 && hours <= 15) {
      setGreet('Selamat Siang');
    } else if (hours >= 15 && hours <= 17) {
      setGreet('Selamat Sore');
    } else if (hours >= 17 && hours <= 24) {
      setGreet('Selamat Malam');
    }
  };

  const getProfile = () => {
    Axios.get('http://localhost:3000/profile').then(response => {
      data = response.data;
      setName(data.name);
    });
  };
  const getTotalSaving = async () => {
    const resp = await fetch('http://localhost:3000/calculate');
    const json = await resp.json();
    setTotalSaving(json[0].nominal);
  };
  const getTotalIncome = async () => {
    const resp = await fetch('http://localhost:3000/calculate');
    const json = await resp.json();
    setTotalIncome(json[1].nominal);
  };
  const getTotalExpense = async () => {
    const resp = await fetch('http://localhost:3000/calculate');
    const json = await resp.json();
    setTotalExpenses(json[2].nominal);
  };
  const getListExpenses = () => {
    Axios.get('http://localhost:3000/expenses').then(response => {
      data = response.data;
      setListExpenses(data);
    });
  };
  useEffect(() => {
    getProfile();
    Greeting();
    getTotalSaving();
    getTotalIncome();
    getTotalExpense();
    getListExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <HeaderBanner time={`${greet}`} callName={name} Icon={IconAlert} />
      <View style={{paddingHorizontal: 20, marginTop: 28}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
          Ini catatan Keuangan Kamu:
        </Text>
      </View>
      <CardHome
        TotalTabungan={totalSaving}
        Income={totalIncome}
        Expenses={`-${totalExpenses}`}
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
        {!listExpenses ? (
          <Image source={EmptyDefault} style={{width: 200, height: 200}} />
        ) : (
          listExpenses.map((data, index) => {
            return (
              <ItemList
                key={index}
                title={data.category}
                date={data.date}
                nominal={data.nominal}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
