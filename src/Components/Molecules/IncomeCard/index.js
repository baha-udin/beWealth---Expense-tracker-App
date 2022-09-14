import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IconArrowDownBlack, IconDate} from '../../../Assets';
import {Gap} from '../../Atoms';
import {Colors} from '../../../Utils';
import {Button} from '../../Atoms';
import styles from './style';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const listIncome = [
  'Gaji bulanan',
  'Side project',
  'Bonus project',
  'Investasi',
  'Pemberian Orang',
];

const IncomeCard = () => {
  // Logic Date Picker
  const [datePicker, setDatePicker] = useState(false);

  // state empty
  const [category, setCategory] = useState();
  const [total, setTotal] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState();

  const handleSubmit = () => {
    console.log(
      `Category: ${category}, total pengeluaran: ${total}, tanggal: ${date}, catatan: ${notes}`,
    );
  };

  // logic show picker
  const showDatePicker = () => {
    setDatePicker(true);
  };
  // logic picker date && handleChange
  const onDateSelected = (event, value) => {
    // value yang diambil, simpan ke date
    setDate(value);
    console.log(date);
    // setelah dapet, picker di close
    setDatePicker(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView style={styles.wrap}>
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Jenis Pemasukan</Text>
        <SelectDropdown
          data={listIncome}
          buttonStyle={styles.wrapButton}
          buttonTextStyle={styles.labelButton}
          renderDropdownIcon={IconArrowDownBlack}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropDown}
          rowTextStyle={styles.textDropDown}
          onSelect={(selectedItem, index) => {
            setCategory(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>
      <Gap height={8} />
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Total</Text>
        <TextInput
          placeholder="total pemasukan"
          style={styles.TextInput}
          placeholderTextColor={Colors.text.gray}
          keyboardType={'numeric'}
          value={total}
          onChangeText={value => setTotal(value)}
        />
      </View>
      <Gap height={8} />
      <View style={styles.wrapLabel}>
        {datePicker && (
          <DateTimePicker
            // value disimpan di date
            value={date}
            // karena ambil date, mode 'date'
            mode={'date'}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            is24Hour={false}
            // handle change after selected date
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
        <Text style={styles.label}>Tanggal</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text
            style={styles.TextInput}
            onChangeText={onChange}
            onDateSelected={onDateSelected}>
            {moment(date).format('DD-MM-YYYY')}
          </Text>
          <Image
            source={IconDate}
            style={{position: 'absolute', right: 10, top: 12}}
          />
        </TouchableOpacity>
      </View>

      <Gap height={8} />
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Catatan</Text>
        <TextInput
          placeholder="catatan..."
          style={styles.TextInput}
          placeholderTextColor={Colors.text.gray}
          value={notes}
          onChangeText={value => setNotes(value)}
        />
      </View>
      <Gap height={28} />
      <Button label={'Simpan'} onPress={handleSubmit} />
      <Gap height={12} />
    </ScrollView>
  );
};

export default IncomeCard;
