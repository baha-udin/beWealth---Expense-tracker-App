import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ResWidth, ResHeight} from '../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    maxHeight: 200,
  },
  imgHeader: {
    resizeMode: 'cover',
  },
  wrapContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS == 'ios' ? -220 : -250,
    paddingHorizontal: ResWidth(24),
  },
  wrapUser: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 14,
    color: Colors.white,
    letterSpacing: 0.4,
    marginBottom: 6,
    fontFamily: Fonts.primary[400],
  },
  callName: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.white,
    letterSpacing: 0.4,
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
