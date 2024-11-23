import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import {COLORS, FONTS} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function CartSuccess() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <ImageBackground style={globalStyles.container}>
        <Header />

        <Text style={styles.title}>Спасибо за {'\n'} заказ!</Text>

        <View style={globalStyles.qrImage}>
          <QRCode
            value={'https://www.restoclub.ru/msk/place/longdrink'}
            size={Dimensions.get('window').width / 3}
            color={COLORS.black}
          />
        </View>

        <CustomButton
          text={'НА ГЛАВНУЮ'}
          style={{position: 'absolute', bottom: 50}}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'Main',
            })
          }
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    padding: 20,
    marginTop: 100,
    backgroundColor: COLORS.textBackground,
    paddingVertical: 30,
  },
});
