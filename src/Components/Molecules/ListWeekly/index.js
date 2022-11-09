import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import {ItemList} from '../../Atoms';

const ListWeekly = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    try {
      const data = await fetch('http://localhost:3000/expenses');
      const response = await data.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapList}>
        {data.map(data => {
          console.log(data);
          return (
            <ItemList
              key={data.id}
              title={data.category}
              date={data.date}
              nominal={data.nominal}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ListWeekly;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapList: {
    paddingHorizontal: 14,
  },
});
