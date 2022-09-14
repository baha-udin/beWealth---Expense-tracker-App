import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ResHeight} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF8F7',
    paddingBottom: 12,
    height: '100%',
  },
  wrapIlustration: {
    width: '100%',
    height: '65%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ResHeight(24),
  },
  title: {
    textAlign: 'center',
    fontSize: ResHeight(36),
    fontWeight: '600',
    color: Colors.text.green,
    textTransform: 'capitalize',
  },
  wrapButton: {},
});

export default styles;
