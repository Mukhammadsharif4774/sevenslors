import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Reserve() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Header />

      <Text style={styles.title}>Реезрв столика</Text>

      <ScrollView style={globalStyles.flex} contentContainerStyle={styles.main}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.textInputPlaceHolder}
          placeholder={'Имя...'}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.textInputPlaceHolder}
          placeholder={'Номер телефона'}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.textInputPlaceHolder}
          placeholder={'Столик'}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.textInputPlaceHolder}
          placeholder={'Время'}
        />

        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.textInputPlaceHolder}
          placeholder={'Дата'}
        />

        <CustomButton
          text={'Зарезервировать'}
          style={{marginTop: Dimensions.get('window').height * 0.15}}
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'ReserveSuccess',
            })
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    padding: 20,
    textAlign: 'center',
  },
  main: {
    paddingBottom: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 60,
  },
  textInput: {
    height: 50,
    width: '85%',
    marginTop: 10,
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 12,
  },
});
