import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {Gap, ItemList} from '../../Atoms';
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
    <ScrollView style={styles.wrapListExpense}>
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Histori Pengeluaran</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.onMore}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <View>
        <View style={{flex: 1}}>
          {dataExpense.map(dataExpense => {
            return (
              <ItemList
                // unique={dataExpense.id}
                title={dataExpense.title}
                date={dataExpense.date}
                nominal={dataExpense.nominal}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ListExpenses;
