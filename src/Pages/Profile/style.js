import {Platform, StyleSheet} from 'react-native';
import {Colors, Fonts, ResHeight, ResWidth} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? '15%' : '30%',
    marginBottom: '5%',
    marginHorizontal: 20,
  },
  wrapTop: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '60%',
  },
  wrapPhoto: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 125 / 2,
    backgroundColor: Colors.white,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: 125,
    width: 125,
  },
  picture: {
    width: 115,
    height: 115,
    resizeMode: 'cover',
  },
  name: {
    marginTop: ResHeight(12),
    fontSize: ResHeight(20),
    fontFamily: Fonts.primary[600],
    color: Colors.black,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    borderColor: Colors.border,
    borderWidth: 0.5,
  },
});

export default styles;
