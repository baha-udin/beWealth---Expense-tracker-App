import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {ResWidth, Colors} from '../../../Utils';
import moment from 'moment';
import Gap from '../../Atoms/Gap';
import Number from '../../Atoms/Number';

const ItemList = ({title, date, nominal}) => {
  const convertDate = moment(date).format('D MMMM YYYY');
  return (
    <View style={styles.wrapList}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{convertDate}</Text>
      </View>
      <View>
        <Number number={nominal} style={styles.nominal} />
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  wrapList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    paddingBottom: 2,
  },
  title: {
    fontSize: ResWidth(15),
    fontWeight: '400',
    color: Colors.text.black,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  date: {
    fontSize: ResWidth(13),
    fontWeight: '300',
    color: Colors.text.black,
    letterSpacing: 0.5,
  },
  nominal: {
    fontSize: ResWidth(15),
    fontWeight: '500',
    color: Colors.text.green2,
    letterSpacing: 0.5,
  },
});
