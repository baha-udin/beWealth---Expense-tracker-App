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
import Axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
import {Colors, Fonts, ResHeight, ResWidth} from '../../../Utils';
import {IconArrowDownBlack, IconDate} from '../../../Assets';
import {Button, Gap} from '../../Atoms';
import {styles} from './style';
import {showMessage, hideMessage} from 'react-native-flash-message';
import MaskInput, {createNumberMask} from 'react-native-mask-input';

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

  // state empty
  const [category, setCategory] = useState();
  const [total, setTotal] = useState();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState();

  const handleSubmit = () => {
    if (!total) {
      showMessage({
        message: 'Total expenses is empty, lets input',
        type: 'danger',
      });
    } else if (!category) {
      showMessage({
        message: 'Please input category expense',
        type: 'danger',
      });
    } else if (!date) {
      showMessage({
        message: 'Please input your date',
        type: 'danger',
      });
    } else {
      const data = {
        category: category,
        nominal: total,
        date: date,
        notes: notes,
      };
      Axios.post('http://localhost:3000/expenses', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(resp => {
          console.log(resp.data);
          navigation.navigate('MainMenu', {screen: 'Home'});
          setCategory('');
          setTotal('');
          setNotes('');
        })
        .catch(error => {
          console.log(error);
        });
    }
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

  const RupiahMask = createNumberMask({
    prefix: ['Rp.', ''],
    delimiter: '.',
    precision: 0,
  });
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
        <MaskInput
          value={total}
          onChangeText={(masked, value) => {
            setTotal(value);
          }}
          mask={RupiahMask}
          placeholder="total pengeluaran"
          style={styles.TextInput}
          placeholderTextColor={Colors.text.gray}
          keyboardType={'numeric'}
        />
      </View>
      <Gap height={8} />
      {/* SECTION DATE */}
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
      {/* SECTION NOTES */}
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
