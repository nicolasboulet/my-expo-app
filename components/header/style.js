import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const style = StyleSheet.create({
  subHeader:{
    backgroundColor: APP_COLORS.darkPrimary,
    height: 30,
  },
  header:{
    backgroundColor: APP_COLORS.primary,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: APP_COLORS.primaryText,
    fontSize: 30
  }
});
