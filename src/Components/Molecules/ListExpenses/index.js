import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {Gap} from '../../Atoms';
import styles from './style';

const ListExpenses = ({onPress}) => {
  const dataExpense = [
    {
      id: 1,
      title: 'Payment Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 850.000',
    },
    {
      id: 2,
      title: 'Bonus',
      date: '30 Juni 2022',
      nominal: '+ Rp. 630.000',
    },
    {
      id: 3,
      title: 'Payment Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 400.000',
    },
    {
      id: 4,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 5,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 6,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 7,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 8,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 9,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
    {
      id: 10,
      title: 'Bonus Project',
      date: '30 Juni 2022',
      nominal: '+ Rp. 900.000',
    },
  ];

  return (
    <View style={styles.wrapListExpense}>
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Histori Pengeluaran</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.onMore}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <ScrollView>
        <View style={{flex: 1}}>
          {dataExpense.map(dataExpense => {
            return (
              <View style={styles.wrapList} key={dataExpense.id}>
                <View>
                  <Text style={styles.title}>{dataExpense.title}</Text>
                  <Text style={styles.date}>{dataExpense.date}</Text>
                </View>
                <View>
                  <Text style={styles.nominal}>{dataExpense.nominal}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListExpenses;
