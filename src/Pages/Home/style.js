import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ResWidth, ResHeight} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapHistory: {
    marginHorizontal: 24,
  },

  wrapBottomSheet: {
    position: 'absolute',
    width: ResWidth(50),
    height: ResHeight(115),
    bottom: 30,
    right: 30,
  },
});

export default styles;
