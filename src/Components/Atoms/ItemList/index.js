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
import {ResWidth, Colors} from '../../../Utils';

const ItemList = ({key, title, date, nominal}) => {
  return (
    <View style={styles.wrapList} key={key}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={styles.nominal}>Rp. {nominal}</Text>
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
    fontSize: ResWidth(16),
    fontWeight: '600',
    color: Colors.text.green2,
    letterSpacing: 0.5,
  },
});
