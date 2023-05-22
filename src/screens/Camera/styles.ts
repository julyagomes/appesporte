import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../../styles/colors';
    export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
      widht: Dimensions.get('window').width *0.7,
      height: Dimensions.get('window').width *0.7
    },
    icon:{
      fontSize: 28,
      color: colors.black,
      padding: 5
  }
  });