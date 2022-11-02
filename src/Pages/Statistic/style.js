import {StyleSheet} from 'react-native';
import {Colors, ResWidth, ResHeight, Fonts} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    flex: 1,
  },
  wrapTopMenu: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: ResWidth(10),
    borderRadius: 20,
  },
  wrapHeader: {
    paddingHorizontal: ResWidth(24),
    justifyContent: 'center',
    marginTop: Platform.OS == 'ios' ? 40 : '3%',
    height: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: ResWidth(20),
    fontFamily: Fonts.primary[600],
    color: Colors.text.black,
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 0.6,
  },
});

export default styles;
