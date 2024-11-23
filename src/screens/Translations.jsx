import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';

export default function Translations() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Header />

      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NBA</Text>
            </View>

            <Text style={styles.time}>13.12 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Atlanta Hawks</Text>
            <Text style={styles.text}>Detroit Pistons</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NHL</Text>
            </View>

            <Text style={styles.time}>13.12 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Calgary Flames</Text>
            <Text style={styles.text}>Dallas Stars</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>MLB</Text>
            </View>

            <Text style={styles.time}>13.12 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Miami Marlins</Text>
            <Text style={styles.text}>Cincinnati Reds</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NFL</Text>
            </View>

            <Text style={styles.time}>13.12 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Baltimore Ravens</Text>
            <Text style={styles.text}>Houston Texans</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontFamily: FONTS.black,
    fontSize: 32,
    color: COLORS.black,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },
  time: {
    fontFamily: FONTS.black,
    fontSize: 11,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 5,
  },
  texts: {
    marginLeft: 10,
    width: '70%',
  },
  text: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: 22,
    color: COLORS.black,
    marginTop: 5,
    letterSpacing: 1.2,
  },
  titleContainer: {
    borderRadius: 6,
    borderColor: COLORS.main,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    width: 100,
  },
});
