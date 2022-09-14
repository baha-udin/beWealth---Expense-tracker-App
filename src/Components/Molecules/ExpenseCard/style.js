import {Platform, StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight, Fonts} from '../../../Utils';

export const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: 'white'},
  wrapLabel: {
    marginTop: 12,
  },
  label: {
    fontSize: ResWidth(15),
    letterSpacing: 0.3,
    color: Colors.text.black,
    marginBottom: 10,
  },
  wrapButton: {
    backgroundColor: 'white',
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 12,
    width: '100%',
  },
  labelButton: {
    textAlign: 'left',
    color: Colors.text.gray,
    fontSize: 15,
  },
  dropDown: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: '100%',
    marginTop: '-100%',
  },
  textDropDown: {
    fontSize: ResWidth(16),
    letterSpacing: 0.3,
    color: Colors.text.black,
    fontFamily: Fonts.primary[400],
    paddingVertical: 8,
  },
  TextInput: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: ResHeight(10),
    borderColor: Colors.borderInput,
    borderWidth: 2,
    backgroundColor: 'white',
    fontSize: ResWidth(14),
    letterSpacing: 0.3,
    color: Colors.text.black,
    fontFamily: Fonts.primary[400],
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
