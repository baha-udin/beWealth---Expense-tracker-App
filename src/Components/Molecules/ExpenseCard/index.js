import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Colors, Fonts, ResHeight, ResWidth} from '../../../Utils';
import {IconArrowDownBlack, IconDate} from '../../../Assets';
import {Button, Gap} from '../../Atoms';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {styles} from './style';
import {BottomSheet} from 'react-native-btr';

const listExpense = [
  'Asuransi',
  'Bayar Kos',
  'Belanja Bulanan',
  'Bensin',
  'Cemilan',
  'Hadiah',
  'Hiburan',
  'Investasi',
  'Kesehatan',
  'Kopi',
  'Kuota',
  'Listrik',
  'Makan',
  'Minum',
  'Motor',
  'Olahraga',
  'Parkir',
  'Pendidikan',
  'Pengembangan diri',
  'Perawatan diri',
  'Rokok',
  'Sabun dll bulanan',
  'Sosial',
  'Tidak terdata',
  'Wifi',
];

const ExpenseCard = ({navigation}) => {
  // Logic Date Picker
  const [datePicker, setDatePicker] = useState(false);
  const [visible, setVisible] = useState(false);

  // state empty
  const [category, setCategory] = useState();
  const [total, setTotal] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState();

  const handleSubmit = () => {
    setVisible(!visible);
    console.log(
      `Category: ${category}, total pengeluaran: ${total}, tanggal: ${date}, catatan: ${notes}`,
    );
  };

  // logic show picker
  const showDatePicker = () => {
    setDatePicker(true);
  };
  // logic picker date && handleChange
  const onDateSelected = (event, selectedDate) => {
    // value yang diambil, simpan ke date
    setDate(selectedDate);
    // setelah dapet, picker di close
    setDatePicker(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setDatePicker(false);
  };
  return (
    <ScrollView style={styles.wrap}>
      {/* Section pick category */}
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Jenis Pengeluaran</Text>
        <SelectDropdown
          data={listExpense}
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
      {/* section piick total expense */}
      <View style={styles.wrapLabel}>
        <Text style={styles.label}>Total</Text>
        <TextInput
          placeholder="total pengeluaran"
          style={styles.TextInput}
          placeholderTextColor={Colors.text.gray}
          keyboardType={'numeric'}
          value={total}
          onChangeText={value => setTotal(value)}
        />
      </View>
      <Gap height={8} />
      {/* section get date */}
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
            style={{
              position: 'absolute',
              right: 12,
              top: 12,
              width: ResWidth(24),
            }}
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

export default ExpenseCard;
