import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, ResWidth, ResHeight} from '../../../Utils';
import {
  IconAlert,
  IconBullet,
  IconExpense,
  IconIncome,
  IconUp,
} from '../../../Assets';
import {Gap} from '../../Atoms';
import LinearGradient from 'react-native-linear-gradient';

const CardHome = ({nominal1, nominal2, nominal3}) => {
  const datas = [
    {
      id: 1,
      title: 'Total Tabungan',
      nominal: 'Rp. 25.000.000',
    },
    {
      id: 2,
      title: 'Pemasukan',
      nominal: 'Rp. 11.840.000',
    },
    {
      id: 3,
      title: 'Pengeluaran',
      nominal: '- Rp. 4.500.000',
    },
  ];

  return (
    <LinearGradient
      colors={[Colors.background.green, '#259868']}
      style={styles.cardInformation}
      start={{x: 0, y: 1.4}}
      end={{x: 1, y: 1.3}}>
      {/* <View style={styles.cardInformation}> */}
      <View style={styles.wrapTopInformation}>
        <View style={styles.wrapSaving}>
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>Total Tabungan</Text>
            <IconUp />
          </View>
          <Text style={styles.nominal}>{datas[0].nominal}</Text>
        </View>
        <TouchableOpacity>
          <IconBullet />
        </TouchableOpacity>
      </View>
      <Gap height={ResHeight(20)} />
      <View style={styles.wrapBottomInformation}>
        {/* section Income */}
        <View>
          <View style={styles.wrapLabel}>
            <IconIncome />
            <Text style={styles.title}>{datas[1].title}</Text>
          </View>
          <Text style={styles.number}>{datas[1].nominal}</Text>
        </View>
        {/* section Expense */}
        <View>
          <View style={styles.wrapLabel}>
            <IconExpense />
            <Text style={styles.title}>{datas[2].title}</Text>
          </View>
          <Text style={styles.numberExpense}>{datas[2].nominal}</Text>
        </View>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  cardInformation: {
    backgroundColor: Colors.text.green,
    marginHorizontal: ResWidth(20),
    paddingVertical: 25,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginTop: ResHeight(24),
    shadowColor: Colors.text.grayblur,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  wrapTopInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapBottomInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapSaving: {
    flexDirection: 'column',
  },
  wrapLabel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: ResWidth(14),
    fontWeight: '600',
    color: Colors.white,
    marginRight: 4,
    marginBottom: 8,
  },
  nominal: {
    fontSize: ResWidth(20),
    fontWeight: 'bold',
    color: Colors.white,
  },
  title: {
    fontSize: ResWidth(14),
    fontWeight: '600',
    color: Colors.white,
    opacity: 0.9,
    letterSpacing: 0.6,
    marginLeft: 6,
    paddingTop: 3,
  },
  number: {
    fontSize: ResWidth(18),
    fontWeight: '600',
    marginTop: 8,
    color: Colors.white,
  },
  numberExpense: {
    fontSize: ResWidth(18),
    fontWeight: '600',
    marginTop: 8,
    color: 'white',
    opacity: 0.9,
  },
});
