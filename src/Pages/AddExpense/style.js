import {StyleSheet} from 'react-native';
import {Colors, Fonts, ResHeight, ResWidth} from '../../Utils';

export const styles = StyleSheet.create({
  container: {
    height: '70%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
  wrapTopMenu: {
    flex: 1,
    marginHorizontal: ResWidth(16),
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: ResWidth(12),
    borderRadius: 20,
  },
});
