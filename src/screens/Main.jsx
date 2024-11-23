import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../styles';
import Header from '../components/Header';
import {COLORS, FONTS} from '../helpers/colors';
import {products} from '../products/data';
import MenuItem from '../components/MenuItem';

export default function Main() {
  const [category, setCategory] = React.useState(0);
  return (
    <View style={globalStyles.container}>
      <SafeAreaView />
      <Header />

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => setCategory(0)}
          style={
            category === 0 ? styles.categoryItemActive : styles.categoryItem
          }>
          <Text
            style={category === 0 ? styles.categoryActive : styles.category}>
            Торты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(1)}
          style={
            category === 1 ? styles.categoryItemActive : styles.categoryItem
          }>
          <Text
            style={category === 1 ? styles.categoryActive : styles.category}>
            Капкейки
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(2)}
          style={
            category === 2 ? styles.categoryItemActive : styles.categoryItem
          }>
          <Text
            style={category === 2 ? styles.categoryActive : styles.category}>
            Макаруны
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(3)}
          style={
            category === 3 ? styles.categoryItemActive : styles.categoryItem
          }>
          <Text
            style={category === 3 ? styles.categoryActive : styles.category}>
            Напитки
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={globalStyles.flex} contentContainerStyle={styles.main}>
        {products[category].map((product, index) => (
          <MenuItem key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  categoryItem: {
    width: '47%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.main,
    marginTop: 10,
  },
  categoryItemActive: {
    width: '47%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.main,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.main,
    marginTop: 10,
  },
  category: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.black,
  },
  categoryActive: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
  },
});
