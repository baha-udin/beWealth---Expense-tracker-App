import {StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight, Fonts} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? -220 : -250,
    paddingHorizontal: ResWidth(24),
    backgroundColor: 'red',
  },
  wrapUser: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    color: Colors.text.black,
    letterSpacing: 0.4,
    marginBottom: 6,
    fontFamily: Fonts.primary[400],
  },
});

export default styles;
