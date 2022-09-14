import {StyleSheet} from 'react-native';
import {Colors, Fonts} from './../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.background,
  },
  background: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePage: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: Fonts.primary[700],
  },
});

export default styles;
