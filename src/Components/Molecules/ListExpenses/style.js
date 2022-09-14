import {StyleSheet} from 'react-native';
import {Colors, ResWidth} from '../../../Utils';

const styles = StyleSheet.create({
  wrapListExpense: {
    marginHorizontal: 24,
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: ResWidth(16),
    fontWeight: '600',
    color: Colors.text.black,
    opacity: 0.9,
  },
  onMore: {
    fontSize: ResWidth(14),
    fontWeight: '400',
    color: Colors.text.gray,
  },
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

export default styles;
